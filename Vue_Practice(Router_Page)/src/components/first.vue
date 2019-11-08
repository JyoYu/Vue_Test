<template>
  <div>
    <router-link to="/A">To Page A</router-link>&nbsp;/
    <router-link to="/B">To Page B</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "First"
};
</script>