"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async banner() {
    let { ctx } = this;
    let { type } = ctx.request.body;
    let $sql = `select * from bannerlist where type=?`;
    let result = await this.app.mysql.query($sql, [type]);
    ctx.body = {
      code: 0,
      result
    };
  }
  async getbannercms() {
    let { ctx } = this;
    let $sql = `select * from bannerlist`;
    let result = await this.app.mysql.query($sql);
    ctx.body = {
      code: 0,
      result
    };
  }
  async upbanner() {
    let { ctx } = this;
    let { flag, id } = ctx.request.body;
    let $sql = `update bannerlist set type=${flag} where id=${id}`;
    let result = await this.app.mysql.query($sql);
    ctx.body = {
      code: 0,
      result,
      msg: "成功"
    };
  }
  async nav() {
    let { ctx } = this;
    let $sql = `select * from navlist`;
    let result = await this.app.mysql.query($sql);
    ctx.body = {
      code: 0,
      result
    };
  }
  async tab() {
    let { ctx } = this;
    let $sql = `select * from tab`;
    let result = await this.app.mysql.query($sql);
    ctx.body = {
      code: 0,
      result
    };
  }
  async tabtype() {
    let { ctx } = this;
    let { type } = ctx.request.body;
    let $sql = `select * from shoplist where type=?`;
    let $params = [type];
    let result = await this.app.mysql.query($sql, $params);
    ctx.body = {
      code: 0,
      result,
      msg: "成功"
    };
  }
}

module.exports = HomeController;
