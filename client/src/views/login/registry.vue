<template>
  <div id="app">
    <div class="content">
      <div class="registry">
        <van-cell-group>
          <van-field v-model="username" clearable label="用户名" placeholder="请输入用户名" />
          <van-field v-model="password" clearable type="password" label="密码" placeholder="请输入密码" />
        </van-cell-group>
        <van-button
          type="primary"
          size="large"
          class="yan"
          @click="registry"
          color="linear-gradient(to right, #d6ffea,#effff7,#ddffbc,#bcffdd,#bcffbc)"
        >注册</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { registry } from "@/api/api";
export default {
  data() {
    return {
      username: null,
      password: null
    };
  },
  methods: {
    registry() {
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
        registry({ username: this.username, password: this.password }).then(
          res => {
            if (res.data.code == 0) {
              this.$notify({
                type: "danger",
                message: `${res.data.message}`
              });
              setTimeout(() => {
                this.$router.push("/login");
              }, 700);
            } else {
              this.$notify({
                type: "danger",
                message: `${res.data.message}`
              });
            }
          }
        );
      }
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
    background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578303589922&di=3350009b6ae3893eeb1b71c424c43873&imgtype=0&src=http%3A%2F%2Fnews.youth.cn%2Fyl%2F201801%2FW020180125609867821873.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    .registry {
      padding: 10px;
      margin: 50px auto;
      .yan {
        margin: 20px auto;
        color: #000;
      }
    }
  }
}
</style>
