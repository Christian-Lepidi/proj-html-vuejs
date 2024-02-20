<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <header class="header">
    <!-- Sezione titolo-->
    <section class="head-title-box">
      <div class="logo">
        <img class="logo-type" src="../assets/img/logotype.png" alt="" />
      </div>
      <div class="title">
        <div class="line"></div>
        <span class="slogan"
          ><strong>ALWAYS THE BEST WAY YOU NEED IT</strong></span
        >
        <div class="big-title">THE BEST BUSINESS CONSULTING</div>
        <div class="button"><a href="#" class="info-btn">READ MORE</a></div>
        <div class="play"></div>
      </div>
    </section>
    <!-- Sezione immagine di testa-->
    <section class="head-image-box">
      <div class="links">
        <a href="#" class="link">HOME</a>
        <a href="#" class="link">ABOUT</a>
        <a href="#" class="link">PROJECTS</a>
        <a href="#" class="link">SERVICE</a>
        <a href="#" class="link">BLOG</a>
        <a href="#" class="link">CONTACT</a>
      </div>
    </section>
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  min-height: 600px;
  background-color: rgb(227, 24, 24);
  display: flex;

  .head-title-box {
    min-height: 600px;
    width: 40%;
    background-color: #1f1e38;
    position: relative;

    .logo {
      width: 45%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .logo-type {
        width: 90px;
      }
    }

    .title {
      width: 100%;
      height: 400px;
      position: absolute;
      top: 30%;
      left: 45%;

      .line {
        height: 2px;
        width: 30px;
        background-color: #39ffbf;
        display: inline-block;
        margin-right: 5px;
      }

      .slogan {
        color: white;
      }

      .big-title {
        color: white;
        font-size: 40px;
        margin-top: 30px;
      }

      .button {
        margin-top: 40px;
        display: inline-block;
      }
      .info-btn {
        padding: 15px 30px;
        text-decoration: none;
        color: #3d3d3d;
        background-color: #39ffbf;
      }

      .info-btn:hover {
        background-color: #f00e2e;
      }
    }
  }

  .head-image-box {
    min-height: 600px;
    width: 60%;
    background-image: url("../assets/img/portrait-of-young-architect-woman-on-meeting-KFZCE3A.jpg");
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: flex-end;

    .links {
      width: 70%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;

      .link {
        text-decoration: none;
        color: lightgray;
      }

      .link:hover {
        color: white;
      }
    }
  }
}
</style>
