<template>
  <div class="blog-components">
    <section data-id="blog" class="animated-section">
      <div class="page-title">
        <h2>Blog</h2>
      </div>

      <div class="section-content">
        <div class="row">
          <div class="col-xs-12 col-sm-12">
            <div class="blog-masonry two-columns clearfix">
              <div class="item post-1" v-for="article in articles" :key="article.id">
                <div class="blog-card">
                  <div class="media-block">
                    <div class="category">
                      <a href="#" :title="article.a_title">{{ article.category }}</a>
                    </div>
                    <router-link :to="{ path: '/blog/' + article.id }">
                      <img
                        :src="getImgUrl(article.cover)"
                        class="size-blog-masonry-image-two-c"
                        alt="Why I Switched to Sketch For UI Design"
                        title=""
                      />
                      <div class="mask"></div>
                    </router-link>
                  </div>
                  <div class="post-info">
                    <div class="post-date">
                      {{ article.date | dateFormat("YYYY-mm-dd") }}
                    </div>
                    <router-link :to="{ path: '/blog/' + article.id }">
                      <h4 class="blog-item-title">
                        {{ article.title }}
                      </h4>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import http from "@/utils/http.js";
import myMixin from "@/utils/mixin.js";
export default {
  name: "Blog",
  mixins: [myMixin],
  data() {
    return {
      articles: [],
    };
  },
  methods: {
    getArticles() {
      http.get("/getArticleList").then((res) => {
        this.articles = res.data;
      });
    },
  },
  created() {
    this.getArticles();
  },
};
</script>
