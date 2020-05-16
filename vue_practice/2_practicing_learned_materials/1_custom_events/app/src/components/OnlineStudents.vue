<template>
    <div>
        <h2>Active Students list</h2>
        <ul>
            <li v-for="(student, index) in studentsL" :key="index"><span v-if="student.status">{{student.name}}</span></li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "OnlineStudents",
  props: ["studentsL"],
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
