<template>
  <div id="app">
    <C1/>
    <C2/>
  </div>
</template>

<script>
import C1 from "./components/C1.vue";
import C2 from "./components/C2.vue";

export default {
  name: "App",
  components: {
    C1,
    C2,
  },
};
</script>

<style>
</style>
