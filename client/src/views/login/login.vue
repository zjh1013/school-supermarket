<template>
  <div id="app">
    <div class="content">
      <div v-show="emails" class="emaillogins">
        <van-cell-group>
          <van-field v-model="a" clearable label="QQ邮箱" placeholder="请输入QQ邮箱" />
          <van-field v-model="b" clearable type="password" label="验证码" placeholder="请输入验证码" />
        </van-cell-group>
        <van-button
          type="primary"
          size="large"
          @click="huoqu"
          class="yan"
          color="linear-gradient(to right, #ff8484, #ff84c1,#ff84ff,#c184ff,#8484ff)"
        >获取验证码</van-button>
        <van-button
          color="linear-gradient(to right, #ffbcbc, #ffbcdd,#ffbcff,#ddbcff,#bcbcff)"
          type="primary"
          size="large"
          @click="login"
          class="yan"
        >登录</van-button>
      </div>
      <div class="emaillogins" v-show="yong">
        <van-cell-group>
          <van-field v-model="username" clearable label="用户名" placeholder="请输入用户名" />
          <van-field v-model="password" clearable type="password" label="密码" placeholder="请输入密码" />
        </van-cell-group>
        <van-button
          type="primary"
          size="large"
          class="yan"
          color="linear-gradient(to right, #89ffff,#89ff89,#c4ff89,#ffff89,#ffc489)"
          @click="userlogin"
        >登录</van-button>
        <van-button
          color="linear-gradient(to right, #ff9ece,	#ce9eff,#9eceff,#9effce,#ccff99)"
          type="primary"
          size="large"
          class="yan"
          @click="gotoregistry"
        >注册</van-button>
      </div>
      <div class="qiehuan">
        <span @click="yonghulogin">
          <img src="../../../public/123.jpeg" alt />
        </span>
        <span @click="emaillogin">
          <img
            src="
          https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578300870021&di=d7ca68d0e4133ae0c858baef6fdd971b&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F2b5e164119c569784d61f58ed9a8a76ac22168534a7f-h8JSiI_fw658"
            alt
          />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
const delay = (function() {
  let timer = 0;
  return function(callback, ms) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
})();
import axios from "axios";
import { qqemaillogin, login } from "@/api/api.js";
import { setSession } from "../../utils/session";
export default {
  data() {
    return {
      a: null,
      b: null,
      username: null,
      password: null,
      emails: false,
      yong: true
    };
  },
  methods: {
    //用户名登录
    userlogin() {
      delay(() => {
        //执行部分
        if (
          this.username === null ||
          this.username === "" ||
          this.password === null ||
          this.password === ""
        ) {
          this.$notify({
            type: "danger",
            message: "用户名或密码不可以为空!"
          });
        } else {
          login({ username: this.username, password: this.password }).then(
            res => {
              if (res.data.code === 1) {
                this.$notify({
                  type: "danger",
                  message: `${res.data.message}`
                });
                this.username = "";
                this.password = "";
              } else {
                setSession("token", this.username);
                this.$router.push("/my");
              }
            }
          );
        }
      }, 900);
    },
    //去注册页面
    gotoregistry() {
      this.$router.push("/registry");
    },
    //获取验证码
    huoqu() {
      delay(() => {
        if (this.a === null || this.a === "") {
          this.$notify({
            type: "danger",
            message: "请输入邮箱，不可以为空！"
          });
        } else {
          if (this.a !== "") {
            var reg = /^\d{5,12}@[qQ][qQ]\.(com|cn)$/;
            if (!reg.test(this.a)) {
              this.$notify({
                type: "danger",
                message: "邮箱格式不正确，请输入正确的邮箱"
              });
            } else {
              qqemaillogin({ emails: this.a }).then(res => {
                if (res) {
                  console.log("");
                }
                this.$notify({
                  type: "danger",
                  message: "发送验证码成功！"
                });
              });
            }
          }
        }
      }, 900);
    },
    //邮箱登录
    login() {
      if (
        this.a === null ||
        this.a === "" ||
        this.b === null ||
        this.b === ""
      ) {
        this.$notify({
          type: "danger",
          message: "验证码不可以为空！"
        });
      } else {
        axios.post("/api/api/meilLogin", { yan: this.b }).then(res => {
          if (res.data.code == 0) {
            setSession("token", this.a);
            this.$router.push("/my");
          } else {
            this.$notify({
              type: "danger",
              message: "登陆失败",
              background: "red"
            });
          }
        });
      }
    },
    yonghulogin() {
      this.yong = true;
      this.emails = false;
    },
    emaillogin() {
      this.yong = false;
      this.emails = true;
    }
  }
};
</script>

<style lang='scss' scoped>
#app {
  width: 100%;
  height: 100%;
  display: flex;
  .content {
    flex: 1;
    background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577713028628&di=3aa3982f18211a1e67704fc9fb62cdc2&imgtype=0&src=http%3A%2F%2Fpics1.baidu.com%2Ffeed%2Fb812c8fcc3cec3fd38ead98b33e4033a859427ee.jpeg%3Ftoken%3D0ba34543662ea92a8be67f527acf9958%26s%3DE8C22CC45AF384DC52C8E013030010C7");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    .emaillogins {
      margin: 50px auto;
      padding: 10px;
      .yan {
        margin: 20px auto;
      }
    }
    .qiehuan {
      width: 300px;
      height: 100px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      span:nth-child(1) {
        display: inline-block;
        height: 100px;
        width: 100px;
        border-radius: 50%;
        background: rgb(15, 211, 24);
        text-align: center;
        line-height: 100px;
        color: #fff;
        font-size: 18px;
        img {
          border-radius: 50%;
          width: 100%;
          height: 100%;
        }
      }
      span:nth-child(2) {
        color: #fff;
        font-size: 18px;
        line-height: 100px;
        text-align: center;
        display: inline-block;
        height: 100px;
        width: 100px;
        border-radius: 50%;
        background: rgb(15, 211, 24);
        img {
          border-radius: 50%;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
