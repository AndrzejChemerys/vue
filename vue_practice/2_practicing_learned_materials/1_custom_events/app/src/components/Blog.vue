<template>
    <div class="blogs">
        <div v-for="post in posts" :key="post.id">
            <h2>{{post.title}}</h2>
            <p>{{post.body}}</p>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Blogs",
  data() {
    return {
      posts: [],
    };
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then(response => {
        this.posts = response.data;
      })
      .catch(err => {
        console.log(err + "ERROR CATCHED");
      });
  },
};
</script>

<style>
</style>
