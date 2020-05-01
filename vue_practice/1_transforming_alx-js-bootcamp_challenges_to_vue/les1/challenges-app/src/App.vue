<template>
  <div id="app">
    <C1/>
    <C2/>
    <C3/>
  </div>
</template>

<script>
import C1 from "./components/C1.vue";
import C2 from "./components/C2.vue";
import C3 from "./components/C3.vue";

export default {
  name: "App",
  components: {
    C1,
    C2,
    C3,
  },
};
</script>

<style>
</style>
