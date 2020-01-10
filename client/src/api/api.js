import axios from "axios";
//获取轮播图列表
export function getbannerlist({ type }) {
  let url = "/api/api/getbannerlist";
  return axios.post(url, { type });
}
//获取导航列表
export function getnavlist() {
  let url = "/api/api/getnavlist";
  return axios.get(url);
}
//获取tab列表
export function gettablist() {
  let url = "/api/api/gettablist";
  return axios.get(url);
}
//点击每一项出现不同的列表
export function tabtype({ type }) {
  let url = "/api/api/tabtype";
  return axios.post(url, { type });
}
//获取地址列表
export function getaddress() {
  let url = "/api/api/getaddress";
  return axios.get(url);
}
//添加地址接口
export function addaddress({ name, phone, street, detailed }) {
  let url = "/api/api/addaddress";
  return axios.post(url, { name, phone, street, detailed });
}
//模糊搜索地址列表
export function seaaddress({ sea }) {
  let url = "/api/api/seaaddress";
  return axios.post(url, { sea });
}
//编辑地址列表
export function editaddress({ name, phone, street, detailed, id }) {
  let url = "/api/api/editaddress";
  return axios.post(url, { name, phone, street, detailed, id });
}
//删除地址列表
export function deladdress({ id }) {
  let url = "/api/api/deladdress";
  return axios.post(url, { id });
}
//获取tableftlist
export function gettableftlist() {
  let url = "/api/api/gettableftlist";
  return axios.get(url);
}
//获取tabtoplist
export function gettabtoplist({ type }) {
  let url = "/api/api/gettabtoplist";
  return axios.post(url, { type });
}
//获取tabrightlist
export function getshoprightlist({ typeid }) {
  let url = "/api/api/getshoprightlist";
  return axios.post(url, { typeid });
}
export function getshoprightlists({ type }) {
  let url = "/api/api/getshoprightlists";
  return axios.post(url, { type });
}
//添加购物车
export function addshopcar({ title, img, money, types, count }) {
  let url = "/api/api/addshopcar";
  return axios.post(url, { title, img, money, types, count });
}
//获取购物车
export function getshopcar() {
  let url = "/api/api/getshopcar";
  return axios.get(url);
}
//加加购物车
export function jiashopcar({ id }) {
  let url = "/api/api/jiashopcar";
  return axios.post(url, { id });
}
//减减购物车
export function jianshopcar({ id }) {
  let url = "/api/api/jianshopcar";
  return axios.post(url, { id });
}
//删除数据
export function delshopcar({ id }) {
  let url = "/api/api/delshopcar";
  return axios.post(url, { id });
}

export function qqemaillogin({ emails }) {
  let url = "/api/api/qqemaillogin";
  return axios.post(url, { emails });
}
//用户名登录
export function login({ username, password }) {
  let url = "/api/api/login";
  return axios.post(url, { username, password });
}
//用户名密码注册
export function registry({ username, password }) {
  let url = "/api/api/registry";
  return axios.post(url, { username, password });
}
