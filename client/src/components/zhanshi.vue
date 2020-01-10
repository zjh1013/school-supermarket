<template>
  <div>
    <img
      class="imgs"
      src="https://img.dmallcdn.com/mIndex/201905/f0d9486a-25e8-4699-b66b-f5d7625083af_750H"
      alt=""
    />
    <div class="san">
      <div>
        <img
          src="https://img.dmallcdn.com/mIndex/201905/a298f1a2-64bb-4280-aded-56170ae4d9e5_360x360H"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://img.dmallcdn.com/mIndex/201905/16026d16-6314-4665-92b4-698726ff9c90_360x360H"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://img.dmallcdn.com/mIndex/201905/9a135d13-aadf-400b-99d9-bc8be5df5bc7_360x360H"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.imgs {
  width: 100%;
  height: 50px;
}
.san {
  width: 100%;
  height: 150px;
  display: flex;
  div:nth-child(1) {
    flex: 3.3;
    img {
      width: 100%;
      height: 100%;
    }
  }
  div:nth-child(2) {
    flex: 3.3;
    img {
      width: 100%;
      height: 100%;
    }
  }
  div:nth-child(3) {
    flex: 3.3;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
