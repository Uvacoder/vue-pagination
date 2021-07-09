<template>
  <v-data-table
    :headers="headers"
    :items="posts"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
  export default {
    data() {
      return {
        headers: [
          {
            text: 'Post Title',
            // align: 'start',
            sortable: false,
            value: 'title',
          },
          { text: 'Post Content', value: 'body' },
          { text: 'Author Name', value: 'id' },
          { text: 'Remove' },
        ],
      }
    },
    computed: {
      posts() {
        return this.$store.getters.getAllPosts;
      }
    },
  }
</script>
