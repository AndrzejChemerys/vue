<template>
    <div>
        <button @click="calcNum">Calculate</button>
        <p>{{result}}</p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      a: 240,
      b: 134,
      c: 49,
      numMax: "",
      numMin: "",
      numMid: "",
      result: "",
    };
  },
  methods: {
    calcNum() {
      if (this.a > this.b && this.a > this.c) {
        this.numMax = this.a;
      }

      if (this.b > this.a && this.b > this.c) {
        this.numMax = this.b;
      }

      if (this.c > this.a && this.c > this.b) {
        this.numMax = this.c;
      }

      if (this.a < this.b && this.a < this.c) {
        this.numMin = this.a;
      }

      if (this.b < this.a && this.b < this.c) {
        this.numMin = this.b;
      }

      if (this.c < this.a && this.c < this.b) {
        this.numMin = this.c;
      }

      if (
        (this.a == this.numMax || this.b == this.numMax) &&
        (this.a == this.numMin || this.b == this.numMin)
      ) {
        this.numMid = this.c;
      } else if (
        (this.a == this.numMax || this.c == this.numMax) &&
        (this.a == this.numMin || this.c == this.numMin)
      ) {
        this.numMid = this.b;
      } else if (
        (this.c == this.numMax || this.b == this.numMax) &&
        (this.c == this.numMin || this.b == this.numMin)
      ) {
        this.numMid = this.a;
      }

      this.result = this.numMax + " " + this.numMid + " " + this.numMin;
      console.log(this.result);
    },
  },
};
</script>

<style>
</style>
