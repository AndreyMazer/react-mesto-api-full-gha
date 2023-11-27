const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const { errors } = require("celebrate");
const winston = require("winston");
const expressWinston = require("express-winston");
const router = require("./routes/index");

const { PORT = 3000, DB_URL = "mongodb://127.0.0.1/mestodb" } = process.env;

const app = express();
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

mongoose.connect(DB_URL);
app.use(router);

const reqLog = expressWinston.logger({
  transports: [new winston.transports.File({ filename: "request.log" })],
  format: winston.format.json(),
});

const errLog = expressWinston.errorLogger({
  transports: [new winston.transports.File({ filename: "error.log" })],
  format: winston.format.json(),
});

app.use(reqLog);
app.use(errLog);

app.use(errors());
app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;

  res.status(statusCode).send({
    message: statusCode === 500 ? "На сервере произошла ошибка" : message,
  });
  return next();
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

module.exports = {
  reqLog,
  errLog,
};
