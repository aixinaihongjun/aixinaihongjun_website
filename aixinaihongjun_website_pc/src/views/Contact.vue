<template>
  <div class="contact-components">
    <section data-id="contact" class="animated-section">
      <div class="page-title">
        <h2>Contact</h2>
      </div>

      <div class="section-content">
        <div class="row">
          <!-- Contact Info -->
          <div class="col-xs-12 col-sm-4">
            <div class="lm-info-block gray-default">
              <span class="iconfont">&#xe60e;</span>
              <h4>Harbin</h4>
              <span class="lm-info-block-value"></span>
              <span class="lm-info-block-text"></span>
            </div>

            <div class="lm-info-block gray-default">
              <span class="iconfont">&#xe660;</span>
              <h4>155-4610-0773</h4>
              <span class="lm-info-block-value"></span>
              <span class="lm-info-block-text"></span>
            </div>

            <div class="lm-info-block gray-default">
              <span class="iconfont">&#xe64f;</span>
              <h4>aixinaihongjun@gmail.com</h4>
              <span class="lm-info-block-value"></span>
              <span class="lm-info-block-text"></span>
            </div>

            <div class="lm-info-block gray-default">
              <span class="iconfont">&#xe614;</span>
              <h4>Freelance Available</h4>
              <span class="lm-info-block-value"></span>
              <span class="lm-info-block-text"></span>
            </div>
          </div>
          <!-- End of Contact Info -->

          <!-- Contact Form -->
          <div class="col-xs-12 col-sm-8">
            <div class="map">
              <baidu-map
                :center="center"
                :zoom="zoom"
                :scroll-wheel-zoom="true"
                style="height: 140px"
                @ready="handler"
                @click="getClickInfo"
              >
                <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
                <bm-geolocation
                  anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
                  :showAddressBar="true"
                  :autoLocation="true"
                ></bm-geolocation>
                <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
              </baidu-map>
            </div>
            <div class="block-title">
              <h3>How Can I <span>Help You?</span></h3>
            </div>

            <div class="controls two-columns">
              <div class="fields clearfix">
                <div class="left-column">
                  <div class="form-group form-group-with-icon">
                    <div class="contact-form-title">Full Name</div>
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder=""
                      required="required"
                      data-error="Name is required."
                      v-model="contact_full_name"
                    />
                    <!-- <label>Full Name</label> -->
                    <div class="form-control-border"></div>
                    <div class="help-block with-errors"></div>
                  </div>

                  <div class="form-group form-group-with-icon">
                    <div class="contact-form-title">Email Address</div>
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      class="form-control"
                      placeholder=""
                      required="required"
                      data-error="Valid email is required."
                      v-model="contact_email"
                    />
                    <div class="form-control-border"></div>
                    <div class="help-block with-errors"></div>
                  </div>

                  <div class="form-group form-group-with-icon">
                    <div class="contact-form-title">Subject</div>
                    <input
                      id="form_subject"
                      type="text"
                      name="subject"
                      class="form-control"
                      placeholder=""
                      required="required"
                      data-error="Subject is required."
                      v-model="contact_subject"
                    />
                    <div class="form-control-border"></div>
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
                <div class="right-column">
                  <div class="form-group form-group-with-icon">
                    <div class="contact-form-title">Message</div>
                    <textarea
                      id="form_message"
                      name="message"
                      class="form-control"
                      placeholder=""
                      rows="7"
                      required="required"
                      data-error="Please, leave me a message."
                      v-model="contact_message"
                    ></textarea>
                    <div class="form-control-border"></div>
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
              </div>

              <div
                class="g-recaptcha"
                data-sitekey="6LdqmCAUAAAAAMMNEZvn6g4W5e0or2sZmAVpxVqI"
                data-theme="dark"
              ></div>

              <input
                type="button"
                @click="postContact"
                class="button btn-send"
                value="Send message"
              />
            </div>
          </div>
          <!-- End of Contact Form -->
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import http from "@/utils/http.js";
export default {
  name: "Contact",
  data() {
    return {
      center: { lng: 0, lat: 0 }, //经纬度
      zoom: 13, //地图展示级别
      contact_full_name: "",
      contact_email: "",
      contact_subject: "",
      contact_message: "",
    };
  },
  methods: {
    handler({ BMap, map }) {
      this.zoom = this.zoom;
      let self = this;

      //关键词定位
      map.centerAndZoom("哈尔滨", 10);
    },
    getClickInfo(e) {
      this.center.lng = e.point.lng;
      this.center.lat = e.point.lat;
    },
    postContact() {
      http
        .post("/postContact", {
          full_name: this.contact_full_name,
          email: this.contact_email,
          subject: this.contact_subject,
          message: this.contact_message,
        })
        .then((res) => {
          let { state } = res.data;
          if (state == "success") {
            alert("留言成功!");
            this.contact_full_name = "";
            this.contact_email = "";
            this.contact_subject = "";
            this.contact_message = "";
          } else {
            alert("留言失败！");
          }
        });
    },
  },
};
</script>
<style>
.lm-info-block .iconfont {
  font-size: 33px;
  color: #04b4e0;
}
.btn-send {
  cursor: pointer;
}
.contact-form-title {
  font-size: 13px;
  /* color: #04b4e0; */
}
</style>
