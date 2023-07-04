

<template>
  <h2>Contact Manager</h2>
</template>

<script>

import { ContactService } from '@/services/ContactService'
export default {
  name: 'ContactManager',
  data: function () {
    return {
      loading: false, 
      contacts: [],
      errorMessage: null,
    }
  },
  created: async function (){
    try {
      this.loading = true;
      let res = await ContactService.getAllContactsData();
      this.contacts = res.data;  
    } catch (error) {
      this.errorMessage = error;
    }finally {
      this.loading = false;
    } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>