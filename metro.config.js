const { getDefaultConfig } = require('metro-config');
const _ = require('lodash');

(async () => {
  const defaultConfig = await getDefaultConfig(__dirname);

  const customConfig = {
    resolver: {
      sourceExts: ['js', 'ts', 'tsx', 'svg', 'jsx', 'csx'],
    },
  };

  module.exports = _.merge(defaultConfig, customConfig);
})();
