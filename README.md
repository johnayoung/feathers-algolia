# feathers-algolia

[![Build Status](https://travis-ci.org/feathersjs/plugins.png?branch=master)](https://travis-ci.org/feathersjs/plugins)

> **Unofficial** Feathers plugin service for Algolia

## Installation

```
npm install feathers-algolia --save
```

## Documentation

Please refer to the [Algolia Docs](https://www.algolia.com/doc/api-client/getting-started/install/javascript/?language=javascript) for options that can be passed.

### Available Services

The following services are supported and map to the appropriate Stripe resource:

- `Indexing`
- `ManageIndices`

## Complete Example

Here's an example of a Feathers server that uses `coinapi`.

```js
const feathers = require("@feathersjs/feathers");
const plugin = require("feathers-coinapi");

// Provide Algolia search credentials
const algoliaCredentials = {
    app_id: 'YOUR_APP_ID',
    api_key: 'YOUR_API_KEY'
}

// Initialize the application
const app = feathers();

// Initialize the plugin with your Algolia credentials
app.configure(plugin(algoliaCredentials));
```

## License

Copyright (c) 2019

Licensed under the [MIT license](LICENSE).
