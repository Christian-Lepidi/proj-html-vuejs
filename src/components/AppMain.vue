<script>
import AppDescription from "./AppDescription.vue";
import AppAboutUs from "./AppAboutUs.vue";
import AppProjects from "./AppProjects.vue";

export default {
  data() {
    return {};
  },
  components: { AppDescription, AppAboutUs, AppProjects },
};
</script>

<template>
  <app-description />
  <app-about-us />
  <app-projects />
</template>

<style lang="scss" scoped></style>
