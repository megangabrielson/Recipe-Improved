<template>
<div>
  <ItemList :items="items" />
</div>
</template>

<script>
import ItemList from "../components/ItemList.vue"
export default {
  name: 'List',
  components: {
    ItemList
  },
  computed: {
    items() {
      return this.$root.$data.list;
    }
  },
}
</script>
