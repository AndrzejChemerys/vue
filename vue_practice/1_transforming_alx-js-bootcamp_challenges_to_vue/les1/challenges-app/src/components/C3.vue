<template>
    <div>
        <p v-if="number > 0">Liczba dodatnia</p>
        <p v-else-if="number < 0">Liczba ujemna</p>
        <p v-else-if="number === 0">Liczba neutralna</p>
        <p v-else>To nie liczba</p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      number: 2,
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
