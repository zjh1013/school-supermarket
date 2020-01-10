"use strict";
/** @type Egg.EggPlugin */
module.exports = {
  static: {
    enable: true
  },
  mysql: {
    enable: true,
    package: "egg-mysql"
  }
};
