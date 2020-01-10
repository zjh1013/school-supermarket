<template>
  <div class="footer">
    <router-link
      tag="span"
      v-for="(item, index) in list"
      :key="index"
      :to="item.path"
    >
      <i :class="`${item.icon}`"></i>
      <p>{{ item.name }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          path: "/home",
          name: "首页",
          icon: "el-icon-house"
        },
        {
          path: "/classify",
          name: "分类",
          icon: "el-icon-s-unfold"
        },
        {
          path: "/shopcar",
          name: "购物车",
          icon: "el-icon-shopping-cart-full"
        },
        {
          path: "/my",
          name: "我的",
          icon: "el-icon-user"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;

  padding: 0;
}
.footer {
  width: 100%;
  height: 44px;
  display: flex;
  border-top: 1px solid rgb(233, 232, 232);
  flex-wrap: wrap;
  span {
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    i {
      margin-bottom: 2px;
      font-size: 15px;
    }
    p {
      font-size: 13px;
    }
  }
}
.router-link-active {
  color: rgb(216, 47, 18);
}
</style>
