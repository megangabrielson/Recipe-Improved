<template>
<div>
  <div class="row no-gutters">
    <div class="col-lg">
      <img id="picture" :src="recipe.strMealThumb" alt="recipe photo">
      {{recipe.strArea}} {{recipe.strCategory}} Dish
      <br><br>
    </div>
    <div class="col-lg">
      <div><h1>You're Editing ... {{recipe.strMeal}}</h1></div>
      <form v-on:submit.prevent="changeRecipe()"><input v-model="changedName">
        <textarea v-model="changedInstructions"></textarea> <br> <button type="submit">Save</button>
      </form>
    </div>
  </div>
</div>
</template>


<script>
export default {
  name: 'Edit',
  data() {
    return {
      recipe: {},
      changedName: '',
      changedInstructions: '',
    }
  },
  methods: {
    changeRecipe() {
      this.recipe.strMeal = this.changedName;
      this.recipe.strInstructions = this.changedInstructions;
      this.$router.push({
        name: 'Recipe',
        params: {
          id: this.recipe.idMeal,
        }
      })
    },
  },
  created() { //special function that gets called when page is created
    this.recipe = this.$root.$data.recipes.find(recipe => recipe.idMeal === (this.$route.params.id));
    this.changedName = this.recipe.strMeal;
    this.changedInstructions = this.recipe.strInstructions;
  },
}
</script>
