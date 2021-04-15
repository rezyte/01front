<template>
  <transactions-paginated
      :data="trans"
      :total-pages="Math.ceil(trans.length / 4)"
      :total="trans.length"
      :per-page="5"
      :currentPage="currentPage"
      @pagechanged="onPageChange"
  />
</template>

<script>
import TransactionsPaginated from "./TransactionsPaginated.vue";
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "IndexPaginate",
  components: {
    TransactionsPaginated
  },
  mounted() {
    this.loadTrans()
  },
  data() {
    return {
      currentPage: 1
    }
  },
  methods: {
    ...mapActions(['loadTrans']),
    onPageChange(page) {
      this.currentPage = page
    }
  },
  computed: {
    ...mapGetters(['trans'])
  }
}
</script>

<style scoped>

</style>
