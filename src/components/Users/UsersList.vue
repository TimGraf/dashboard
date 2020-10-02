<style scoped>
.avatar {
  margin: 0.5em;
}
</style>
<template>
  <v-container fluid>
    <v-data-table
      dense
      :headers="headers"
      :items="users"
      :page.sync="page"
      :footer-props="footerProps"
      class="elevation-1"
      :server-items-length="total"
    >
      <template v-slot:[`item.avatar`]="{ item }">
        <v-avatar class="avatar">
          <img :src="item.avatar" alt="Avatar" />
        </v-avatar>
      </template>
    </v-data-table>
  </v-container>
</template>
<script>
export default {
  name: "UsersList",
  data: () => {
    return {
      users: [],
      page: 1,
      pageCount: 0,
      total: 0,
      itemsPerPage: 5,
      footerProps: {
        "items-per-page-options": [6]
      },
      headers: [
        { text: "Avatar", value: "avatar" },
        { text: "Name", align: "start", sortable: false, value: "name" },
        { text: "Email", value: "email" }
      ]
    };
  },
  mounted: async function() {
    await this.fetchUserData();
  },
  watch: {
    page: function(oldVal, val) {
      this.fetchUserData();
    }
  },
  methods: {
    async fetchUserData() {
      const userData = await this.api.user.getUsers(
        this.page,
        this.itemsPerPage
      );
      this.users = userData.data.data.map(user => {
        return {
          ...user,
          name: `${user.first_name} ${user.last_name}`
        };
      });
      this.page = userData.data.page;
      this.itemsPerPage = userData.data.per_page;
      this.pageCount = userData.data.total_pages;
      this.total = userData.data.total;
    }
  }
};
</script>
