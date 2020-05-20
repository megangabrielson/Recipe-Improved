<template>
<div class="products">
  <div v-if="yourList.length > 0">
    <div class="product" v-for="recipe in yourList" :key="recipe.id">
      <img class="thumb" :src="recipe.path" alt="recipe photo">
      <router-link :to="'recipe/'+ recipe.id">{{recipe.name}}</router-link>
      <button class="auto" v-on:click="removeFromList(recipe)">Remove from List</button>
    </div>
  </div>
  <div v-else>
    <p><strong>Currently empty!</strong></p> <br>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'CartList',
  data() {
    return {
      yourList: Array,
    }
  },
  created() {
    this.yourList = this.$root.$data.user.data.user.recipeList
  },
  methods: {
    async removeFromList(recipe) {
      try {
        console.log(this.$root.$data.user.data.user.recipeList);
        console.log(recipe._id);
        await axios.put("/api/user/recipes/" + recipe._id, {
          username: this.$root.$data.user.data.user.username,
          remove: true
        });

        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>
