<template>
    <div class="htmlClass">
      <h1>{{ title }}</h1>
      <form @submit.prevent="submitForm">
        <input type="text" id="firstName" v-model="firstName" />
        <input type="text" id="surName" v-model="surName"/>
        <input type="text" id="nickName" v-model="nickName"/>
        <input type="text" id="studentcode" v-model="studentcode" />
        <button type="submit" class="submitForm">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'InputPage',
    data() {
      return {
        title: 'คณาธิป ศะศิบุตร์ คิว 310',
        firstName: '',
        surName:'',
        nickName: '',
        studentcode: '',
      }
    },
    methods: {
      submitForm() {
        this.$emit('submit form')
      },
    }
  }
  </script>
  
  <style scoped></style>