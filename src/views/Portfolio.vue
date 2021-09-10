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
              <ul class="portfolio-filters">
                <li
                  v-for="category in categories"
                  :key="category.id"
                  @click="clickActive(category), getCategoryGroup(category.data_group)"
                  :class="{ active: category.isActive }"
                >
                  <a
                    class="filter btn btn-sm btn-link"
                    :data-group="category.data_group"
                    >{{ category.name }}</a
                  >
                </li>
              </ul>
              <!-- Portfolio Grid -->
              <div class="portfolio-grid three-columns">
                <figure
                  v-for="photo in photos"
                  :key="photo.id"
                  class="item lbaudio"
                  :class="{ display_category: photo.show }"
                  :data-groups="photo.data_group"
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
                  width="90%"
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
      categories: [
        { id: 1, data_group: "category_all", name: "All", isActive: false },
        { id: 2, data_group: "category_detailed", name: "Detailed", isActive: false },
        { id: 3, data_group: "category_mockups", name: "Mockups", isActive: false },
        { id: 4, data_group: "category_soundcloud", name: "SoundCloud", isActive: false },
        {
          id: 5,
          data_group: "category_vimeo-videos",
          name: "Vimeo Videos",
          isActive: false,
        },
        {
          id: 6,
          data_group: "category_youtube-videos",
          name: "YouTube Videos",
          isActive: false,
        },
      ],
      photos: [
        {
          id: 1,
          url: require("../assets/images/portfolio-1.jpg"),
          title: "SoundCloud Audio",
          category: "SoundCloud",
          data_group: '["category_all", "category_soundcloud"]',
          show: false,
        },
        {
          id: 2,
          url: require("../assets/images/portfolio-2.jpg"),
          title: "Detailed Project 2",
          category: "Detailed",
          data_group: '["category_all", "category_detailed"]',
          show: false,
        },
        {
          id: 3,
          url: require("../assets/images/portfolio-3.jpg"),
          title: "Vimeo Video 1",
          category: "Vimeo Videos",
          data_group: '["category_all", "category_vimeo-videos"]',
          show: false,
        },
        {
          id: 4,
          url: require("../assets/images/portfolio-4.jpg"),
          title: "Detailed Project 1",
          category: "Detailed",
          data_group: '["category_all", "category_detailed"]',
          show: false,
        },
        {
          id: 5,
          url: require("../assets/images/portfolio-5.jpg"),
          title: "Mockup Design 1",
          category: "Mockups",
          data_group: '["category_all", "category_mockups"]',
          show: false,
        },
        {
          id: 6,
          url: require("../assets/images/portfolio-6.jpg"),
          title: "YouTube Video 1",
          category: "YouTube Videos",
          data_group: '["category_all", "category_youtube-videos"]',
          show: false,
        },
      ],
      photoDetail: {},
    };
  },
  methods: {
    getPhotoDetail(p) {
      this.photoDetail = p;
    },
    clickActive(category) {
      this.categories.forEach((item) => {
        item.isActive = false;
      });
      category.isActive = true;
    },
    getCategoryGroup(group) {
      this.photos.forEach((item) => {
        item.show = false;
        if (!item.data_group.includes(group)) {
          item.show = true;
        }
      });
    },
  },
};
</script>
<style>
.display_category {
  display: none;
}
</style>
