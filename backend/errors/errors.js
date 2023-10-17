const ValidationError = require('./validationError');
const UnauthorizedError = require('./unauthorizedError');
const ForbiddenError = require('./forbiddenError');
const NotFoundError = require('./notFoundError');
const ConflictError = require('./conflictError');
const ServerError = require('./serverError');

module.exports = {
  ValidationError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  ConflictError,
  ServerError,
};