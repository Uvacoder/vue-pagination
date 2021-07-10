<template>
  <div>
    <v-card>
      <v-card-title 
        class="grey lighten-3"
      >
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
        :item-class="itemRowBackground"
        @click:row="handleRowClick"
      >

        <template v-slot:[`item.remove`]="{ item }">
          <v-icon
            small
            @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
        </template>
        <template v-slot:[`item.body`]="{item}" v-on:click="deleteItem(item)">
          <tr>
            {{ item.body }}
          </tr>   
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
            width: '20%',
            class: "grey lighten-4"
          },
          { text: 'Post Content',
            value: 'body' ,
            width: '40%',
            class: "grey lighten-4"
          },
          { 
            text: 'Author', 
            value: 'name',
            width: '10%',
            class: "grey lighten-4"
          },
          { 
            text: 'Remove', 
            value: 'remove', 
            sortable: false,
            width: '5%',
            class: "grey lighten-4"
          },
        ],
      }
    },
    computed: {
      posts() {
        return this.$store.getters.getAllPosts;
      },
      expanded() {
        return {}
      },
    },
    methods: {
      deleteItem(item) {
        this.editedIndex = this.posts.indexOf(item)
        this.posts.splice(this.editedIndex, 1)
      },
      itemRowBackground: function (item) {
        console.log(item)
        return "jamnik"
      },
      handleContentClick: function(item, e, d) {
        console.log('handleContentClick', item, e, d)
        console.log(this.expanded);
        this.expanded[item.id] = !this.expanded[item.id]
      },
      handleRowClick: function(a, e, d) {
        console.log('handleRowClick', a, e, d)
      }
    }
  }
</script>

<style scoped>
  @import "./DataTable.scss";
</style>