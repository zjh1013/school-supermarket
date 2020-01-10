<template>
  <div class="header">{{ title }}</div>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>

<style lang="scss">
.header {
  width: 100%;
  height: 44px;
  border-bottom: 1px solid rgb(233, 232, 232);
  text-align: center;
  line-height: 44px;
  font-size: 17px;
  position: sticky;
  top: 0;
  z-index: 999;
  background: rgb(241, 241, 241);
}
</style>
