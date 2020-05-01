<template>
    <div>
        <p v-if="a>b&&a>c">Liczba A jest większa od B i C, i jej wartość to {{a}}</p>
        <p v-if="b>a&&b>c">Liczba B jest większa od A i C, i jej wartość to {{b}}</p>
        <p v-if="c>a&&c>b">Liczba C jest większa od A i B, i jej wartość to {{c}}</p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      a: 25,
      b: 123,
      c: 54,
    };
  },
};
</script>

<style scoped>
/* ########################### */
div {
  display: none;
}
/* ########################### */
</style>
