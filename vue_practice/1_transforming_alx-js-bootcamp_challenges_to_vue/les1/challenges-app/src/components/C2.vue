<template>
    <div>
        <button v-on:click="showDate">Click Me</button>
        <h1>{{date}}</h1>
    </div>
</template>

<script>
export default {
  data() {
    return {
      day: 14,
      month: "september",
      year: 1990,
      date: "",
    };
  },
  methods: {
    showDate() {
      //   alert(`Dzisiaj mamy ${this.day} ${this.month} ${this.year}r.`);
      return (this.date = `Dzisiaj mamy ${this.day} ${this.month} ${
        this.year
      }r.`);
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

button {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
}
</style>
