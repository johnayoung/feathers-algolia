const Base = require('./base');

const errorHandler = require('../error-handler');
const normalizeQuery = require('../normalize-query');

module.exports = class Service extends Base {
  find(params) {
    // const query = normalizeQuery(params);
    return this.client.listIndexes((err, content) => {
      if (err) errorHandler(err);

      return content;
    });
  }

  get(id, params) {}

  create(data, params) {}

  patch(...args) {
    return this.update(...args);
  }

  update(id, data, params) {}

  remove(id, params) {
    if (!id) {
      return errorHandler({ type: 'AlgoliaInvalidRequestError' });
    }
    return this.client.deleteIndex(id, (err, content) => {
      if (err) errorHandler(err);

      console.log('success');
    });
  }
};
