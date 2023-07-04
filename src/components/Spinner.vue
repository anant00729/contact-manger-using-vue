<template>
  <div class="spinner-wrapper">
    <img class="spinner-img" src="../assets/loading.gif" alt="spinner">
  </div>
</template>

<script>
export default {
  name: 'SpinnerComponent'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.spinner-wrapper{
  width: 100%;
  display: flex;
}
.spinner-img{
  width: 500px;
  margin: 0 auto;
}
</style>