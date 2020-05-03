<template>
  <div id="app">
    <!-- bag image -->
    <div class="bag" v-bind:class="{burst: ended}"></div>
    <!-- bag health -->
    <div class="bag-health">
      <div class="bag-health__item" v-bind:style="{ width: health + '%' }"></div>
    </div>
    <!-- game controls -->
    <div class="controls">
      <button @click="punch" v-show="!ended">Punch</button>
      <button @click="restart">Restart</button>
    </div>

  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      health: 100,
      ended: false,
    };
  },
  methods: {
    punch: function() {
      this.health -= 10;
      if (this.health <= 0) {
        this.ended = true;
      }
      console.log(this.health);
    },
    restart: function() {
      this.health = 100;
      this.ended = false;
      console.log(this.health);
    },
  },
  computed: {},
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

body {
  background-color: rgb(50, 50, 50);
}

.bag {
  width: 200px;
  height: 500px;
  margin: 0 auto;
  background: url(./assets/img/bag.png) center no-repeat;
  background-size: 80%;
}

.bag-health {
  width: 200px;
  border: 2px solid #000;
  margin: 0 auto 20px auto;
}

.bag-health div {
  height: 20px;
  background: crimson;
}

.controls {
  width: 120px;
  margin: 0 auto;
}

.burst {
  background: url(./assets/img/bag-burst.png) center no-repeat;
  background-size: 80%;
}
</style>
