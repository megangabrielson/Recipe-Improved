<template>
<div>
  <div class="row">
    <div class="col-lg">
      <form class="pure-form">
        <i class="fas fa-search"></i><input v-model="searchText" />
      </form>

      <div id="type"><br><br>For a recipe, just type one in above and hit search! <br> If none are found, try a more general search.</div>
    </div>
  </div>
  <hr>

  <ItemList :recipes="recipes" />
</div>
</template>

<script>
import ItemList from "../components/ItemList.vue"
export default {
  name: 'Home',
  components: {
    ItemList
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    recipes() {
      return this.$root.$data.recipes.filter(recipe => recipe.strMeal.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    }
  },
}
</script>
