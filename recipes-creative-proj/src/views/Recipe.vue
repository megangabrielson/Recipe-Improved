<template>
<div>
  <div class="row no-gutters">
    <div class="col-lg">
      <img id="picture" :src="recipe.strMealThumb" alt="recipe photo">
      {{recipe.strArea}} {{recipe.strCategory}} Dish
      <br><br>
      <button class="auto" v-on:click="addToList(recipe)">Add to List</button>
    </div>
    <div class="col-lg">
      <h1>
        <div id="recipeName">{{recipe.strMeal}}</div>
      </h1>
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
      recipe: {},
    }
  },
  methods: {
    addToList(recipe) {
      this.$root.$data.list.push(recipe);
    }
  },
  created() { //special function that gets called when page is created
    console.log(this.$route.params.id);
    this.recipe = this.$root.$data.recipes.find(recipe => recipe.idMeal === (this.$route.params.id));
  },
}
</script>
