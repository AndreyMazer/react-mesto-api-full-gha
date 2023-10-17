const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getAllUsers,
  getUser,
  updateProfile,
  updateAvatar,
  getActualUser,
} = require('../controllers/users');
const { URL_VALIDATE } = require('../data/constants');

router.get('/', getAllUsers);
router.get('/me', getActualUser);
router.get(
  '/:userId',
  celebrate({
    params: Joi.object().keys({
      userId: Joi.string().alphanum().length(24).hex(),
    }),
  }),
  getUser,
);
router.patch(
  '/me',
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().min(2).max(30).required(),
      about: Joi.string().min(2).max(30).required(),
    }),
  }),
  updateProfile,
);
router.patch(
  '/me/avatar',
  celebrate({
    body: Joi.object().keys({
      avatar: Joi.string().regex(URL_VALIDATE),
    }),
  }),
  updateAvatar,
);

module.exports = router;