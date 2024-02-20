<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <section class="about-us">
    <div class="about-us-img">
      <img
        src="../assets/img/business-people-working-together-on-project-and-5FHSKBL.jpg"
        alt=""
      />
    </div>
    <div class="about-us-text">
      <div class="text-container">
        <div class="line"></div>
        <span class="slogan">ABOUT US</span>
        <div class="big-text">WE MAKE YOUR STRATEGY WORK</div>
        <p class="paragraph">
          When,while lovely valley teams with vapour around meand eridian sun
          strikes the upper impenetrable foliage of my trees,and but a thousand
          unknown plants are notice when I hear the buzz of the little world
          among the stalks, and grow familiar indescribable forms of insects,and
          flies,and I feal the presence of tha Almighty
        </p>
      </div>
    </div>
  </section>
  <section class="under">
    <div class="under-text">
      <div class="text-box">
        <h5 class="h5">WE HELP TO DELIVER THE BUSINESS CASE</h5>
      </div>
      <div class="p-box">
        <p class="p-text">
          When,while lovely valley teams with vapour around meand eridian sun
          strikes the upper impenetrable foliage of my trees,and but a thousand
          unknown plants
        </p>
      </div>
      <div class="link-box">
        <div>
          <a href="#" class="started-link">GET STARTED</a>
        </div>
      </div>
    </div>
    <div class="empty"></div>
  </section>
</template>

<style lang="scss" scoped>
.about-us {
  height: 550px;
  width: 100%;
  display: flex;

  .about-us-img {
    width: 55%;
    height: 550px;
  }

  .about-us-text {
    width: 82%;
    height: 549px;
    background-color: #1f1e38;
    display: flex;
    justify-content: center;
    align-items: center;

    .line {
      height: 2px;
      width: 30px;
      background-color: #39ffbf;
      display: inline-block;
      margin-right: 5px;
      margin-left: 60px;
    }

    .slogan {
      color: white;
    }

    .big-text {
      color: white;
      font-size: 30px;
      margin-top: 30px;
      margin-left: 60px;
    }

    .paragraph {
      color: white;
      margin-left: 60px;
    }
  }
}

.under {
  width: 100%;
  height: 200px;
  display: flex;
  margin-top: -1px;

  .under-text {
    width: 90%;
    height: 200px;
    background-color: #39ffbf;
    display: flex;

    .text-box {
      height: 200px;
      width: 40%;
      display: flex;
      align-items: center;

      .h5 {
        font-size: 30px;
        color: #1f1e38;
        text-align: center;
        margin-left: 40px;
        margin-right: 40px;
      }
    }

    .p-box {
      height: 200px;
      width: 40%;
      display: flex;
      align-items: center;

      .p-text {
        color: #1f1e38;
        text-align: center;
        margin-left: 50px;
        margin-right: 40px;
      }
    }

    .link-box {
      height: 200px;
      width: 20%;
      display: flex;
      align-items: end;
      justify-content: flex-end;
      margin-top: -14px;
      .started-link {
        text-decoration: none;
        color: white;
        padding: 15px 30px;
        background-color: #f81d39;
      }
    }
  }

  .empty {
    width: 10%;
    height: 200px;
    background-color: #1f1e38;
  }
}
</style>
