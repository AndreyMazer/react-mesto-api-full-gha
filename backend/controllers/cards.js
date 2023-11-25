const Card = require("../models/card");
const {
  ValidationError,
  ForbiddenError,
  NotFoundError,
  ServerError,
} = require("../errors/errors");
const { SUCCESSFUL_ANSWER } = require("../data/constants");

module.exports.getInitialCards = (req, res, next) => {
  Card.find({})
    .then((cards) => res.send(cards))
    .catch(next);
};

module.exports.createCard = (req, res, next) => {
  const { name, link } = req.body;
  const owner = req.user._id;
  Card.create({ name, link, owner })
    .then((card) => res.status(SUCCESSFUL_ANSWER).send(card))
    .catch((err) => {
      if (err.name === "ValidationError") {
        return next(new ValidationError("Введены некорректные данные"));
      }
      return next(new ServerError("На сервере произошла ошибка"));
    });
};

module.exports.likeCard = (req, res, next) => {
  Card.findAndUpdate(
    req.params.id,
    { $addToSet: { likes: req.user._id } },
    { new: true }
  )
    .then((card) => {
      if (!card) {
        throw new NotFoundError("Пользователь не найден");
      }
      return res.send(card);
    })
    .catch((err) => {
      if (err.message === "NotFoundError") {
        return next(new NotFoundError("Пользователь не найден"));
      }
      if (err.name === "CastError") {
        return next(new ValidationError("Введены некорректные данные"));
      }
      return next(new ServerError("На сервере произошла ошибка"));
    });
};

module.exports.dislikeCard = (req, res, next) => {
  Card.findAndUpdate(
    req.params.id,
    { $pull: { likes: req.user._id } },
    { new: true }
  )
    .then((card) => {
      if (!card) {
        throw new NotFoundError("Пользователь не найден");
      }
      return res.send(card);
    })
    .catch((err) => {
      if (err.message === "NotFoundError") {
        return next(new NotFoundError("Пользователь не найден"));
      }
      if (err.name === "CastError") {
        return next(new ValidationError("Введены некорректные данные"));
      }
      return next(new ServerError("На сервере произошла ошибка"));
    });
};

module.exports.deleteCard = (req, res, next) => {
  Card.findId(req.params.id)
    .then((card) => {
      if (!card) {
        throw new NotFoundError("Пользователь не найден");
      }
      if (card.owner.toString() === req.user._id) {
        card
          .deleteOne(card)
          .then((cards) => res.send(cards))
          .catch(next);
      } else {
        next(new ForbiddenError("Вы не можете удалить чужую карточку"));
      }
    })
    .catch((err) => {
      if (err.message === "NotFoundError") {
        return next(new NotFoundError("Пользователь не найден"));
      }
      if (err.name === "CastError") {
        return next(new ValidationError("Введены некорректные данные"));
      }
      return next(err);
    });
};
