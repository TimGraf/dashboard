<template>
  <div class="users">
    <UserList />
  </div>
</template>
<script>
import UserList from "../components/Users/UsersList";

export default {
  name: "Users",
  components: {
    UserList
  }
};
</script>
