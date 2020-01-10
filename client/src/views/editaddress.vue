<template>
  <div id="app">
    <Header title="校园超市"></Header>
    <div class="content">
      <p>
        联系人
        <input
          type="text"
          value="{names}"
          placeholder="请输入联系人"
          v-model="names"
        />
      </p>
      <p>
        手机号
        <input
          type="text"
          value="{phones}"
          placeholder="请输入手机号"
          v-model="phones"
        />
      </p>
      <p>
        地址
        <input
          type="text"
          value="{streets}"
          placeholder="请输入小区，街道，大厦"
          v-model="streets"
        />
      </p>
      <p>
        详细地址
        <input
          type="text"
          value="{detaileds}"
          placeholder="请输详细地址"
          v-model="detaileds"
        />
      </p>
      <button @click="edit">编辑成功</button>
      <button @click="del">删除</button>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header";
import { editaddress, deladdress } from "@/api/api";
export default {
  components: {
    Header
  },
  data() {
    return {
      names: "",
      phones: "",
      streets: "",
      detaileds: "",
      ids: ""
    };
  },
  created() {
    this.names = this.$route.params.item.name;
    this.phones = this.$route.params.item.phone;
    this.streets = this.$route.params.item.street;
    this.detaileds = this.$route.params.item.detailed;
    this.ids = this.$route.params.item.id;
  },
  methods: {
    del() {
      deladdress({
        id: this.ids
      }).then(res => {
        if (res.data.code == 0) {
          this.$notify({
            type: "primary",
            message: "恭喜你,删除成功",
            duration: 1000
          });
          this.$router.push("/maps");
        }
      });
    },
    edit() {
      if (this.names === "") {
        this.$notify({
          type: "primary",
          message: "恭喜你,删除成功",
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
              editaddress({
                name: this.names,
                phone: this.phones,
                street: this.streets,
                detailed: this.detaileds,
                id: this.ids
              }).then(res => {
                if (res.data.code == 1) {
                  this.$notify({
                    type: "primary",
                    message: `${res.data.message}`,
                    duration: 1000
                  });
                } else {
                  this.$notify({
                    type: "primary",
                    message: "恭喜你,编辑成功",
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
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .content {
    width: 100%;
    flex: 1;
    overflow: auto;
  }
}
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
