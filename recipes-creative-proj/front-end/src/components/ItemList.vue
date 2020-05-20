<template>
<div class="products">
  <div class="product" v-for="recipe in recipes" :key="recipe.id">
    <img class="thumb" :src="recipe.path" alt="recipe photo">
    <router-link :to="'recipe/'+ recipe._id">{{recipe.name}}</router-link>
    <button class="auto" v-show="loggedIn" v-on:click="addToList(recipe)">Add to List</button>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'ItemList',
  data() {
    return {
      recipes: [],
      loggedIn: false,
    }
  },
  created() {
    this.getRecipes();
    if (this.$root.$data.user !== null) {
      this.loggedIn = true;
    }
  },
  methods: {
    async getRecipes() {
      try {
        let response = await axios.get("/api/");
        this.recipes = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async addToList(recipe) {
      try {
        await axios.put("/api/user/recipes/" + recipe._id, {
          username: this.$root.$data.user.data.user.username,
          remove: false
        });
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>
