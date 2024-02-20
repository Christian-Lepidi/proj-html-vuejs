<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <section class="description">
    <div class="consultans">
      <span><strong>OUR CONSULTANS CAN HELP YOU</strong></span>
      <div class="line"></div>
    </div>
    <div class="actions">
      <div class="column left">
        <div class="part">
          <div>
            <i class="fas fa-chart-line fa-2x icons"></i>
            <span><strong>STATISTICAL CONSULTING</strong></span>
            <div>
              <p>
                When,while lovely valley teams with vapour around meand eridian
                sun strikes the upper impenetrable foliage of my trees,
              </p>
            </div>
          </div>
        </div>
        <div class="part">
          <div>
            <i class="far fa-folder fa-2x icons"></i>
            <span><strong>BANKING CONSULTING</strong></span>
            <div>
              <p>
                When,while lovely valley teams with vapour around meand eridian
                sun strikes the upper impenetrable foliage of my trees,
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="column right">
        <div class="part">
          <div>
            <i class="fas fa-bullhorn fa-2x icons"></i>
            <span><strong>DIGITAL CONSULTING</strong></span>
            <div>
              <p>
                When,while lovely valley teams with vapour around meand eridian
                sun strikes the upper impenetrable foliage of my trees,
              </p>
            </div>
          </div>
        </div>
        <div class="part">
          <div>
            <i class="fas fa-bullseye fa-2x icons"></i>
            <span><strong>ENTERPRISE CONSULTING</strong></span>
            <div>
              <p>
                When,while lovely valley teams with vapour around meand eridian
                sun strikes the upper impenetrable foliage of my trees,
              </p>
            </div>
          </div>
        </div>
      </div>
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
    display: flex;
    align-items: end;
    gap: 39px;
  }

  .line {
    height: 2px;
    width: 72%;
    background-color: #39ffbf;
  }

  .actions {
    width: 40%;
    height: 400px;
    margin: auto;
    display: flex;

    .column {
      width: 50%;
      height: 400px;
      display: flex;
      flex-direction: column;

      .part {
        width: 100%;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .icons {
        color: white;
        background-color: #f81d39;
        padding: 10px;
        border-radius: 50%;
      }
    }
  }
}
</style>
