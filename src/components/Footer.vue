<template >
  <v-footer   
    padless
    >
    <v-card
      class="text-center grey lighten-2"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon.name"
          class="mx-4"
          icon
        >
          <a :href="icon.url">
            <v-icon size="34px">
              {{ icon.name }}
            </v-icon>
          </a>
        </v-btn>
      </v-card-text>
      <v-card-text class="grey lighten-2 pt-0">
        <p>This application was created for the needs of the recruitment process. It was built in Vue-Vuetify and Vuex.</p>
        <p>To sort, click on title, content or author. To delete click thrash can icon. If you want to see full post content click 'See More' arrow.</p>
      </v-card-text>
      <v-divider/>
      <v-card-text class="grey lighten-2" >
        <strong>Patryk Bura</strong> <span>{{ new Date().getFullYear() }} </span>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        {
          name: 'mdi-github',
          url: 'https://github.com/patrykbura/vue-pagination'
        }, {
          name: 'mdi-email',
          url: 'mailto:patrykbura@gmail.com'
        }, {
          name: 'mdi-linkedin',
          url: 'https://www.linkedin.com/in/patrykbura/'
        }
      ],
    })
  }
</script>

<style scoped>
  @import "./Footer.scss";
</style>