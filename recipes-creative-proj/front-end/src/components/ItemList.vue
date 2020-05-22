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
  props: {
    recipes: Array,
  },
  data() {
    return {}
  },
  methods: {
    async addToList(recipe) {
      try {
        await axios.put("/api/user/recipes/" + recipe._id, {
          username: this.$root.$data.user.data.user.username,
          remove: false
        });
        this.$root.$data.user.data.user.recipeList.push(recipe);
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    loggedIn() {
      if (this.$root.$data.user !== null) {
        return true;
      } else {
        return false;
      }
    },
  },
}
</script>
