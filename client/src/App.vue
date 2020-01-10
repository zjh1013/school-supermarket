<template>
  <div id="app">
    <div class="content">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
* {
  text-decoration: none;
  list-style: none;
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
.router-link-active {
  color: rgb(216, 47, 18);
}
</style>
