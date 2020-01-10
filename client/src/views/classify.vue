<template>
  <div id="app">
    <Header title="商品分类"></Header>
    <div class="sousuo">
      <i class="el-icon-search"></i>
      <input type="text" placeholder="  搜索校园超市商品" />
    </div>
    <div class="content">
      <div class="left">
        <li
          @click="tabac(index, item.id)"
          :class="ind === index ? 'ac' : ''"
          v-for="(item, index) in leftlist"
          :key="index"
        >{{ item.name }}</li>
      </div>
      <div class="right">
        <div class="quan">
          <span
            @click="topac(index, item.typeid)"
            :class="inds === index ? 'ac' : ''"
            v-for="(item, index) in toplist"
            :key="index"
          >{{ item.name }}</span>
        </div>
        <div class="two_f">
          <dl v-for="(item, index) in data" :key="index">
            <dt>
              <img :src="item.img" />
            </dt>
            <dd>
              <p class="p1">{{ item.title }}</p>

              <p class="p2">累计{{ item.leiji }}份/已拼{{ item.pin }}份</p>
              <p class="p3">￥{{ item.money }}</p>
              <div class="dwg">
                <span class="el-icon-shopping-cart-2" @click="toby(item)"></span>
              </div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/header";
import Footer from "@/components/footer";
import {
  gettableftlist,
  gettabtoplist,
  getshoprightlist,
  getshoprightlists,
  addshopcar
} from "../api/api";
export default {
  components: {
    Header,
    Footer
  },
  methods: {
    toby(item) {
      addshopcar({
        title: item.title,
        img: item.img,
        money: item.money,
        types: item.id,
        count: 1
      }).then(res => {
        console.log(res);
        this.$notify({
          type: "primary",
          message: "添加成功",
          duration: 500
        });
      });
    },
    tabac(index, id) {
      this.ind = index;
      this.inds = 0;
      gettabtoplist({ type: id }).then(res => {
        this.toplist = res.data.result;
      });
      getshoprightlists({ type: id }).then(res => {
        this.data = res.data.result;
      });
    },
    topac(index, typeid) {
      this.inds = index;
      getshoprightlist({ typeid }).then(res => {
        this.data = res.data.result;
      });
    }
  },

  data() {
    return {
      toplist: [],
      leftlist: [],
      ind: 0,
      inds: 0,
      data: [],
      a: 1,
      scroll: null
    };
  },
  created() {
    getshoprightlists({ type: this.a }).then(res => {
      this.data = res.data.result;
    });
    gettabtoplist({ type: 1 }).then(res => {
      this.toplist = res.data.result;
    });
    gettableftlist().then(res => {
      this.leftlist = res.data.result;
    });
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.two_f {
  width: 100%;
  height: 100%;
  flex: 1;
}
dl {
  width: 100%;
  height: 150px;
  display: flex;
  border-bottom: 1px solid #e2e2e2;
  dt {
    width: 28%;
    height: 100%;
    img {
      width: 80px;
      height: 80px;
      margin-top: 26px;
      margin-left: 12px;
    }
  }
  dd {
    width: 72%;
    height: 100%;
    position: relative;
    .p2 {
      width: 100%;
      text-align: center;
      margin: 0;
      padding: 0;
      margin-top: 10px;
      color: #666;
    }
    .p1 {
      width: 100%;
      text-align: center;
      margin: 0;
      padding: 0;
      margin-top: 15px;
    }
    li {
      margin-top: 15px;
      margin-left: 16%;
      font-size: 13px;
      color: rgb(103, 101, 101);
    }
    .p3 {
      font-size: 20px;
      margin-left: 15%;
      color: #fe3113;
      margin-top: 20px;
    }
    .dwg {
      width: 32px;
      height: 32px;
      background: #fd3b00;
      border-radius: 20px;
      position: absolute;
      right: 6%;
      top: 71%;
      line-height: 32px;
      color: white;
      text-align: center;
    }
  }
}
.sousuo {
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  i {
    position: absolute;
    left: 5%;
    color: #666;
  }
  input {
    background: rgb(241, 241, 241);
    width: 80%;
    height: 60%;
    border-radius: 20px;
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
    display: flex;
    .left {
      width: 100px;
      overflow: auto;
      background: rgb(243, 243, 243);
      li {
        width: 100%;
        height: 70px;
        line-height: 70px;
        text-align: center;
      }
    }
    .right {
      flex: 1;
      overflow: auto;
      .quan {
        width: 100%;
        height: 30px;
        border-bottom: 1px solid #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
          flex: 1;
          text-align: center;
        }
      }
    }
  }
}
.ac {
  color: red;
  background: #fff;
}
</style>
