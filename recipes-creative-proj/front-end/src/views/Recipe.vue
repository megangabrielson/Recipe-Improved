<template>
<div>
  <div class="row no-gutters">
    <div class="col-lg">
      <img id="picture" :src="recipe.path" alt="recipe photo">
      {{recipe.area}} {{recipe.category}} Dish
      <br>
      <button class="auto" v-on:click="edit()">Edit Recipe</button>
      <button v-show="loggedIn" class="auto" v-on:click="addToList(recipe)">Add to List</button>
    </div>
    <div class="col-lg">
      <h1>
        <div id="recipeName">{{recipe.name}}</div>
      </h1>
      <div id="ingredients" v-html="ingredientList"></div>
      <div id="instructions" v-html="instructionList"></div>
    </div>
  </div>
</div>
</template>


<script>
import marked from 'marked';
import axios from 'axios';
export default {
  name: 'Recipe',
  data() {
    return {
      recipe: {},
      loggedIn: false,
    }
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
      }
    },
    edit() {
      this.$router.push({
        name: 'Edit',
        params: {
          id: this.recipe._id,
        }
      })
    },
    async getRecipe() {
      try {
        let response = await axios.get("/api/recipe/" + this.$route.params.id);
        this.recipe = response.data;
        return true;
      } catch (error) {
      }
    },
  },
  created() { //special function that gets called when page is created
    this.getRecipe();
    if (this.$root.$data.user !== null) {
      this.loggedIn = true;
    }
  },
  computed: {
    ingredientList: function() {
      return marked(this.recipe.ingredients);
    },
    instructionList: function() {
      return marked(this.recipe.instructions);
    },
  },
}
</script>
