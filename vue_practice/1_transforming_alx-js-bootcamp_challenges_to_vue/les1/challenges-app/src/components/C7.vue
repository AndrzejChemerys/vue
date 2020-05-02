<template>
    <div>
        <div>
            <label>Podaj wagę w kg:</label>
            <input type="text" v-model="waga">
            <span>{{waga}}</span>
        </div>
        <div>
            <label>Podaj wzrost w metrach:</label>
            <input type="text" v-model="wzrost">
            <span>{{wzrost}}</span>
        </div>
        <div>
            <button class="button-primary" @click="[calcBMI(), calcReduction()]">Oblicz</button>
            <h1>{{wynnik}}</h1>
            <h2 v-if= "wynnik === 'Nadwaga'">Do prawidłowej wagi musisz zrzucić: {{wagaDoZrzucenia}}kg</h2>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      waga: "",
      wzrost: "",
      bmi: "",
      wynnik: "",
      waga2: "",
      wagaDoZrzucenia: "",
    };
  },
  methods: {
    calcBMI: function() {
      this.bmi = this.waga / this.wzrost ** 2;
      if (this.bmi <= 24.9 && this.bmi >= 18.5) {
        console.log(this.bmi);
        console.log("Waga prawidłowa");
        this.wynnik = "Waga prawidłowa";
      } else if (this.bmi < 18.5) {
        console.log(this.bmi);
        console.log("Niedowaga");
        this.wynnik = "Niedowaga";
      } else if (this.bmi > 24.9) {
        console.log("Nadwaga");
        this.wynnik = "Nadwaga";
      }
      //   alert(this.wynnik);
      return this.wynnik;
    },

    calcReduction() {
      this.waga2 = 24.9 * this.wzrost ** 2;
      this.wagaDoZrzucenia = this.waga2 - this.waga;
      this.wagaDoZrzucenia = Math.abs(this.wagaDoZrzucenia.toFixed(2));
      return this.wagaDoZrzucenia;
    },
  },
};
</script>

<style>
</style>
