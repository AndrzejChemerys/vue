<template>
    <div>
        <h2>Students list</h2>
        <ul>
            <li v-for="(student, index) in studentsL" :key="index">
                <span @click="deleteStudent(student.name)">{{student.name}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "Students",
  props: ["studentsL"],
  data() {
    return {};
  },
  methods: {
    deleteStudent(name) {
      this.$emit("deleteStud", { name });
    },
  },
};
</script>

<style>
</style>
