<template>
<div>
  <h1>Your List</h1>
  <div v-if="this.$root.$data.list.length > 0">
    <CartList :recipes="items" />
  </div>
  <div v-else>
    <p><strong>Currently empty!</strong></p>
  </div>
</div>
</template>

<script>
import CartList from "../components/CartList.vue"
export default {
  name: 'List',
  components: {
    CartList
  },
  computed: {
    items() {
      return this.$root.$data.list;
    }
  },
}
</script>

<style scoped>
p {
  background-color: #e9ad99;
  margin: 0 38%;
  margin-bottom: 70px;
  padding: 20px 0;
}
</style>
