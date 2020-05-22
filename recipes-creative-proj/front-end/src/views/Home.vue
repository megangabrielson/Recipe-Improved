<template>
<div>
  <div class="row">
    <div class="col-lg">
      <form class="pure-form">
        <i class="fas fa-search"></i><input v-model="searchText" />
      </form>

      <div id="type"><br><br>For a recipe, just type one in above! <br> If none are found, try a more general search.</div>
    </div>
  </div>
  <hr>
  <ItemList :recipes="shownRecipes" />
</div>
</template>

<script>
import axios from 'axios';
import ItemList from "../components/ItemList.vue"
export default {
  name: 'Home',
  components: {
    ItemList
  },
  data() {
    return {
      searchText: '',
      recipeList: []
    }
  },
  methods: {
    async getRecipes() {
      try {
        let response = await axios.get("/api/");
        this.recipeList = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getRecipes();
  },
  computed: {
    shownRecipes() {
      return this.recipeList.filter(recipe => recipe.name.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    }
  },
}
</script>
