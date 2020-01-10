<template>
  <div>
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
            <span class="el-icon-shopping-cart-2"></span>
          </div>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  methods: {}
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
</style>
