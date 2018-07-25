const {
  rewireWorkboxGenerate,
  defaultInjectConfig
} = require('react-app-rewire-workbox');

module.exports = function override(config, env) {
  if (env === 'production') {
    console.log('Production build - Adding Workbox for PWAs');
    const workboxConfig = {
      ...defaultInjectConfig,
      globPatterns: ['**/*.{json,jpg,html,js,css,woff2,woff}']
    };
    // eslint-disable-next-line
    config = rewireWorkboxGenerate(workboxConfig)(config, env);
  }
  return config;
};
