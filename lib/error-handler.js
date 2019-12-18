const errors = require('@feathersjs/errors');

module.exports = function errorHandler(error) {
  let feathersError = error;

  if (error.type) {
    switch (error.type) {
      case 'AlgoliaInvalidRequestError':
        feathersError = new errors.BadRequest(error, error);
        break;
      default:
        feathersError = new errors.GeneralError('Unknown Algolia Error', error);
    }
  }

  return Promise.reject(feathersError);
};
