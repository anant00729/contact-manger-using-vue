<template>
  <div class="contact-manger-wrapper">
    <h2>View Contact</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aliquid tempora accusamus veniam numquam exercitationem illo, velit deleniti, reprehenderit corporis, harum impedit aliquam quia atque excepturi consectetur eum. Aliquam, eveniet?</p>

    <!-- Spinner -->
    <div v-if="loading">
      <Spinner/>
    </div>

    <!-- Error message -->
    <div v-if="!loading && errorMessage">
      <p class="h4 text-danger">{{errorMessage}}</p>
    </div>

    <div v-if="Object.keys(contact).length > 0">
      <div class="form-and-img">
      <img 
        class="contact-img"
        :src="contact.photo" alt="contact_image">
      <div class="contact-info">
        <h4>Name: {{ contact.name }}</h4>
        <h4>Mobile: {{ contact.mobile }}</h4>
        <h4>Email: {{ contact.email }}</h4>
        <h4>Title: {{ contact.groupId }}</h4>
      </div>
    </div>
    </div>
    
    <router-link to="/" class="btn btn-success">Back</router-link>
  </div>
</template>

<script>

import { ContactService } from '@/services/ContactService';


export default {
  name: 'ViewContact',
  data: function () {
    return {
      contactId: this.$route.params.contactId,
      contact: {},
      loading: false, 
      errorMessage: null,
    }
  },

  created: async function () {
    try {
      this.loading = true
      let res = await ContactService.getContact(this.contactId)  
      let res2 = await ContactService.getGroup(res.data.groupId)   
      this.contact = {
        ...res.data, 
        groupId: res2.data.groupName
      }
    } catch (error) {
      this.errorMessage = error 
    } finally {
      this.loading = false
    }
  },

}
</script>


<style scoped>

.contact-manger-wrapper{
  flex-direction: column;
  border: 10px solid white;
  align-items: center;
  gap: 10px;
}
.contact-form{
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-self: center;
}
.btn-create{
  width: 100px;
}
.form-and-img{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
.contact-img{
  align-self: center;
  margin: 0 auto;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  object-fit: cover;
}
.contact-info{
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

</style>