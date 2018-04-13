<template>
  <section>
    <p>
      All my Books:
    </p>
    <p v-for="book in books" :key="book.filename">
      <nuxt-link :to="book.permalink" v-html="book.permalink"></nuxt-link>
    </p>
  </section>
</template>

<script>
export default {
  async asyncData ({ app, route }) {
    return {
      books: await app.$content('/books').getAll()
    }
  }
}
</script>
