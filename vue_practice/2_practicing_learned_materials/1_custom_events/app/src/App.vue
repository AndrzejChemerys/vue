<template>
  <div id="app">
    <HelloWorld msg="Vue.js App"/>
    <Students :studentsL="studentsList" @deleteStud="removeStudent" />
    <OnlineStudents :studentsL="studentsList"/>
    <Blog/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Students from "./components/Students.vue";
import OnlineStudents from "./components/OnlineStudents.vue";
import Blog from "./components/Blog.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Students,
    OnlineStudents,
    Blog,
  },
  data() {
    return {
      studentsList: [
        { name: "Ivan", status: true },
        { name: "Piotr", status: false },
        { name: "Grazyna", status: true },
        { name: "Janusz", status: false },
      ],
    };
  },
  methods: {
    removeStudent(nameObj) {
      console.log(nameObj);
      console.log(nameObj.name);
      this.studentsList = this.studentsList.filter(stud => {
        return stud.name !== nameObj.name;
      });
    },
  },
};
</script>

<style>
</style>
