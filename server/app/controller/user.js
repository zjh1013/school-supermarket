"use strict";

const Controller = require("egg").Controller;
var Mail = require("./mail");

class UserController extends Controller {
  async login() {
    let { ctx } = this;
    let { username, password } = ctx.request.body;
    let $sql = `select * from user where username = ? and password = ?`;
    let $params = [username, password];
    let result = await this.app.mysql.query($sql, $params);
    if (result.length) {
      ctx.body = {
        code: 0,
        result,
        message: "登录成功"
      };
    } else {
      ctx.body = {
        code: 1,
        message: "用户名或者密码输入错误"
      };
    }
  }
  async registry() {
    let { ctx } = this;
    let { username, password } = ctx.request.body;
    let $sql = `select * from user where username='${username}'`;
    let results = await this.app.mysql.query($sql);
    if (!results.length) {
      let $sqls = `insert into user(username,password)values(?,?)`;
      let $params = [username, password];
      let result = await this.app.mysql.query($sqls, $params);
      ctx.body = {
        code: 0,
        message: "注册成功",
        result
      };
    } else {
      ctx.body = {
        code: 1,
        message: "用户名已存在，换一个试试亲~！"
      };
    }
  }
  async qqemaillogin() {
    let { ctx } = this;
    let { emails } = ctx.request.body;
    let code = Math.random()
      .toString()
      .substr(2, 6);
    ctx.cookies.set("yan", code);
    Mail.send(emails, code);
    ctx.body = {
      code: 0,
      message: "成功"
    };
  }
  async meilLogin() {
    const { ctx } = this;
    const { yan } = ctx.request.body;
    if (yan == ctx.cookies.get("yan")) {
      ctx.body = {
        code: 0,
        msg: "登录成功"
      };
    } else {
      ctx.body = {
        code: -1,
        msg: "登录失败"
      };
    }
  }
}

module.exports = UserController;
