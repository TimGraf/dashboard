<style scoped>
.v-sheet.v-card {
  border-radius: 0%;
}
</style>
<template>
  <div>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          {{ AppName }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ Subtitle }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data: () => {
    return {
      AppName: "Appliation",
      Subtitle: "Dashboard",
      items: [
        { title: "Home", icon: "mdi-home", to: "/" },
        { title: "Dashboard", icon: "mdi-view-dashboard", to: "dashboard" },
        { title: "Users", icon: "mdi-account-multiple", to: "users" },
        { title: "About", icon: "mdi-help-box", to: "about" }
      ],
      right: null
    };
  }
};
</script>
