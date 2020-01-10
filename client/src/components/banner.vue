<template>
  <div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(item, index) in imgdata" :key="index">
        <img :src="item.imgUrl" alt />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { getbannerlist } from "../api/api";
export default {
  data() {
    return {
      imgdata: [],
      swiperOption: {
        autoplay: 1000,
        speed: 400,
        loop: true
      }
    };
  },
  created() {
    getbannerlist({ type: 1 }).then(res => {
      this.imgdata = res.data.result;
    });
  }
};
</script>
<style>
.swiper {
  width: 100%;
  height: 150px;
}

.swiper img {
  width: 100%;
  height: 100%;
}
</style>
