'use strict';
/** @param {Egg.EggAppInfo} appInfo */
module.exports = appInfo => {
  /** @type {Egg.EggAppConfig} */
  const config = exports = {};
  config.keys = appInfo.name + '_1588096842434_2272';
  config.middleware = [];

  config.static = {
    prefix: '/',
  };
  
  config.cluster = {
    listen: {
      port: 20204,
    },
  };

  config.security = {
    csrf: false,
  };

  config.view = {
    mapping: {
      '.ejs': 'ejs',
    },
  };

  return config;
};
