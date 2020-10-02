<style scoped>
.app-bar.v-sheet.v-card {
  border-radius: 0%;
}
</style>
<template>
  <v-app>
    <v-navigation-drawer app>
      <Navigation />
    </v-navigation-drawer>
    <v-app-bar app>
      <AppBar />
    </v-app-bar>
    <v-main>
      <Content />
    </v-main>
    <v-footer inset app>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import AppBar from "./components/App/AppBar";
import Navigation from "./components/App/Navigation";
import Content from "./components/App/Content";
import Footer from "./components/App/Footer";

export default {
  name: "App",
  components: {
    AppBar,
    Navigation,
    Content,
    Footer
  },
  data: () => {
    return {};
  }
};
</script>
