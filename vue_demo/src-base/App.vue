<template>
  <div>
    <img class="logo" src="./assets/logo.png" alt="logo">
    <HelloKikro/>
  </div>
</template>

<script>

  import HelloKikro from './components/HelloKikro'

  export default {
    components: {
      HelloKikro
    }
  }
</script>

<style>

  .logo {
    width: 400px;
    height: 400px;
  }

</style>
