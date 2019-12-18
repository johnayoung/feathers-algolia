// this is to support both browser and node
const algoliasearch = require('algoliasearch');

module.exports = class BaseService {
  constructor(options = {}) {
    const { app_id, api_key } = options;

    if (!options.app_id) {
      throw new Error('Algolia `app_id` needs to be provided');
    }

    if (!options.api_key) {
      throw new Error('Algolia `api_key` needs to be provided');
    }

    const ALGOLIA = algoliasearch(app_id, api_key);

    this.client = ALGOLIA;
    this.paginate = options.paginate = {};
    this.id = 'id';
  }
};
