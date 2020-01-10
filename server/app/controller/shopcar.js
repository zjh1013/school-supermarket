"use strict";
const Controller = require("egg").Controller;
class ShopcarController extends Controller {
  async addshopcar() {
    let { ctx } = this;
    let { title, img, money, types, count } = ctx.request.body;
    let $cha = `select * from shopcar where types=${types}`;
    let res = await this.app.mysql.query($cha);
    if (res.length) {
      let $up = `update shopcar set count=(count*1)+1 where types=${types}`;
      let up = await this.app.mysql.query($up);
      ctx.body = {
        code: 0,
        up
      };
    } else {
      let $sql = `insert into shopcar (title,img,money,types,count)values(?,?,?,?,?)`;
      let $params = [title, img, money, types, count];
      let result = await this.app.mysql.query($sql, $params);
      ctx.body = {
        code: 0,
        result
      };
    }
  }
  async getshopcar() {
    let { ctx } = this;
    let $sql = `select * from shopcar`;
    let result = await this.app.mysql.query($sql);
    ctx.body = {
      code: 0,
      result
    };
  }
  async jiashopcar() {
    let { ctx } = this;
    let { id } = ctx.request.body;
    let $sql = `update shopcar set count=(count*1)+1 where id=?`;
    let $params = [id];
    let result = await this.app.mysql.query($sql, $params);
    ctx.body = {
      code: 0,
      result
    };
  }
  async jianshopcar() {
    let { ctx } = this;
    let { id } = ctx.request.body;
    let $sql = `update shopcar set count=(count*1)-1 where id=?`;
    let $params = [id];
    let result = await this.app.mysql.query($sql, $params);
    ctx.body = {
      code: 0,
      result
    };
  }
  async delshopcar() {
    let { ctx } = this;
    let { id } = ctx.request.body;
    let $sql = `DELETE FROM shopcar WHERE id=?`;
    let $params = [id];
    let result = await this.app.mysql.query($sql, $params);
    ctx.body = {
      code: 0,
      result
    };
  }
}
module.exports = ShopcarController;
