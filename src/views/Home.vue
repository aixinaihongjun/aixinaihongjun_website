<template>
  <div class="home">
    <section data-id="home" class="animated-section start-page no-padding">
      <el-carousel height="100vh">
        <el-carousel-item>
          <div class="carousel-bg2">
            <div class="section-content vcentered">
              <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-12">
                  <div class="title-block">
                    <h2>Alex Smith</h2>
                    <div class="sp-subtitle">Web Designer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="carousel-bg3">
            <div class="section-content vcentered">
              <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-12">
                  <div class="title-block">
                    <h2>Alex Smith</h2>
                    <div class="sp-subtitle">Frontend-developer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
};
</script>
<style>
.carousel-bg2 {
  background: url("../assets/images/bg_2.jpg");
  height: 100%;
}
.carousel-bg3 {
  background: url("../assets/images/bg_3.jpg");
  height: 100%;
}
.no-padding {
  padding: 0 !important;
}
.animated-section {
  /* padding: 0!important; */
  opacity: 1 !important;
  visibility: visible !important;
}
</style>
