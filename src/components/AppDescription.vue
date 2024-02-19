<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <section class="description">
    <div class="consultans"></div>
    <div class="actions">
      <div class="column left"></div>
      <div class="column right"></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.description {
  width: 100%;
  height: 600px;

  .consultans {
    width: 70%;
    height: 90px;
    margin-left: 30%;
    background-color: coral;
  }

  .actions {
    width: 40%;
    height: 400px;
    margin: auto;
    display: flex;

    .column {
      width: 50%;
      height: 400px;
    }
    .left {
      background-color: orange;
    }
    .right {
      background-color: aquamarine;
    }
  }
}
</style>
