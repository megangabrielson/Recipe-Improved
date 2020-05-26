<template>
<div>
  <div v-if="this.loggedIn === false">
    <h1>To access your list, please login</h1>
    <br>
    <form v-on:submit.prevent="login">
      <input v-model="username">
      <button type="submit">Login</button>
    </form>
    <br>
    <hr><br>
    <h2>Register</h2>
    <form v-on:submit.prevent="createAccount">
      <input v-model="newUsername" placeholder="Username">
      <br>
      <input v-model="name" placeholder="Your Name">
      <br>

      <p><button type="submit">Create</button> <br> After creating an account, please log in. </p>
    </form>

  </div>
  <div v-else>
    <h1>{{this.yourName}}'s List</h1>
    <CartList />
  </div>
</div>
</template>

<script>
import axios from 'axios';
import CartList from "../components/CartList.vue"
export default {
  name: 'List',
  components: {
    CartList
  },
  data() {
    return {
      username: '',
      name: '',
      newUsername: '',
      loggedIn: false,
      yourName: '',
    }
  },
  created() {
    if (this.$root.$data.user !== null) {
      this.yourName = this.$root.$data.user.data.user.name;
      this.loggedIn = true;
    }
  },
  methods: {
    async login() {
      try {
        this.$root.$data.user = await axios.post('/api/user', {
          username: this.username,
        });
        this.yourName = this.$root.$data.user.data.user.name;
        this.loggedIn = true;
        return true;
      } catch (error) {
      }
    },
    async createAccount() {
      await axios.post("/api/", {
        username: this.newUsername,
        name: this.name,
      });
    },
  },
}
</script>

<style scoped>
p {
  background-color: #e9ad99;
  margin: 0 38%;
  margin-bottom: 70px;
  padding: 20px 0;
}
</style>
