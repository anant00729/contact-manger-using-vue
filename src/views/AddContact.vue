<template>
  <div class="contact-manger-wrapper">
    <h2>Add Contact</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aliquid tempora accusamus veniam numquam exercitationem illo, velit deleniti, reprehenderit corporis, harum impedit aliquam quia atque excepturi consectetur eum. Aliquam, eveniet?</p>
    <div class="form-and-img">
      <form class="contact-form" @submit.prevent="submitCreate()">
        <input required="true" v-model="contact.name" type="text" placeholder="Name">
        <input required="true" v-model="contact.email" type="email" placeholder="Email">
        <input required="true" v-model="contact.mobile" type="number" placeholder="Mobile">
        <input required="true" v-model="contact.photo" type="text" placeholder="Photo Url">
        <input required="true" v-model="contact.company" type="text" placeholder="Company">
        <input required="true" v-model="contact.title" type="text" placeholder="Title">
        <select required="true" v-model="contact.groupId" v-if="groups.length > 0">
          <option :value="group.groupId" v-for="group of groups" :key="group.groupId">{{group.groupName}}</option>
        </select>
        <input type="submit" class="btn btn-success btn-create" value="Create">
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
  name: 'AddContact',
  data: function () {
    return {
      contact: {
        name: '',
        photo: '',
        email: '',
        mobile: '',
        company: '',
        title: '',
        groupId: -1
      },
      groups: []
    }
  },

  created: async function () {
    try {
      let res = await ContactService.getAllGroups()  
      this.groups = res.data;
    } catch (error) {
      console.log(error)
    }
  },

  methods: {
    submitCreate: async function() {
      try {
        let res = await ContactService.createContact(this.contact);
        if(res) {
          return this.$router.push('/')
        }else {
          return this.$router.push('/contacts/add')
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