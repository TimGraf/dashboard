<template>
  <v-container fluid>
    <router-view />
  </v-container>
</template>
<script>
export default {
  name: "Content",
  data: () => {
    return {};
  },
  created: async function() {
    // Example of calling the globally available user API
    const userData = await this.api.user.getUsers();
    console.log(userData);
  }
};
</script>
