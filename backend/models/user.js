const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const UnauthorizedError = require("../errors/unauthorizedError");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "Жак-Ив Кусто",
    minlength: [2, "Минимальное количество символов не менее 2"],
    maxlength: [30, "Максимальное количество символов не более 30"],
  },
  about: {
    type: String,
    default: "Исследователь",
    minlength: [2, "Минимальное количество символов не менее 2"],
    maxlength: [30, "Максимальное количество символов не более 30"],
  },
  avatar: {
    type: String,
    default:
      "https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png",
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});

userSchema.statics.findUserReference = function findUser(email, password) {
  return this.findOne({ email })
    .select("+password")
    .then((users) => {
      if (!users) {
        return Promise.reject(
          new UnauthorizedError("Неверные email или пароль")
        );
      }
      
      return bcrypt.compare(password, users.password).then((matched) => {
        if (!matched) {
          return Promise.reject(
            new UnauthorizedError("Неверные email или пароль")
          );
        }

        return users;
      });
    });
};

module.exports = mongoose.model("user", userSchema);
