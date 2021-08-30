<template>
  <div class="home">
    <div class="page">
      <div class="page-content">
        <Nav></Nav>
        <div class="content-area">
          <div class="animated-sections">
            <!-- Home Subpage -->
            <section data-id="home" class="animated-section start-page">
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
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
export default {
  name: "Home",
  components: {
    Nav,
  },
};
</script>
<style>
.animated-section {
  opacity: 1 !important;
  visibility: visible !important;
}
</style>
