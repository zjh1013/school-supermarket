<template>
  <!-- <skeletonPugin> -->
  <div class="icon">
    <div class="icon-item" v-for="(item, index) in icondata" :key="index">
      <span>
        <img :src="item.iconUrl" alt />
      </span>
      <a>{{ item.iconTxt }}</a>
    </div>
  </div>
  <!-- </skeletonPugin> -->
</template>

<script>
import { getnavlist } from "../api/api";
// import skeletonPugin from "../gujia/gujia";
export default {
  components: {
    // skeletonPugin
  },
  data() {
    return {
      icondata: []
    };
  },
  created() {
    getnavlist().then(res => {
      this.icondata = res.data.result;
    });
  }
};
</script>

<style lang="scss">
.icon {
  width: 100%;
  height: 180px;
  display: flex;
  flex-wrap: wrap;
  .icon-item {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    span {
      display: inline-block;
      width: 70px;
      height: 50px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    a {
      margin-top: 5px;
      font-size: 14px;
      color: rgb(128, 128, 128);
    }
  }
}
</style>
