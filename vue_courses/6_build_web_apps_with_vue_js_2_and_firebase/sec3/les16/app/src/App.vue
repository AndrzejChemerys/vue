<template>
  <div id="app">
    <h1>{{title}}</h1>
    <Navbar/>
  </div>
</template>

<script>
import Navbar from "./Navbar";

export default {
  name: "app",
  components: {
    Navbar,
  },
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
