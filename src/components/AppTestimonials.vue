<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <section class="testimonials-container">
    <div class="head-title-line-cont">
      <div class="empty"></div>
      <div class="title-box">
        <span class="title">TESTIMONIALS</span>
      </div>
      <div class="line-box">
        <div class="line"></div>
      </div>
    </div>
    <div class="big-text-container">
      <div class="empty-box"></div>
      <div class="text-box">
        <h5 class="h5">WHAT'S THE CUSTOMER SAY ABOUT OUR WORK</h5>
      </div>
    </div>
    <div class="reviews-container">
      <div class="reviews">
        <p>
          When,while lovely valley teams with vapour around meand eridian sun
          strikes the upper impenetrable foliage of my trees,and but a thousand
          unknown plants are notice when I hear the buzz of the little
        </p>
        <h5 class="testimonial-name">Vera Duncan</h5>
        <div class="rule">Amazon Inc.</div>
      </div>
      <div class="reviews">
        <p>
          When,while lovely valley teams with vapour around meand eridian sun
          strikes the upper impenetrable foliage of my trees,and but a thousand
          unknown plants are notice when I hear the buzz of the little
        </p>
        <h5 class="testimonial-name">Vera Duncan</h5>
        <div class="rule">Amazon Inc.</div>
      </div>
      <div class="reviews">
        <p>
          When,while lovely valley teams with vapour around meand eridian sun
          strikes the upper impenetrable foliage of my trees,and but a thousand
          unknown plants are notice when I hear the buzz of the little
        </p>
        <h5 class="testimonial-name">Vera Duncan</h5>
        <div class="rule">Amazon Inc.</div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.testimonials-container {
  width: 100%;
  height: 600px;
  background-color: #1f1e38;

  .head-title-line-cont {
    width: 80%;
    margin: auto;
    display: flex;

    .empty {
      width: calc(100% / 3);
    }

    .title-box {
      width: calc(100% / 3);
      display: flex;
      justify-content: center;

      .title {
        color: white;
      }
    }

    .line-box {
      width: calc(100% / 3);
      display: flex;
      align-items: flex-end;
      justify-content: end;

      .line {
        height: 2px;
        width: 30px;
        background-color: #39ffbf;
      }
    }
  }

  .big-text-container {
    width: 80%;
    margin: auto;
    display: flex;

    .empty-box {
      width: 60%;
    }

    .text-box {
      width: 40%;

      .h5 {
        color: white;
        font-size: 30px;
        margin-top: 20px;
      }
    }
  }

  .reviews-container {
    width: 90%;
    height: 350px;
    margin-top: 40px;
    margin-left: 10%;
    background-color: #ffffff;
    display: flex;

    .reviews {
      width: calc(100% / 3 - 20px);
      height: 400px;
      padding: 50px;
    }

    p {
      color: #1f1e38;
    }

    .testimonial-name {
      color: #1f1e38;
      margin-top: 60px;
      font-size: 19px;
    }

    .rule {
      margin-top: 25px;
    }
  }
}
</style>
