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
        <template v-slot:[`item.expand`]="{ item }">
          <v-icon
            v-if="isEllipsis(item)"
            medium
            @click="handleContentClick(item)"
            
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
        // kot: false,
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

      // expanded() {
      //   return {}
      // },
    },
    methods: {
      isEllipsis(item) { //tmp
        //tmp
        console.log(item)
        return true; //code below is ok

        // function isEllipsisActive(e) {
        //     return (e.offsetWidth < e.scrollWidth);
        // }
        // const el = document.querySelector(`.row-id-${item.id} td:nth-child(2)`);

        // if (!el) {
        //   return true;
        // }

        // return isEllipsisActive(el)
      },
      deleteItem(item) {
        this.editedIndex = this.posts.indexOf(item)
        this.posts.splice(this.editedIndex, 1)
      },
      itemRowBackground: function (item) {
        console.log('itemRowBackground', item);

        const classNames = [`row-id-${item.id}`]

        if (!this.expanded[item.id]) {
          classNames.push('row-ellipsis');
        }

        return classNames.join(' ')

        // return "jamnik"
      },
      handleContentClick: function(item, e, d) {
        console.log('handleContentClick', item, e, d)
        // console.log(this.expanded);

        this.expanded = Object.assign({}, this.expanded, {
          [item.id]: !this.expanded[item.id]
        })

        // this.$forceUpdate(); //tmp
      },
      handleRowClick: function(a, e, d) {
        console.log('handleRowClick', a, e, d)
      }
    },
    updated: function () {
      this.$nextTick(function () {
        console.log('rerender')
        // Code that will run only after the
        // entire view has been re-rendered
      })
    }
  }
</script>

<style scoped>
  @import "./DataTable.scss";
</style>