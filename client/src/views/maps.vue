<template>
  <div id="app">
    <Header title="校园超市"></Header>
    <div class="content">
      <div class="tou">
        <span>{{ address }}</span>
        <input type="text" placeholder="搜索地址" v-model="sea" @change="sou" />
      </div>
      <div class="ding">
        <p @click="weizhi()">◎定位当前位置</p>
      </div>

      <baidu-map class="map" center="北京" :zoom="zoom" @ready="handler" v-show="flag">
        <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
        <bm-geolocation
          anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
          :showAddressBar="true"
          :autoLocation="true"
        ></bm-geolocation>
        <bm-view class="map"></bm-view>
        <bm-control :offset="{ width: '10px', height: '10px' }">
          <bm-auto-complete v-model="keyword" :sugStyle="{ zIndex: 1 }">
            <input type="text" placeholder="请输入关键地名" />
          </bm-auto-complete>
        </bm-control>
        <bm-local-search :keyword="keyword" :auto-viewport="true"></bm-local-search>
        <bm-marker
          @dragend="jieshu"
          :position="center"
          :dragging="true"
          animation="BMAP_ANIMATION_BOUNCE"
          :icon="{
            url: 'http://developer.baidu.com/map/jsdemo/img/fox.gif',
            size: { width: 200, height: 157 }
          }"
        ></bm-marker>
      </baidu-map>
      <div class="address" v-for="(item, index) in addresslist" :key="index">
        <div class="a1">
          <span :class="ind === index ? 'ac' : ''" @click="btn(index, item)"></span>
        </div>
        <div class="a2">
          <p>{{ item.name }}</p>
          <p>{{ item.phone }}</p>
          <p>
            <span>{{ item.street }}</span>
            <span>{{ item.detailed }}</span>
          </p>
        </div>
        <div class="a3">
          <span @click="gotoedit(item)">✎</span>
        </div>
      </div>
    </div>
    <div class="zeng" @click="gotoaddress()">+新增收货地址</div>
  </div>
</template>
<script>
import axios from "axios";
import Header from "@/components/header";
import { getaddress, seaaddress } from "@/api/api";
export default {
  components: {
    Header
  },
  data() {
    return {
      keyword: "",
      center: { lng: 116.404097, lat: 39.914911 },
      zoom: 10,
      flag: false,
      address: "北京市",
      addresslist: [],
      success: 0,
      sea: "",
      ind: 0
    };
  },
  methods: {
    gotoedit(item) {
      this.$router.push({
        name: "editaddress",
        params: {
          item
        }
      });
    },
    sou() {
      seaaddress({
        sea: this.sea
      }).then(res => {
        if (res.data.code == 0) {
          this.addresslist = res.data.result;
        }
      });
    },
    gotoaddress() {
      this.$router.push({
        name: `address`,
        params: {
          address: this.address
        }
      });
    },
    btn(index, item) {
      this.$router.push({
        name: "home",
        params: {
          detailed: item.detailed
        }
      });
      this.ind = index;
    },
    jieshu(type) {
      axios
        .get(
          `/baidu/reverse_geocoding/v3/?ak=p9s648T0msKfn6bW47uzLCRnvQZ5i1ev&output=json&coordtype=wgs84ll&location=${type.point.lat},${type.point.lng}`
        )
        .then(res => {
          this.address = res.data.result.addressComponent.city;
        });
    },
    handler({ BMap, map }) {
      console.log(BMap, map);
      this.center.lng = 116.404;
      this.center.lat = 39.915;
      this.zoom = 15;
    },
    weizhi() {
      this.flag = !this.flag;
    }
  },
  created() {
    if (this.success == 0) {
      getaddress().then(res => {
        this.addresslist = res.data.result;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.address {
  width: 100%;
  height: 80px;
  // background: #ccc;
  margin-top: 5px;
  display: flex;
  border-bottom: 1px solid #ccc;
  .a1 {
    flex: 1.5;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      display: inline-block;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      border: 2px solid #ccc;
    }
  }
  .a2 {
    flex: 6;
    p {
      line-height: 25px;
    }
  }
  .a3 {
    flex: 1.5;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-size: 20px;
    }
  }
}
.zeng {
  width: 100%;
  height: 44px;
  background: rgb(241, 241, 241);
  text-align: center;
  line-height: 44px;
  color: rgb(226, 98, 98);
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
  }
}
* {
  margin: 0;
  padding: 0;
}
.ding {
  width: 100%;
  height: 40px;

  p {
    text-align: center;
    line-height: 40px;
    color: #666;
    font-size: 14px;
    border-bottom: 1px solid #ccc;
  }
}
.tou {
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    flex: 3;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input {
    flex: 7;
    height: 60%;
    border-radius: 20px;
    border: 0;
    background: rgb(243, 243, 243);
  }
}
.map {
  width: 100%;
  height: 400px;
}
.ac {
  background: rgb(250, 104, 36);
}
</style>
