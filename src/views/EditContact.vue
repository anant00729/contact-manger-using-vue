<template>
  <div class="contact-manger-wrapper">
    <h2>Edit Contact</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aliquid tempora accusamus veniam numquam exercitationem illo, velit deleniti, reprehenderit corporis, harum impedit aliquam quia atque excepturi consectetur eum. Aliquam, eveniet?</p>
    <div class="form-and-img" v-if="Object.keys(contact).length > 0">
      <form class="contact-form" @submit.prevent="submitUpdate()">
        <input v-model="contact.name" type="text" placeholder="Name">
        <input v-model="contact.email" type="email" placeholder="Email">
        <input v-model="contact.mobile" type="number" placeholder="Mobile">
        <input v-model="contact.photo" type="text" placeholder="Photo Url">
        <input v-model="contact.company" type="text" placeholder="Company">
        <input v-model="contact.title" type="text" placeholder="Title">
        <select v-model="contact.groupId" v-if="groups.length > 0">
          <option :value="group.groupId" v-for="group of groups" :key="group.groupId">{{group.groupName}}</option>
        </select>
        <input type="submit" class="btn btn-success btn-create" value="Update">
      </form>
      <img 
        class="contact-img"
        :src="contact.photo" alt="contact_image">
    </div>
  </div>
  
</template>

<script>

import { ContactService } from '@/services/ContactService';

export default {
  name: 'EditContact',
  data: function () {
    return {
      contactId: this.$route.params.contactId,
      contact: {},
      loading: false, 
      errorMessage: null,
      groups: []
    }
  },
  created: async function () {
    try {
      this.loading = true
      let res = await ContactService.getContact(this.contactId)  
      let res2 = await ContactService.getAllGroups()   
      this.contact = res.data
      this.groups = res2.data
    } catch (error) {
      this.errorMessage = error 
    } finally {
      this.loading = false
    }
  },
  methods: {
    submitUpdate: async function() {
      try {
        let res = await ContactService.updateContact(this.contact, this.contactId);
        if(res) {
          return this.$router.push('/')
        }else {
          return this.$router.push(`/contacts/edit/${this.contactId}`)
        }
      } catch (error) {
        console.log('error', error)
      }
    }
  }
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
  border-radius: 50%;
}
.contact-img{
  align-self: center;
  margin: 0 auto;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  object-fit: cover;
}
</style>