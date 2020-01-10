import React, { Component } from "react";
import { inject, observer } from "mobx-react";
@inject("Home")
@observer
class Icon extends Component {
  state = {
    token: "123456789"
  };
  render() {
    return (
      <div>
        <h1>当前时间戳：{this.props.Home.dataTime}</h1>
        <h1>随机六位数字：{this.props.Home.random}</h1>
        <button onClick={this.add.bind(this)}>点我+1</button>
        <h1>{this.props.Home.num}</h1>
        <button onClick={this.sub.bind(this)}>点我-1</button>
        <br />
        <button onClick={this.cuntoken.bind(this)}>点我存token</button>
        <h1>{this.props.Home.token}</h1>
        <button onClick={this.props.Home.isfalse}>显示隐藏</button>
        <div
          style={{
            width: "100px",
            height: "100px",
            background: "red",
            display: this.props.Home.flag ? "block" : "none"
          }}
        ></div>
      </div>
    );
  }
  add() {
    this.props.Home.add();
  }
  sub() {
    this.props.Home.sub();
  }
  cuntoken() {
    this.props.Home.cun(this.state.token);
  }
}
export default Icon;
