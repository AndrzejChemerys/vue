<template>
  <div id="app">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      title: "My not first Vue.js App",
    };
  },
};
</script>

<style lang="scss">
h1 {
  font-weight: normal;
  color: #444;
  text-align: center;
}
</style>
