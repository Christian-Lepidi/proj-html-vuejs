<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <section class="blog">
    <div class="container-head">
      <div class="line"></div>
      <span class="head-text">BLOG</span>
    </div>
    <div class="container-title-button">
      <div class="big-text">THE RECENT NEWS YOU MUST READ IT</div>
      <a href="#" class="info-btn">VIEW ALL</a>
    </div>
    <div class="card-container">
      <div class="card left">
        <div class="news">
          <div>
            <span class="date">4 July 2019</span>
            <span class="author"> by Paul</span>
          </div>
          <div class="news-title">
            Canadian Consulting Firm acquired by UK Giant
          </div>
          <p class="p-news">
            When,while lovely valley teams with vapour around meand eridian sun
            strikes the upper impenetrable foliage of my trees,and but a
          </p>
        </div>
      </div>
      <div class="card right">
        <div class="news">
          <div>
            <span class="date">4 July 2019</span>
            <span class="author"> by Paul</span>
          </div>
          <div class="news-title">
            Canadian Consulting Firm acquired by UK Giant
          </div>
          <p class="p-news">
            When,while lovely valley teams with vapour around meand eridian sun
            strikes the upper impenetrable foliage of my trees,and but a
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.blog {
  width: 100%;
  height: 650px;
  background-color: #1f1e38;

  .container-head {
    width: 80%;
    margin: auto;

    .line {
      height: 2px;
      width: 30px;
      background-color: #39ffbf;
      display: inline-block;
    }

    .head-text {
      color: white;
      margin-left: 15px;
    }
  }

  .container-title-button {
    width: 80%;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;

    .big-text {
      color: white;
      font-size: 30px;
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

  .card-container {
    width: 80%;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    display: flex;

    .card {
      width: calc(100% / 2 - 10px);
      height: 400px;
      position: relative;

      .news {
        width: 70%;
        height: 220px;
        background-color: white;
        padding: 50px;
        position: absolute;
        right: 0;
        top: 240px;

        .date {
          color: #f00e2e;
          margin-right: 15px;
        }
        .author {
          color: #f00e2e;
        }

        .news-title {
          margin-top: 15px;
          font-size: 25px;
        }

        .p-news {
          color: #3d3d3d;
          margin-top: 15px;
        }
      }

      .news:hover {
        background-color: #39ffbf;
      }
    }
    .left {
      margin-right: 10px;
      background-image: url("../assets/img/startup-business-people-and-strategy-board-PAJ3P9K-1390x1042.jpg");
      background-size: cover;
      background-position: center;
    }
    .right {
      margin-left: 10px;
      background-image: url("../assets/img/business-people-working-together-on-project-and-5FHSKBL-1390.jpg");
      background-size: cover;
      background-position: center;
    }
  }
}
</style>
