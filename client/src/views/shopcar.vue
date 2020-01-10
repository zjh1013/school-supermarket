<template>
  <div id="app">
    <Header title="购物车"></Header>
    <div class="content" v-if="shopdata.length">
      <van-skeleton :row="4" :loading="loading" avatar title title-height="80%" :animate="true">
        <div title title-width="40%" class="shop" v-for="(item, index) in shopdata" :key="index">
          <div class="zuo">
            <input
              type="checkbox"
              @click="selectSingle(index)"
              :checked="allSelectedGoods.indexOf(item.id) >= 0"
            />
          </div>
          <div class="you">
            <img :src="item.img" alt />

            <div class="aa">
              <p>{{ item.title }}</p>
              <b>￥{{ item.money }}</b>
              <div>
                <span @click="jian(item.id, item.count)">减</span>
                <span>{{ item.count }}</span>
                <span @click="jia(item.id)">加</span>
              </div>
            </div>
          </div>
        </div>
      </van-skeleton>
    </div>
    <div v-else class="content">
      <div class="imgss">
        <img
          src=" https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577631236242&di=dbf20140528ec64f1beee15f822c9b74&imgtype=0&src=http%3A%2F%2Fimg.tukexw.com%2Fimg%2F707c7a34360ed484.jpg"
          alt
        />
      </div>
    </div>
    <div class="jiesuan" v-if="shopdata.length">
      <div class="zuo">
        <input
          type="checkbox"
          @click="selectAll"
          :checked="
            shopdata.length === allSelectedGoods.length && shopdata.length
          "
        />
        <b>全选</b>
      </div>
      <div class="zhong">
        <span>合计：</span>
        <b>￥{{ totalPrice }}</b>
      </div>
      <div class="you">
        <span>去结算</span>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Dialog } from "vant";
import { getshopcar, jiashopcar, jianshopcar, delshopcar } from "@/api/api";
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      shopdata: [],
      allChecked: true,
      allSelectedGoods: [],
      loading: true
    };
  },

  methods: {
    selectAll() {
      if (!event.currentTarget.checked) {
        this.allSelectedGoods = [];
      } else {
        this.allSelectedGoods = []; //先置空，然后再重新添加，不然数组里会有重复！因为有可能点击全选之前已经选择了几个单选按钮。也就是数组里已经添加过了对应的id。
        this.shopdata.forEach(v => {
          this.allSelectedGoods.push(v.id);
        });
      }
    },
    selectSingle(k) {
      if (event.currentTarget.checked) {
        this.allSelectedGoods.push(this.shopdata[k].id);
      } else {
        for (var i = 0; i < this.allSelectedGoods.length; i++) {
          if (this.shopdata[k].id === this.allSelectedGoods[i]) {
            this.allSelectedGoods.splice(i, 1);
            this.allChecked = false;
            break;
          }
        }
      }
    },
    jia(id) {
      jiashopcar({ id }).then(res => {
        if (res.data.result.changedRows == 1) {
          getshopcar().then(res => {
            this.shopdata = res.data.result;
          });
        }
      });
    },
    jian(id, count) {
      jianshopcar({ id }).then(res => {
        if (res.data.result.changedRows == 1) {
          if (count === 1) {
            Dialog.confirm({
              title: "提示框",
              message: "确定删除此商品吗？"
            }).then(() => {
              delshopcar({ id }).then(res => {
                if (res.data.result.affectedRows == 1) {
                  getshopcar().then(res => {
                    this.shopdata = res.data.result;
                  });
                }
              });
            });
          } else {
            getshopcar().then(res => {
              this.shopdata = res.data.result;
            });
          }
        }
      });
    }
  },
  created() {
    getshopcar().then(res => {
      this.shopdata = res.data.result;
    });
  },
  computed: {
    totalPrice() {
      var totalprice = 0;
      this.shopdata.forEach(v => {
        if (this.allSelectedGoods.indexOf(v.id) !== -1) {
          totalprice += v.money * v.count;
        }
      });
      return totalprice.toFixed(2);
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
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

    .imgss {
      margin: auto;
      width: 255px;
      height: 255px;
    }
    .shop {
      width: 100%;
      height: 120px;
      display: flex;
      border-bottom: 1px solid #ccc;
      .zuo {
        flex: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
          display: inline-block;
          width: 30px;
          height: 30px;
          border: 2px solid #ccc;
          border-radius: 50%;
        }
      }
      .you {
        flex: 8;
        display: flex;
        img {
          width: 100px;
          height: 100px;
          margin: 10px;
        }
        .aa {
          margin-left: 25px;
          b {
            color: red;
            font-size: 18px;
          }
          div {
            margin-top: 8px;
            span:nth-child(1) {
              display: inline-block;
              width: 30px;
              height: 30px;
              background: rgb(235, 235, 235);
              border-radius: 5px;
              text-align: center;
            }
            span:nth-child(2) {
              display: inline-block;
              width: 50px;
              height: 30px;
              border-radius: 5px;
              text-align: center;
            }
            span:nth-child(3) {
              text-align: center;
              display: inline-block;
              width: 30px;
              height: 30px;
              background: rgb(235, 235, 235);

              border-radius: 5px;
            }
          }
        }
      }
    }
  }
  .jiesuan {
    width: 100%;
    height: 50px;
    display: flex;
    border-top: 1px solid #ccc;
    .zuo {
      flex: 3.3;
      display: flex;
      justify-content: center;
      align-items: center;
      .s1 {
        background: orangered;
      }
      span {
        display: inline-block;
        width: 30px;
        height: 30px;
        border: 2px solid #ccc;
        border-radius: 50%;
      }
    }
    .zhong {
      flex: 3.3;
      display: flex;
      justify-content: center;
      align-items: center;
      b {
        color: orangered;
        font-size: 15px;
      }
    }
    .you {
      background: orangered;
      flex: 3.3;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        font-size: 18px;
        color: #fff;
      }
    }
  }
}
.ax {
  background: orangered;
}
</style>
