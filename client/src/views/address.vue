<template>
  <div>
    <Header title="校园超市"></Header>
    <p>
      联系人
      <input type="text" placeholder="请输入联系人" v-model="names" />
    </p>
    <p>
      手机号
      <input type="text" placeholder="请输入手机号" v-model="phones" />
    </p>
    <p>
      地址
      <input type="text" value="{streets}" placeholder="请输入小区，街道，大厦" v-model="streets" />
    </p>
    <p>
      详细地址
      <input type="text" placeholder="请输详细地址" v-model="detaileds" />
    </p>
    <button @click="btnok">完成</button>
  </div>
</template>
<script>
import Header from "@/components/header";
import { addaddress } from "@/api/api";
export default {
  components: {
    Header
  },
  data() {
    return {
      names: "",
      phones: "",
      streets: "",
      detaileds: ""
    };
  },
  created() {
    this.streets = this.$route.params.address;
  },
  methods: {
    btnok() {
      if (this.names === "") {
        this.$notify({
          type: "primary",
          message: "用户名不可以为空哦!",
          duration: 1000
        });
      } else {
        if (this.phones === "") {
          this.$notify({
            type: "primary",
            message: "手机号不可以为空哦!",
            duration: 1000
          });
        } else {
          if (this.phones !== "") {
            var reg = /^1[3456789]\d{9}$/;
            if (!reg.test(this.phones)) {
              this.$notify({
                type: "primary",
                message: "请输入有效的手机号码!",
                duration: 1000
              });
            } else {
              addaddress({
                name: this.names,
                phone: this.phones,
                street: this.streets,
                detailed: this.detaileds
              }).then(res => {
                if (res.data.code == 1) {
                  this.$notify({
                    type: "primary",
                    message: "联系人重复",
                    duration: 1000
                  });
                } else {
                  this.$notify({
                    type: "primary",
                    message: "恭喜你,添加成功",
                    duration: 1000
                  });
                  this.$router.push("/maps");
                }
              });
            }
          }
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
p {
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
  color: rgb(71, 71, 71);
}
input {
  height: 90%;
  border: 0;
  margin-left: 20px;
}
button {
  width: 100%;
  height: 40px;
  background: orangered;
  margin-top: 30px;
  border: 0;
  color: #fff;
}
</style>
