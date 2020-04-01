<template>
<div class="products">
  <div class="product" v-for="recipe in recipes" :key="recipe.idMeal">
    <router-link :to="'recipe/'+ recipe.idMeal">{{recipe.strMeal}}</router-link>
    <button class="auto" v-on:click="removeFromList(recipe)">Remove from List</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'CartList',
  props: {
    recipes: Array,
  },
  methods: {
    removeFromList(recipe) {
      this.$root.$data.list = this.$root.$data.list.filter(item => recipe !== item);
    }
  },
}
</script>
