<template>
  <div id="app">
    <h1>ASD</h1>
    <Navbar/>
    <Blogs/>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import Blogs from "./Blogs";

export default {
  name: "app",
  components: {
    Navbar,
    Blogs,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
h1 {
  font-weight: normal;
  color: #444;
  text-align: center;
}
</style>
