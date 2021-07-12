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
        :item-class="getRowClass"
      >
        <template v-slot:[`item.remove`]="{ item }">
          <v-icon
            small
            @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
        </template>
        <template v-slot:[`item.expand`]="{ item }">
          <v-icon
            medium
            @click="handleSeeMoreClick(item)"
          >
            {{expanded[item.id] ? 'mdi-menu-up' : 'mdi-menu-down'}}
          </v-icon>
        </template>
        <template v-slot:[`item.body`]="{item}" >
          {{ item.body }}  
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
const headerClass = "grey lighten-4"

export default {
  data() {
    return {
      expanded: {},
      search: '',
      headers: [
        {
          text: 'Post Title', 
          value: 'title',
          width: '15%',
          class: headerClass
        },
        { text: 'Post Content',
          value: 'body' ,
          width: '35%',
          class: headerClass
        },
          { 
          text: 'See More', 
          sortable: false,
          value: 'expand',
          width: '5%',
          class: headerClass
        },
        { 
          text: 'Author', 
          value: 'name',
          width: '10%',
          class: headerClass
        },

        { 
          text: 'Remove', 
          value: 'remove', 
          sortable: false,
          width: '5%',
          class: headerClass
        },
      ],
    }
  },
  computed: {
    posts() {
      return this.$store.getters.getAllPosts;
    },
  },
  methods: {
    deleteItem(item) {
      this.editedIndex = this.posts.indexOf(item)
      this.posts.splice(this.editedIndex, 1)
    },
    handleSeeMoreClick(item) {
      this.expanded = Object.assign({}, this.expanded, {
        [item.id]: !this.expanded[item.id]
      })
    },
    getRowClass(item) {
      return !this.expanded[item.id] ? 'row-ellipsis' : ''
    }
  }
}
</script>

<style scoped>
  @import "./DataTable.scss";
</style>