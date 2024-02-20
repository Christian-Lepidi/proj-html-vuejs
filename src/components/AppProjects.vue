<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <section class="main-container">
    <div class="upper-container">
      <div class="text-box">
        <div>
          <div class="line"></div>
          <span class="slogan">PROJECTS</span>
          <div class="big-text">OUR EXPERT TRUSTED CONSULTANS HELP CLIENT</div>
        </div>
      </div>
      <div class="arrows-box">
        <div>
          <i class="fas fa-arrow-left arrows"></i>
          <i class="fas fa-arrow-right arrows"></i>
        </div>
      </div>
    </div>
    <div class="card-container">
      <div class="card">
        <img src="../assets/img/DRY-1-790x592.jpg" alt="" />
      </div>
      <div class="card">
        <img
          src="../assets/img/221bf0b7-8134-43bb-936a-5acbe42db64a-790x592.jpg"
          alt=""
        />
      </div>
      <div class="card">
        <img src="../assets/img/z1el4c4p-790x592.jpg" alt="" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.main-container {
  width: 100%;
  height: 650px;
  background-color: #1f1e38;

  .upper-container {
    width: 80%;
    height: 250px;
    margin: auto;
    display: flex;

    .text-box {
      width: 50%;
      height: 250px;
      display: flex;
      align-items: center;

      .line {
        height: 2px;
        width: 30px;
        background-color: #39ffbf;
        display: inline-block;
      }

      .slogan {
        color: white;
        margin-left: 15px;
      }

      .big-text {
        color: white;
        font-size: 30px;
      }
    }

    .arrows-box {
      width: 50%;
      height: 250px;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .arrows {
        color: white;
        background-color: #333333;
        padding: 10px;
      }

      .fa-arrow-right {
        margin-left: 4px;
      }
    }
  }

  .card-container {
    width: 80%;
    height: 350px;
    margin: auto;
    display: flex;
    gap: 10px;

    .card {
      height: 350px;
      width: calc(100% / 3 - 10px);
    }
  }
}
</style>
