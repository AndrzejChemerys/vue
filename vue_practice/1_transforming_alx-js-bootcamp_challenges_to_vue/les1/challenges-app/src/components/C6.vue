<template>
    <div>
        <span v-if="age < childAge">Child</span>
        <span v-else-if="age >= childAge && age <= adultAge">Youth</span>
        <span v-else-if="age >= adultAge">Adult</span>
    </div>
</template>

<script>
export default {
  data() {
    return {
      age: 12,
      childAge: 10,
      adultAge: 18,
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
