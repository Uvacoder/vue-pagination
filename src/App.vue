<template>
  <v-app theme--dark>
    <v-main>
      <DataTable/>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import DataTable from './components/DataTable';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    DataTable,
    Footer
  },
  mounted() {
    this.$store.dispatch("getPosts")
  }
};
</script>