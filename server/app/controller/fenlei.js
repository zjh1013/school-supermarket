"use strict";

const Controller = require("egg").Controller;

class FenlaiController extends Controller {
  async gettableftlist() {
    let { ctx } = this;
    let $sql = `select * from tableft`;
    let result = await this.app.mysql.query($sql);
    ctx.body = {
      code: 0,
      result
    };
  }
  async gettabtoplist() {
    let { ctx } = this;
    let { type } = ctx.request.body;
    let $sql = `select * from tabtop where type=?`;
    let $params = [type];
    let result = await this.app.mysql.query($sql, $params);
    ctx.body = {
      code: 0,
      result
    };
  }
  async getshoprightlist() {
    let { ctx } = this;
    let { typeid } = ctx.request.body;
    let $sql = ` SELECT * FROM shopright WHERE  typeid=?`;
    let $params = [typeid];
    let result = await this.app.mysql.query($sql, $params);
    ctx.body = {
      code: 0,
      result
    };
  }
  async getshoprightlists() {
    let { ctx } = this;
    let { type } = ctx.request.body;
    let $sql = ` SELECT * FROM shopright WHERE type=?`;
    let $params = [type];
    let result = await this.app.mysql.query($sql, $params);
    ctx.body = {
      code: 0,
      result
    };
  }
}
module.exports = FenlaiController;
