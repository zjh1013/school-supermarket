"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async getaddress() {
    let { ctx } = this;
    let $sql = `select * from address`;
    let result = await this.app.mysql.query($sql);
    ctx.body = {
      code: 0,
      result
    };
  }
  async addaddress() {
    let { ctx } = this;
    let { name, phone, street, detailed } = ctx.request.body;
    let $sql = `select * from address where name='${name}'`;
    let results = await this.app.mysql.query($sql);
    if (!results.length) {
      let $sqls = `insert into address(name, phone,street,detailed)values(?,?,?,?)`;
      let $params = [name, phone, street, detailed];
      let result = await this.app.mysql.query($sqls, $params);
      ctx.body = {
        code: 0,
        message: "添加成功",
        result
      };
    } else {
      ctx.body = {
        code: 1,
        message: "添加失败，联系人已经存在"
      };
    }
  }
  async seaaddress() {
    let { ctx } = this;
    let { sea } = ctx.request.body;
    let $sql = `SELECT * FROM address WHERE detailed LIKE '%${sea}%'`;
    let result = await this.app.mysql.query($sql);
    ctx.body = {
      code: 0,
      result
    };
  }
  //   UPDATE `xycs`.`address` SET `street`='北京市' WHERE  `id`=1;
  async editaddress() {
    let { ctx } = this;
    let { name, phone, street, detailed, id } = ctx.request.body;
    // let $sql = `select * from address where name='${name}'`;
    // let results = await this.app.mysql.query($sql);
    // if (!results.length) {
    let $sqls = `UPDATE address SET name=?,phone=?,street=?,detailed=? WHERE  id=?`;
    let $params = [name, phone, street, detailed, id];
    let result = await this.app.mysql.query($sqls, $params);
    ctx.body = {
      code: 0,
      message: "编辑成功",
      result
    };
    // } else {
    //   ctx.body = {
    //     code: 1,
    //     message: "编辑失败，联系人已经存在"
    //   };
    // }
  }
  //   DELETE FROM `xycs`.`address` WHERE  `id`=6;
  async deladdress() {
    let { ctx } = this;
    let { id } = ctx.request.body;
    let $sql = `DELETE FROM address WHERE id=?`;
    let $params = [id];
    let result = await this.app.mysql.query($sql, $params);
    ctx.body = {
      code: 0,
      result
    };
  }
}

module.exports = HomeController;
