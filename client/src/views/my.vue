<template>
  <div id="app">
    <Header title="校园超市"></Header>
    <div class="content">
      <div class="one">
        <div class="zuo">
          <div>
            <h2>三玖</h2>
            <p>开始美好的一天</p>
          </div>
        </div>
        <div class="you">
          <div class="imgs">
            <img
              src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3332175176,3567490807&fm=26&gp=0.jpg"
              alt
            />
          </div>
        </div>
      </div>
      <div class="two">
        <div class="shang"></div>
        <div class="xia">
          <div class="xia-item">
            <span class="el-icon-collection"></span>
            <span>代付款</span>
          </div>
          <div class="xia-item">
            <span class="el-icon-receiving"></span>
            <span>代配送</span>
          </div>
          <div class="xia-item">
            <span class="el-icon-truck"></span>
            <span>已发货</span>
          </div>
          <div class="xia-item">
            <span class="el-icon-document"></span>
            <span>退款/售后</span>
          </div>
        </div>
      </div>
      <div class="three"></div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/header";
import Footer from "@/components/footer";
export default {
  components: {
    Header,
    Footer
  }
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
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
    background: rgb(241, 241, 241);
    .one {
      width: 100%;
      height: 130px;
      background: orangered;
      display: flex;
      .zuo {
        flex: 7;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
      }
      .you {
        flex: 3;
        display: flex;
        justify-content: center;
        align-items: center;
        .imgs {
          width: 50px;
          height: 50px;
          background: orange;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .two {
      width: 84%;
      height: 140px;
      background: #fff;
      margin: -25px auto;
      border-radius: 10px;
      box-shadow: 5px 4px 10px #999;
      .shang {
        width: 100%;
        height: 50px;
      }
      .xia {
        width: 100%;
        height: 90px;
        display: flex;
        flex-wrap: wrap;
        .xia-item {
          width: 25%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          span:nth-child(1) {
            margin-bottom: 5px;
            font-size: 28px;
            color: orangered;
          }
          span:nth-child(2) {
            font-size: 13px;
          }
        }
      }
    }
    .three {
      box-shadow: 5px 4px 10px #999;
      width: 84%;
      height: 160px;
      background: #fff;
      margin: 40px auto;
      border-radius: 10px;
    }
  }
}
</style>
