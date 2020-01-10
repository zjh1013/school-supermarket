<template>
  <div id="app">
    <Header title="校园超市"></Header>

    <div class="content">
      <div class="sou">
        <input
          class="ipt1"
          type="text"
          placeholder="北京八维研修学院   >"
          value="{address}    >"
          @click="btnaddress()"
          v-model="address"
        />
      </div>
      <div>
        <Banner></Banner>
        <Icon></Icon>
        <Zhanshi></Zhanshi>
      </div>
      <div class="fenlei">
        <span
          :class="ind === index ? 'ac' : ''"
          v-for="(item, index) in tabdata"
          :key="index"
          @click="clickType(item.type, index)"
        >{{ item.names }}</span>
      </div>
      <List :data="listdata"></List>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/header";
import Banner from "@/components/banner";
import Icon from "@/components/icon";
import Zhanshi from "@/components/zhanshi";
import List from "@/components/list";
import Footer from "@/components/footer";
import { gettablist, tabtype } from "@/api/api";
export default {
  components: {
    Header,
    Banner,
    Icon,
    Zhanshi,
    List,
    Footer
  },
  methods: {
    clickType(type, index) {
      this.ind = index;
      tabtype({ type }).then(res => {
        this.listdata = res.data.result;
      });
    },
    btnaddress() {
      this.$router.push("/maps");
    }
  },
  data() {
    return {
      tabdata: [],
      ind: 0,
      inds: 2,
      listdata: [],
      address: "",
      show: false
    };
  },
  created() {
    this.address = this.$route.params.detailed;
    tabtype({ type: this.inds }).then(res => {
      this.listdata = res.data.result;
    });
    gettablist().then(res => {
      this.tabdata = res.data.result;
    });
  }
};
</script>
<style lang="scss" scoped>
.sou {
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  input {
    width: 100%;
    height: 100%;
    outline: 0;
    border: 0;
  }
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .content {
    width: 100%;
    flex: 1;
    overflow: auto;
    overflow-x: hidden;
  }
}
.fenlei {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    margin-left: 18px;
  }
}
.ac {
  color: red;
  font-size: 18px;
}
.ipt1 {
  color: rgb(104, 104, 104);
}
</style>
