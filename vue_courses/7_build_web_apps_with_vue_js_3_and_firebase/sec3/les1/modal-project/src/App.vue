<template>
  <h1>{{ title }}</h1>
  <p>Welcome...</p>
  <div v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:linkls>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
      <h1>Ninja Givaway!</h1>
      <p>Grab your ninja swag for half price!</p>
    </Modal>
  </div>

  <div v-if="showModal2">
    <Modal @close="toggleModal">
      <template v-slot:linkls>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
      <h1>Sign Up!</h1>
      <p>For updated and promo codes!</p>
    </Modal>
  </div>

  <button @click.alt="toggleModal">open modal (alt)</button>
  <button @click="toggleModal2">open modal</button>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    Modal
  },
  data() {
    return {
      title: 'My First Vue App :)',
      showModal: false,
      showModal2: false
    }
  },
  methods: {
    toggleModal(){
      this.showModal = !this.showModal
    },
    toggleModal2(){
      this.showModal2 = !this.showModal2
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
