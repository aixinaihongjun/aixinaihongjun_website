<template>
  <div class="portfolio-components">
    <section data-id="portfolio" class="animated-section">
      <div class="page-title">
        <h2>Portfolio</h2>
      </div>

      <div class="section-content">
        <div class="row">
          <div class="col-xs-12 col-sm-12">
            <!-- Portfolio Content -->
            <div class="portfolio-content">

              <!-- Portfolio Grid -->
              <div class="portfolio-grid three-columns">
                <figure
                  v-for="photo in photos"
                  :key="photo.id"
                  class="item lbaudio"
                  data-groups='["category_all"]'
                >
                  <div class="portfolio-item-img">
                    <img :src="photo.url" :alt="photo.title" title="" />
                    <a
                      @click="(dialogVisible = true), getPhotoDetail(photo)"
                      class="lightbox mfp-iframe"
                      :title="photo.title"
                    ></a>
                  </div>

                  <h4 class="name">{{ photo.title }}</h4>
                  <span class="category">{{ photo.category }}</span>
                </figure>
                <el-dialog
                  :title="photoDetail.title"
                  :visible.sync="dialogVisible"
                  width="50%"
                  :before-close="handleClose"
                  :modal-append-to-body="false"
                  :append-to-body="true"
                >
                  <span>
                    <img
                      :src="photoDetail.url"
                      :alt="photoDetail.title"
                      style="width: 100%"
                    />
                  </span>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false"
                      >确 定</el-button
                    >
                  </span>
                </el-dialog>
              </div>
            </div>
            <!-- End of Portfolio Content -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Portfolio",
  data() {
    return {
      dialogVisible: false,
      photos: [
        {
          id: 1,
          url: require("../assets/images/portfolio-1.jpg"),
          title: "SoundCloud Audio",
          category: "SoundCloud",
          data_group: "category_soundcloud",
        },
        {
          id: 2,
          url: require("../assets/images/portfolio-2.jpg"),
          title: "Detailed Project 2",
          category: "Detailed",
        },
        {
          id: 3,
          url: require("../assets/images/portfolio-3.jpg"),
          title: "Vimeo Video 1",
          category: "Vimeo Videos",
        },
        {
          id: 4,
          url: require("../assets/images/portfolio-4.jpg"),
          title: "Detailed Project 1",
          category: "Detailed",
        },
        {
          id: 5,
          url: require("../assets/images/portfolio-5.jpg"),
          title: "Mockup Design 1",
          category: "Mockups",
        },
        {
          id: 6,
          url: require("../assets/images/portfolio-6.jpg"),
          title: "YouTube Video 1",
          category: "YouTube Videos",
        },
      ],
      photoDetail: {},
    };
  },
  methods: {
    getPhotoDetail(p) {
      this.photoDetail = p;
    },
  },
};
</script>
