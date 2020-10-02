<style scoped>
.app-bar.v-sheet.v-card {
  border-radius: 0%;
}
</style>
<template>
  <v-app>
    <v-app-bar class="app-bar" app color="primary" dark>
      <v-spacer></v-spacer>
    </v-app-bar>
    <Navigation />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Navigation from "./components/App/Navigation";

export default {
  name: "App",

  components: {
    Navigation
  },

  data: () => ({
    //
  })
};
</script>
