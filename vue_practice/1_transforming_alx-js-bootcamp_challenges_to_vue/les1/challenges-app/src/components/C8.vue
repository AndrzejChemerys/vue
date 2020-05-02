<template>
    <div>
        <ul>
            <li v-for="ar in array" :key="ar">{{ar}}</li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      array: ["asd", "qwe", "gdf"],
    };
  },
};
</script>

<style>
</style>
