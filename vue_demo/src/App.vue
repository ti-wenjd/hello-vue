<template>
  <div>
    <div class="container">
      <search/>
      <user-main/>
    </div>
  </div>
</template>

<script>
  import Main from './components/Main'
  import Search from './components/Search'

  export default {
    data() {
      return {
        repoUrl: '',
        repoName: ''
      }
    },
    components: {
      UserMain:Main,
      Search
    }


  }
</script>

<style scoped>

</style>
