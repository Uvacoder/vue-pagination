<template>
  <v-card>
    <v-card-title>
      JSON Placeholder Post List
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search title, author or any keyword"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="posts"
      :items-per-page="5"
      class="elevation-1"
      :search="search" 
    ></v-data-table>
  </v-card>
</template>

<script>
  export default {
    data() {
      return {
        search: '',
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

<style scoped>
  @import "./DataTable.scss";
</style>