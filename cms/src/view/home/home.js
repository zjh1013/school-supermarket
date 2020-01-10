import React, { Component } from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import Banner from "./banner";
import IconNav from "./iconNav";
import { Menu, Icon } from "antd";
const { SubMenu } = Menu;
export default class componentName extends Component {
  handleClick = e => {
    console.log("click ", e);
  };
  render() {
    return (
      <div className="content">
        <div className="content-top">
          <h1>校园超市后台管理系统</h1>
        </div>
        <div className="content-bottom">
          <div className="bottom-left">
            <Menu
              theme=""
              onClick={this.handleClick}
              style={{ width: 256 }}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
            >
              <SubMenu
                key="sub1"
                selectable="true"
                title={
                  <span>
                    <Icon type="mail" />
                    <span>主页管理</span>
                  </span>
                }
              >
                <Menu.Item key="3">
                  <NavLink to="/home/banner">轮播图管理</NavLink>
                </Menu.Item>
                <Menu.Item key="4">
                  <NavLink to="/home/iconNav">Mobx练习demo</NavLink>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="appstore" />
                    <span>Navigation Two</span>
                  </span>
                }
              >
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
              </SubMenu>
            </Menu>
          </div>
          <div className="bottom-right">
            <Switch>
              <Route path="/home/banner" component={Banner} />
              <Route path="/home/iconNav" component={IconNav} />
              <Redirect from="/home" to="/home/banner" />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
