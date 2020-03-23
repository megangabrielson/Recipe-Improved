<template>
<div>
  <div class="row no-gutters">
    <div class="col-lg">
      <img :src="recipe.strMealThumb" alt="recipe photo">
    </div>
    <div class="col-lg">
      <div id="recipeName">{{recipe.strMeal}}</div>
      <div id="instructions">{{recipe.strInstructions}}</div>
    </div>
  </div>
</div>
</template>


<script>
export default {
  name: 'Recipe',
  data() {
    return {
      recipe: ,
    }
  },
  added() {
    this.recipe = this.$root.$data.recipes.find(recipe => recipe.idMeal === parseInt(this.$route.params.id));
  },
}
</script>
