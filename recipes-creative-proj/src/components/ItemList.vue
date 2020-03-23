<template>
<div class="products">
  <div class="product" v-for="recipe in recipes" :key="recipe.idMeal">
    <router-link :to="'recipe/'+ recipe.idMeal">{{recipe.strMeal}}</router-link>
    <button class="auto" v-on:click="addToList(recipe)">Add to List</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'ItemList',
  props: {
    recipes: Array,
  },
  methods: {
    addToList(recipe) {
      this.$root.$data.list.push(recipe);
    }
  },
}
</script>


<style scoped>

</style>
