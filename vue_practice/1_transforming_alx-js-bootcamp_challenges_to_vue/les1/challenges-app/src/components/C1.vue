<template>
  <div>
    <!-- <h1>{{a + b}}</h1>
    <h2 v-bind:class="{ active: isActive }">{{c}}</h2> -->
    <p v-on:click="calcSumm">Add {{a}} + {{b}} = {{c}}</p>
    <p v-on:click="calcInc">Add {{a}} += {{b}} = {{a}}</p>
    <p v-on:click="calcUp">Add {{a}} ** {{b}} = {{c}}</p>
    <p v-on:click="calcModulo">Add {{a}} % {{b}} = {{c}}</p>
  </div>
</template>

<script>
export default {
  name: "C1",
  data() {
    return {
      a: 3,
      b: 5,
      c: "",
      largeFont: "largeFont1",
      isActive: true,
    };
  },
  methods: {
    calcSumm() {
      console.log(this.a + this.b);
      return (this.c = this.a + this.b);
    },
    calcInc() {
      console.log(this.a++);
      return this.a++;
    },
    calcUp() {
      console.log(this.a ** this.b);
      return (this.c = this.a ** this.b);
    },
    calcModulo() {
      console.log(this.a % this.b);
      return (this.c = this.a % this.b);
    },
  },
};
</script>

<style scoped>
/* ########################### */
div {
  display: none;
}
/* ########################### */
.active {
  font-size: 64px;
  color: red;
}
p {
  font-size: 24px;
}
</style>
