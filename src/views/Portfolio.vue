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
                <li class="active">
                  <a class="filter btn btn-sm btn-link" data-group="category_all">All</a>
                </li>
                <li>
                  <a class="filter btn btn-sm btn-link" data-group="category_detailed"
                    >Detailed</a
                  >
                </li>
                <li>
                  <a class="filter btn btn-sm btn-link" data-group="category_mockups"
                    >Mockups</a
                  >
                </li>
                <li>
                  <a class="filter btn btn-sm btn-link" data-group="category_soundcloud"
                    >SoundCloud</a
                  >
                </li>
                <li>
                  <a class="filter btn btn-sm btn-link" data-group="category_vimeo-videos"
                    >Vimeo Videos</a
                  >
                </li>
                <li>
                  <a
                    class="filter btn btn-sm btn-link"
                    data-group="category_youtube-videos"
                    >YouTube Videos</a
                  >
                </li>
              </ul>

              <!-- Portfolio Grid -->
              <div class="portfolio-grid three-columns">
                <figure
                  class="item lbaudio"
                  data-groups='["category_all", "category_soundcloud"]'
                >
                  <div class="portfolio-item-img">
                    <img
                      src="../assets/images/portfolio-1.jpg"
                      alt="SoundCloud Audio"
                      title=""
                    />
                    <a
                      @click="dialogVisible = true"
                      class="lightbox mfp-iframe"
                      title="SoundCloud Audio"
                    ></a>
                    <el-dialog
                      title="提示"
                      :visible.sync="dialogVisible"
                      width="80%"
                      :before-close="handleClose"
                      :modal-append-to-body="false"
                    >
                      <span>
                        <img src="../assets/images/portfolio-1.jpg" alt="" style="width:100%">
                      </span>
                      <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="dialogVisible = false"
                          >确 定</el-button
                        >
                      </span>
                    </el-dialog>
                  </div>

                  <h4 class="name">SoundCloud Audio</h4>
                  <span class="category">SoundCloud</span>
                </figure>

                <figure
                  class="item lbaudio"
                  data-groups='["category_all", "category_soundcloud"]'
                >
                  <div class="portfolio-item-img">
                    <img
                      src="../assets/images/portfolio-2.jpg"
                      alt="SoundCloud Audio"
                      title=""
                    />
                    <a
                      @click="dialogVisible = true"
                      class="lightbox mfp-iframe"
                      title="SoundCloud Audio"
                    ></a>
                    <el-dialog
                      title="提示"
                      :visible.sync="dialogVisible"
                      width="80%"
                      :before-close="handleClose"
                      :modal-append-to-body="false"
                    >
                      <span>
                        <img src="../assets/images/portfolio-2.jpg" alt="" style="width:100%">
                      </span>
                      <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="dialogVisible = false"
                          >确 定</el-button
                        >
                      </span>
                    </el-dialog>
                  </div>

                  <h4 class="name">SoundCloud Audio</h4>
                  <span class="category">SoundCloud</span>
                </figure>

                <figure
                  class="item lbaudio"
                  data-groups='["category_all", "category_soundcloud"]'
                >
                  <div class="portfolio-item-img">
                    <img
                      src="../assets/images/portfolio-3.jpg"
                      alt="SoundCloud Audio"
                      title=""
                    />
                    <a
                      @click="dialogVisible = true"
                      class="lightbox mfp-iframe"
                      title="SoundCloud Audio"
                    ></a>
                    <el-dialog
                      title="提示"
                      :visible.sync="dialogVisible"
                      width="80%"
                      :before-close="handleClose"
                      :modal-append-to-body="false"
                    >
                      <span>
                        <img src="../assets/images/portfolio-3.jpg" alt="" style="width:100%">
                      </span>
                      <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="dialogVisible = false"
                          >确 定</el-button
                        >
                      </span>
                    </el-dialog>
                  </div>

                  <h4 class="name">SoundCloud Audio</h4>
                  <span class="category">SoundCloud</span>
                </figure>

                <figure
                  class="item lbaudio"
                  data-groups='["category_all", "category_soundcloud"]'
                >
                  <div class="portfolio-item-img">
                    <img
                      src="../assets/images/portfolio-4.jpg"
                      alt="SoundCloud Audio"
                      title=""
                    />
                    <a
                      @click="dialogVisible = true"
                      class="lightbox mfp-iframe"
                      title="SoundCloud Audio"
                    ></a>
                    <el-dialog
                      title="提示"
                      :visible.sync="dialogVisible"
                      width="80%"
                      :before-close="handleClose"
                      :modal-append-to-body="false"
                    >
                      <span>
                        <img src="../assets/images/portfolio-4.jpg" alt="" style="width:100%">
                      </span>
                      <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="dialogVisible = false"
                          >确 定</el-button
                        >
                      </span>
                    </el-dialog>
                  </div>

                  <h4 class="name">SoundCloud Audio</h4>
                  <span class="category">SoundCloud</span>
                </figure>

                <figure
                  class="item lbaudio"
                  data-groups='["category_all", "category_soundcloud"]'
                >
                  <div class="portfolio-item-img">
                    <img
                      src="../assets/images/portfolio-5.jpg"
                      alt="SoundCloud Audio"
                      title=""
                    />
                    <a
                      @click="dialogVisible = true"
                      class="lightbox mfp-iframe"
                      title="SoundCloud Audio"
                    ></a>
                    <el-dialog
                      title="提示"
                      :visible.sync="dialogVisible"
                      width="80%"
                      :before-close="handleClose"
                      :modal-append-to-body="false"
                    >
                      <span>
                        <img src="../assets/images/portfolio-5.jpg" alt="" style="width:100%">
                      </span>
                      <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="dialogVisible = false"
                          >确 定</el-button
                        >
                      </span>
                    </el-dialog>
                  </div>

                  <h4 class="name">SoundCloud Audio</h4>
                  <span class="category">SoundCloud</span>
                </figure>

                <figure
                  class="item lbaudio"
                  data-groups='["category_all", "category_soundcloud"]'
                >
                  <div class="portfolio-item-img">
                    <img
                      src="../assets/images/portfolio-6.jpg"
                      alt="SoundCloud Audio"
                      title=""
                    />
                    <a
                      @click="dialogVisible = true"
                      class="lightbox mfp-iframe"
                      title="SoundCloud Audio"
                    ></a>
                    <el-dialog
                      title="提示"
                      :visible.sync="dialogVisible"
                      width="80%"
                      :before-close="handleClose"
                      :modal-append-to-body="false"
                    >
                      <span>
                        <img src="../assets/images/portfolio-6.jpg" alt="" style="width:100%">
                      </span>
                      <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="dialogVisible = false"
                          >确 定</el-button
                        >
                      </span>
                    </el-dialog>
                  </div>

                  <h4 class="name">SoundCloud Audio</h4>
                  <span class="category">SoundCloud</span>
                </figure>

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
        dialogVisible: false
      };
    },
    methods: {
      
    }
};
</script>
