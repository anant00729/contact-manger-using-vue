<template>
  <nav class="nav">
    <router-link to="/">View Contact Manager</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav{
    border: 10px solid green;
    display: flex;
    flex-direction: row;
    padding: 20px;
  }

  
</style>