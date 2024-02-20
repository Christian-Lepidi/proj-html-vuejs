<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <!--Prima parte Footer-->
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
  <!--Seconda parte Footer-->
  <section class="footer">
    <div class="contents-container">
      <div class="contents-box">
        <div class="logo">
          <img
            src="../assets/img/logotype-2-150x25.png"
            alt=""
            class="logo-type"
          />
        </div>
        <div class="links">
          <a href="#" class="link">HOME</a>
          <a href="#" class="link">ABOUT</a>
          <a href="#" class="link">PROJECTS</a>
          <a href="#" class="link">SERVICE</a>
          <a href="#" class="link">BLOG</a>
          <a href="#" class="link">CONTACT</a>
        </div>
        <div class="social-icons">
          <i class="fab fa-instagram"></i>
          <i class="fab fa-linkedin-in"></i>
          <i class="fab fa-facebook-square"></i>
          <i class="fab fa-twitter"></i>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="last-contents-box">
      <div class="conditions"></div>
      <div class="copyright-chat-box"></div>
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

.footer {
  width: 100%;
  height: 260px;
  background-color: #1f1e38;

  .contents-container {
    width: 80%;
    height: 160px;
    margin: auto;

    .contents-box {
      width: 100%;
      height: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .logo-type {
        width: 90px;
      }

      .link {
        text-decoration: none;
        color: lightgrey;
        margin: 0 10px;
      }

      .fab {
        color: white;
        margin: 0 20px;
      }
    }
  }

  .line {
    height: 2px;
    width: 80%;
    margin: auto;
    background-color: lightgray;
  }

  .last-contents-box {
    width: 90%;
    height: 90px;
    margin-left: 10%;
    background-color: aquamarine;
    display: flex;
    justify-content: space-between;

    .conditions {
      width: 15%;
      height: 90px;
      background-color: lightcoral;
    }

    .copyright-chat-box {
      width: 30%;
      height: 90px;
      background-color: yellow;
    }
  }
}
</style>
