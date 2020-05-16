<template>
  <div class="blogs">
    <h2>{{ blogTitle }}</h2>
    <div v-for="post in posts" :key="post.id">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </div>
    <button @click="changeTitle">Change Title</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Blogs",
  data() {
    return {
      blogTitle: "Blogs"
    };
  },
  methods: {
    changeTitle() {
      this.blogTitle = "Amazing Blog Site";
    }
  },
  beforeCreate() {
    alert("beforeCreate hook");
  },
  created() {
    alert("created hook");
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then(response => {
        console.log(response);
        this.posts = response.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  beforeUpdate() {
    alert("beforeUpdate");
  }
};
</script>

<style></style>
