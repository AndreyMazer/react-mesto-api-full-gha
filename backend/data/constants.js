const SUCCESSFUL_ANSWER = 201;
const URL_VALIDATE =
  /^https?:\/\/(?:w{3}\.)?(?:[a-z0-9]+[a-z0-9-]*\.)+[a-z]{2,}(?::[0-9]+)?(?:\/\S*)?#?$/i;
const allowedCors = [
  "http://localhost:3000",
  "https://localhost:3000",
  "https://andreymazer.nomoredomainsrocks.ru",
  "http://andreymazer.nomoredomainsrocks.ru",
];
const DEFAULT_ALLOWED_METHODS = "GET,HEAD,PUT,PATCH,POST,DELETE";

module.exports = {
  SUCCESSFUL_ANSWER,
  URL_VALIDATE,
  allowedCors,
  DEFAULT_ALLOWED_METHODS,
};
