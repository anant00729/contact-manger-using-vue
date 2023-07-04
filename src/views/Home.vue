<template>
  <div class="contact-manger-wrapper">
    <h2>Contact Manager</h2>
    <router-link class="btn btn-primary" to="/contacts/add">New</router-link>
  </div>
  <div class="contact-manger-content">
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates consectetur tenetur obcaecati quis. Harum
      quisquam molestias omnis modi aperiam explicabo praesentium, aliquid ex iure provident tempore! Cum doloremque
      eligendi praesentium.</p>
  </div>

  <div class="contact-manger-search">
    <form action="">
      <input class="search-contact" type="text">
      <input class="search-btn" type="submit">
    </form>
  </div>

  <!-- Spinner -->
  <div v-if="loading">
    <Spinner/>
  </div>

  <!-- Error message -->
  <div v-if="!loading && errorMessage">
    <p class="h4 text-danger">{{errorMessage}}</p>
  </div>

  <div v-if="contacts.length > 0">
      <div class="contact-gp">
        <div v-for="contact of contacts" :key="contact">
        <div class="contact-card">
          <div class="img-card">
            <img class="contact-img" :src="contact.photo"
              alt="contact_image">
          </div>
          <div class="contact-info">
            <h3>Name: {{contact.name}}</h3>
            <h3>Mobile: {{contact.mobile}}</h3>
            <h3>Email: {{contact.email}}</h3>
          </div>
          <div class="btn-groups">
            <router-link :to="`/contacts/view/${contact.id}`" class="btn-style btn-warning btn">
              <i class="fa fa-eye"></i>
            </router-link>
            <router-link :to="`/contacts/edit/${contact.id}`" class="btn-style btn-primary btn">
              <i class="fa fa-pen"></i>
            </router-link>
            <button to="/contacts/view/:contactId" class="btn-style btn-danger btn" @click="deleteContact(contact.id)">
              <i class="fa fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ContactService } from '@/services/ContactService'
import Spinner from '@/components/Spinner'
export default {
  name: 'HomePage',
  data: function () {
    return {
      loading: false,
      contacts: [],
      errorMessage: null,
    }
  },
  created: async function () {
    this.loading = true;
    setTimeout(async ()=>{
      try {
      let res = await ContactService.getAllContacts();
      this.contacts = res.data;
    } catch (error) {
      this.errorMessage = error;
    } finally {
      this.loading = false;
    }
    }, 1000)
    
  },
  methods: {
    deleteContact: async function (contactId) {
    try {
      let res = await ContactService.deleteContact(contactId);
      if(res){
        let res2 = await ContactService.getAllContacts();
        this.contacts = res2.data;    
      }
    } catch (error) {
      this.errorMessage = error;
    } finally {
      this.loading = false;
    }
    }
  },
  components: {Spinner}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contact-manger-wrapper {
  display: flex;
  border: 10px solid white;
  align-items: center;
  gap: 10px;
}

.contact-manger-content {
  padding: 0 10px;
}

.contact-manger-search {
  padding: 0 10px;
  display: flex;
  gap: 10px;
}

.search-btn {
  margin-left: 10px;
}

.search-contact {
  width: 500px;
}

.contact-gp {
  margin-top: 10px;
  border: 10px solid green;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.contact-card {
  border: 5px solid skyblue;
}

.contact-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
}

.contact-card {
  padding: 10px;
  display: grid;
  grid-template-columns: 120px 1fr 100px;
  gap: 10px;
}

.btn-groups {
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.btn-style {
  margin: 10px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.img-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
}</style>