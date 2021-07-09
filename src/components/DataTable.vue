<template>
  <div>
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
        :items-per-page="10"
        class="elevation-1"
        :search="search" 
      >
        <template v-slot:[`item.remove`]="{ item }">
          <v-icon
            small
            @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        search: '',
        headers: [
          {
            text: 'Post Title',
            sortable: false,
            value: 'title',
          },
          { text: 'Post Content', value: 'body' },
          { text: 'Author', value: 'name' },
          { 
            text: 'Remove', 
            value: 'remove', 
            sortable: false
            },
        ],
      }
    },
    computed: {
      posts() {
        return this.$store.getters.getAllPosts;
      }
    },
    methods: {
      deleteItem (item) {
        this.editedIndex = this.posts.indexOf(item)
        this.posts.splice(this.editedIndex, 1)
      }
    }
  }
</script>

<style scoped>
  @import "./DataTable.scss";
</style>