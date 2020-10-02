<style scoped>
.footer {
  margin-left: auto;
  padding-top: 1em;
}
</style>
<template>
  <p class="footer text-right">
    &copy; Copyright {{ year }} {{ company }} All Rights Reserved.
  </p>
</template>
<script>
export default {
  name: "Footer",
  data: () => {
    return {
      year: new Date().getFullYear(),
      company: "Acme"
    };
  }
};
</script>
