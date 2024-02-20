<script>
import AppDescription from "./AppDescription.vue";
import AppAboutUs from "./AppAboutUs.vue";
import AppProjects from "./AppProjects.vue";
import AppTestimonials from "./AppTestimonials.vue";
import AppBlog from "./AppBlog.vue";

export default {
  data() {
    return {};
  },
  components: {
    AppDescription,
    AppAboutUs,
    AppProjects,
    AppTestimonials,
    AppBlog,
  },
};
</script>

<template>
  <app-description />
  <app-about-us />
  <app-projects />
  <app-testimonials />
  <app-blog />
</template>

<style lang="scss" scoped></style>
