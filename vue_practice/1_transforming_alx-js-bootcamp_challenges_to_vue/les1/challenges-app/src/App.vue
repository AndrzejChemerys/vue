<template>
  <div id="app">
    <C1/>
    <C2/>
    <C3/>
    <C4/>
    <C5/>
    <C6/>
  </div>
</template>

<script>
import C1 from "./components/C1.vue";
import C2 from "./components/C2.vue";
import C3 from "./components/C3.vue";
import C4 from "./components/C4.vue";
import C5 from "./components/C5.vue";
import C6 from "./components/C6.vue";

export default {
  name: "App",
  components: {
    C1,
    C2,
    C3,
    C4,
    C5,
    C6,
  },
};
</script>

<style>
</style>
