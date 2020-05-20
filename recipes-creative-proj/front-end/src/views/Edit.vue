<template>
<div>
  <div class="row no-gutters">
    <div class="col-lg">
      <img id="picture" :src="recipe.path" alt="recipe photo">
      {{recipe.area}} {{recipe.category}} Dish
      <br><br>
    </div>
    <div class="col-lg">
      <div>
        <h1>You're Editing ... {{recipe.name}}</h1>
      </div>
      <form v-on:submit.prevent="changeRecipe(recipe)"><input v-model="changedName">
        <textarea id="editIngredients" v-model="changedIngredients"></textarea>
        <textarea id="editInstructions" v-model="changedInstructions"></textarea> <br> <button type="submit">Save</button>
      </form>
    </div>
  </div>
</div>
</template>


<script>
import axios from 'axios';
export default {
  name: 'Edit',
  data() {
    return {
      recipe: {},
      changedName: '',
      changedInstructions: '',
      changedIngredients: '',
    }
  },
  methods: {
    async changeRecipe(recipe) {
      try {
        await axios.put("/api/" + recipe._id, {
          name: this.changedName,
          instructions: this.changedInstructions,
          ingredients: this.changedIngredients,
        });
        this.$router.push({
          name: 'Recipe',
          params: {
            id: this.recipe._id,
          }
        })
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async getRecipe() {
      try {
        let response = await axios.get("/api/recipe/" + this.$route.params.id);
        this.recipe = response.data;
        this.changedName = this.recipe.name;
        this.changedInstructions = this.recipe.instructions;
        this.changedIngredients = this.recipe.ingredients;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() { //special function that gets called when page is created
    this.getRecipe();
  },
}
</script>
