const filter_search = {
  data() {
    return {
      searchText: '',
    }
  },
  template: `
    <form action="#" class="search__form" @submit.prevent="$parent.$refs.products.filter(searchText)">
      <input type="text" class="search__field" v-model="searchText">
      <button type="submit" class="search__button">
        <i class="fas fa-search"></i>
        </button>
    </form>
  `
}