"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  /**
   * @用户的登录注册
   */
  router.post("/api/login", controller.user.login); //登录
  router.post("/api/qqemaillogin", controller.user.qqemaillogin); //邮箱验证码
  router.post("/api/meilLogin", controller.user.meilLogin); //邮箱登录
  router.post("/api/registry", controller.user.registry); //注册
  /**
   * @获取轮播图和导航
   */
  router.post("/api/getbannerlist", controller.home.banner); //获取轮播图type值为1的
  router.get("/api/getbannercms", controller.home.getbannercms); //获取所有轮播图后台管理的
  router.post("/api/upbanner", controller.home.upbanner); //更新轮播图type
  router.get("/api/getnavlist", controller.home.nav); //获取导航按钮
  router.get("/api/gettablist", controller.home.tab); //获取分类tab
  router.post("/api/tabtype", controller.home.tabtype); //点击获取分类
  /**
   * @地址
   */
  router.get("/api/getaddress", controller.address.getaddress); //获取地址列表
  router.post("/api/addaddress", controller.address.addaddress); //添加地址列表
  router.post("/api/seaaddress", controller.address.seaaddress); //搜索地址列表
  router.post("/api/editaddress", controller.address.editaddress); //编辑地址列表
  router.post("/api/deladdress", controller.address.deladdress); //删除地址列表
  /**
   * @分类
   */
  router.get("/api/gettableftlist", controller.fenlei.gettableftlist); //获取tableftlist
  router.post("/api/gettabtoplist", controller.fenlei.gettabtoplist); //获取tabtoplist
  router.post("/api/getshoprightlist", controller.fenlei.getshoprightlist); //获取shoprightlist
  router.post("/api/getshoprightlists", controller.fenlei.getshoprightlists); //获取shoprightlists
  /**
   * @购物车
   */
  router.post("/api/addshopcar", controller.shopcar.addshopcar); //添加购物车
  router.get("/api/getshopcar", controller.shopcar.getshopcar); //获取购物车数据
  router.post("/api/jiashopcar", controller.shopcar.jiashopcar); //加加数据
  router.post("/api/jianshopcar", controller.shopcar.jianshopcar); //减减数据
  router.post("/api/delshopcar", controller.shopcar.delshopcar); //减到0删除该数据
};
