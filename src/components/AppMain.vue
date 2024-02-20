<script>
import AppDescription from "./AppDescription.vue";
import AppAboutUs from "./AppAboutUs.vue";
import AppProjects from "./AppProjects.vue";
import AppTestimonials from "./AppTestimonials.vue";

export default {
  data() {
    return {};
  },
  components: { AppDescription, AppAboutUs, AppProjects, AppTestimonials },
};
</script>

<template>
  <app-description />
  <app-about-us />
  <app-projects />
  <app-testimonials />
</template>

<style lang="scss" scoped></style>
