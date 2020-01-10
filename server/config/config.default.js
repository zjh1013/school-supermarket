/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1576639001758_1841";

  // add your middleware config here
  config.middleware = [];

  const userConfig = {
    // myAppName: 'egg',
    security: {
      csrf: false
    },
    mysql: {
      // database configuration
      client: {
        // host
        host: "localhost",
        // port
        port: "3306",
        // username
        user: "root",
        // password
        password: "123321",
        // database
        database: "xycs"
      },
      // load into app, default is open
      app: true,
      // load into agent, default is close
      agent: false
    }
  };

  return {
    ...config,
    ...userConfig
  };
};
