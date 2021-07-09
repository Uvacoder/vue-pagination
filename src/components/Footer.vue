<template>
  <v-footer
    dark
    padless
    >
    <v-card
      class="lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="34px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="white--text pt-0">
        <p>To sort, click on title, content or author. To delete click thrash can icon.</p>
        <p>This application was created for the needs of the Cogitech recruitment process. It was built in Vue-Vuetify and Vuex.</p>
      </v-card-text>
      <v-divider/>
      <v-card-text class="white--text">
        <strong>Patryk Bura</strong> {{ new Date().getFullYear() }}
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-github',
        'mdi-email',
        'mdi-linkedin',
        'mdi-docker',
      ],
    }),
  }
</script>

<style scoped>
  @import "./Footer.scss";
</style>