const Base = require('./base');

const errorHandler = require('../error-handler');
const normalizeQuery = require('../normalize-query');

module.exports = class Service extends Base {
  find(params) {}

  get(id, params) {}

  create(data, params) {
    const query = normalizeQuery(params);

    const index = this.client.initIndex(query.indexName);

    return index.addObjects(data, (err, content) => {
      if (err) errorHandler(err);

      return content;
    });
  }

  patch(...args) {
    return this.update(...args);
  }

  update(id, data, params) {}

  remove(id, params) {}
};
