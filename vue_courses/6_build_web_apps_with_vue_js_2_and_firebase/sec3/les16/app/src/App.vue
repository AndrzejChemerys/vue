<template>
  <div id="app">
    <h1>{{title}}</h1>
    <Navbar/>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
        </ul>
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
