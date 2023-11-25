const router = require("express").Router();
const { celebrate, Joi } = require("celebrate");
const {
  getInitialCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require("../controllers/cards");
const { URL_VALIDATE } = require("../data/constants");

router.get("/", getInitialCards);
router.post(
  "/",
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().min(2).max(30).required(),
      link: Joi.string().min(2).required().regex(URL_VALIDATE),
    }),
  }),
  createCard
);
router.delete(
  "/:id",
  celebrate({
    params: Joi.object().keys({
      cardId: Joi.string().length(24).hex().required(),
    }),
  }),
  deleteCard
);

router.put(
  "/:id/likes",
  celebrate({
    params: Joi.object().keys({
      cardId: Joi.string().length(24).hex().required(),
    }),
  }),
  likeCard
);
router.delete(
  "/:id/likes",
  celebrate({
    params: Joi.object().keys({
      cardId: Joi.string().length(24).hex().required(),
    }),
  }),
  dislikeCard
);

module.exports = router;
