<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <section class="image">
    <div class="text-container">
      <div class="title">LET'S TALK ABOUT WORK</div>
      <p class="img-par">
        A wonderful serenity has taken possession far far away, behind the word
        mountains
      </p>
      <a href="#" class="start-button">GET STARTED</a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.image {
  width: 100%;
  height: 400px;
  background-image: url("../assets/img/business-people-working-together-on-project-and-B3MZ4TX.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;

  .text-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      color: white;
      font-size: 30px;
    }

    .img-par {
      color: lightgray;
    }

    .start-button {
      margin-top: 30px;
      text-decoration: none;
      color: white;
      padding: 15px 30px;
      background-color: #1f1e38;
    }
  }
}
</style>
