<template>
  <div class="single">
    <!-- Arrows Nav -->
    <div class="return_btn">
      <button class="btn btn-primary" @click="returnBlog">返回</button>
    </div>
    <!-- End Arrows Nav -->
    <section data-id="single" class="animated-section no_padding">
      <div class="single-page-content">
        <div class="post-thumbnail">
          <img :src="article.cover" alt="image" style="width: 100%" />
        </div>

        <div class="post-content">
          <!-- /Entry header -->
          <header class="entry-header">
            <!-- Entry meta -->
            <div class="entry-meta entry-meta-top">
              <span
                ><a href="#" rel="category tag">{{ article.category }}</a></span
              >
            </div>
            <!-- /Entry meta -->

            <h2 class="entry-title">{{ article.title }}</h2>
          </header>
          <!-- /Entry header -->

          <!-- Entry content -->
          <div class="entry-content">
            <div class="row">
              <div class="col-xs-12 col-sm-12">
                <div class="col-inner">
                  <p class="content_mb">
                    {{ article.content1 }}
                  </p>
                  <p class="content_mb">
                    {{ article.content2 }}
                  </p>

                  <blockquote
                    class="quote"
                    v-for="quote in article.quote"
                    :key="quote.content"
                  >
                    {{ quote.content }}
                    <footer class="quote-author">
                      <span>{{ quote.author }}</span>
                    </footer>
                  </blockquote>

                  <p class="content_mb">
                    {{ article.content3 }}
                  </p>

                  <p class="content_mb">
                    {{ article.content4 }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- /Entry content -->

          <div class="entry-meta entry-meta-bottom">
            <div class="date-author">
              <span class="entry-date">
                <a href="#" rel="bookmark">
                  <span class="iconfont">&#xe680;</span>
                  <span class="entry-date"> {{ article.date }}</span>
                </a>
              </span>
              <span class="author vcard">
                <a class="url fn n" href="#" rel="author">
                  <span class="iconfont">&#xe82f;</span> LMPixels</a
                >
              </span>
            </div>

            <!-- Share Buttons -->
            <div class="entry-share btn-group share-buttons">
              <a
                href="#"
                onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;"
                class="btn"
                target="_blank"
                title="Share on Facebook"
              >
                <span class="iconfont">&#xe6b2;</span>
              </a>

              <a
                href="#"
                onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;"
                class="btn"
                target="_blank"
                title="Share on Twitter"
              >
                <span class="iconfont">&#xe916;</span>
              </a>

              <a
                href="#"
                onclick="javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;"
                class="btn"
                title="Share on LinkedIn"
              >
                <span class="iconfont">&#xe63e;</span>
              </a>
            </div>
            <!-- /Share Buttons -->
          </div>

          <div class="post-tags">
            <div class="tags">
              <a href="#" rel="tag" v-for="tag in article.tags" :key="tag">{{ tag }}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Single",
  created() {
    let articleId = this.$route.params.articleId;
    this.getArticleDetail(articleId);
  },
  data() {
    return {
      article: {},
      articles: [
        {
          id: 1,
          cover: require("../assets/images/blog_post_1.jpg"),
          category: "Design",
          a_title: "View all posts in Design",
          date: "05 Mar 2020",
          title: "Why I Switched to Sketch For UI Design",
          content1:
            "Nulla nulla nisl, sodales ac nulla ac, consequat vulputate purus. Curabitur tincidunt ipsum vel nibh rutrum accumsan. Nunc ullamcorper posuere leo, vitae aliquet risus pharetra in. Integer turpis eros, iaculis et mi non, pulvinar egestas leo. Etiam sagittis ex turpis, vitae cursus tortor interdum eu. Quisque ultrices nunc eget erat vestibulum euismod. Ut mauris nisi, facilisis at arcu nec, facilisis porttitor lorem.",
          content2:
            "Vivamus vitae neque molestie, porta libero sed, tincidunt leo. In nec posuere odio, id rhoncus lorem. Proin id erat ut dolor condimentum viverra. Praesent viverra sed dolor ac luctus. Praesent placerat id lorem quis lacinia.",
          content3:
            "Etiam interdum vulputate risus, vitae elementum neque consectetur sed. Donec at risus dui. Ut in suscipit neque. Vestibulum sit amet lobortis magna, commodo venenatis ante. Cras molestie, ex a auctor lacinia, risus est aliquam risus, sit amet semper purus tortor id ante. Donec lacus ipsum, porttitor et libero a, fringilla auctor quam. Sed in nisl id libero tincidunt aliquet. Aenean dui ipsum, auctor ut leo ut, semper dignissim lacus. Suspendisse faucibus viverra consequat. Maecenas efficitur massa vel eros sagittis dapibus. Nam lobortis mi in turpis hendrerit eleifend. Nulla non massa felis.",
          content4:
            "Donec sit amet dolor ante. Vivamus vel massa accumsan, faucibus quam quis, convallis velit. Aliquam erat volutpat. Integer imperdiet diam quis arcu venenatis, quis sagittis nibh rhoncus. Donec non nisi scelerisque, sodales metus quis, accumsan mauris. Curabitur volutpat risus rutrum erat condimentum tristique. Nullam at felis diam. Quisque dictum felis non ante pretium mollis. Aliquam turpis neque, varius nec diam a, aliquam pulvinar diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ipsum libero, aliquet sed bibendum faucibus, semper a dui.",
          quote: [
            {
              content:
                "Maecenas id finibus felis. Etiam vitae nibh et felis efficitur pellentesque. Mauris suscipit sapien nunc, a lacinia nibh feugiat ut. In hac habitasse platea dictumst.",
              author: "Larry L. Johnson",
            },
          ],
          tags: ["animate", "bar", "design", "progress", "ui"],
        },
        {
          id: 2,
          cover: require("../assets/images/blog_post_2.jpg"),
          category: "UI",
          a_title: "View all posts in UI",
          date: "23 Feb 2020",
          title: "Best Practices for Animated Progress Indicators",
          content1:
            "Nulla nulla nisl, sodales ac nulla ac, consequat vulputate purus. Curabitur tincidunt ipsum vel nibh rutrum accumsan. Nunc ullamcorper posuere leo, vitae aliquet risus pharetra in. Integer turpis eros, iaculis et mi non, pulvinar egestas leo. Etiam sagittis ex turpis, vitae cursus tortor interdum eu. Quisque ultrices nunc eget erat vestibulum euismod. Ut mauris nisi, facilisis at arcu nec, facilisis porttitor lorem.",
          content2:
            "Vivamus vitae neque molestie, porta libero sed, tincidunt leo. In nec posuere odio, id rhoncus lorem. Proin id erat ut dolor condimentum viverra. Praesent viverra sed dolor ac luctus. Praesent placerat id lorem quis lacinia.",
          content3:
            "Etiam interdum vulputate risus, vitae elementum neque consectetur sed. Donec at risus dui. Ut in suscipit neque. Vestibulum sit amet lobortis magna, commodo venenatis ante. Cras molestie, ex a auctor lacinia, risus est aliquam risus, sit amet semper purus tortor id ante. Donec lacus ipsum, porttitor et libero a, fringilla auctor quam. Sed in nisl id libero tincidunt aliquet. Aenean dui ipsum, auctor ut leo ut, semper dignissim lacus. Suspendisse faucibus viverra consequat. Maecenas efficitur massa vel eros sagittis dapibus. Nam lobortis mi in turpis hendrerit eleifend. Nulla non massa felis.",
          content4:
            "Donec sit amet dolor ante. Vivamus vel massa accumsan, faucibus quam quis, convallis velit. Aliquam erat volutpat. Integer imperdiet diam quis arcu venenatis, quis sagittis nibh rhoncus. Donec non nisi scelerisque, sodales metus quis, accumsan mauris. Curabitur volutpat risus rutrum erat condimentum tristique. Nullam at felis diam. Quisque dictum felis non ante pretium mollis. Aliquam turpis neque, varius nec diam a, aliquam pulvinar diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ipsum libero, aliquet sed bibendum faucibus, semper a dui.",
          quote: [
            {
              content:
                "Maecenas id finibus felis. Etiam vitae nibh et felis efficitur pellentesque. Mauris suscipit sapien nunc, a lacinia nibh feugiat ut. In hac habitasse platea dictumst.",
              author: "Larry L. Johnson",
            },
          ],
          tags: ["animate", "bar", "design", "progress", "ui"],
        },
        {
          id: 3,
          cover: require("../assets/images/blog_post_3.jpg"),
          category: "Design",
          a_title: "View all posts in Design",
          date: "06 Feb 2020",
          title: "Designing the Perfect Feature Comparison Table",
          content1:
            "Nulla nulla nisl, sodales ac nulla ac, consequat vulputate purus. Curabitur tincidunt ipsum vel nibh rutrum accumsan. Nunc ullamcorper posuere leo, vitae aliquet risus pharetra in. Integer turpis eros, iaculis et mi non, pulvinar egestas leo. Etiam sagittis ex turpis, vitae cursus tortor interdum eu. Quisque ultrices nunc eget erat vestibulum euismod. Ut mauris nisi, facilisis at arcu nec, facilisis porttitor lorem.",
          content2:
            "Vivamus vitae neque molestie, porta libero sed, tincidunt leo. In nec posuere odio, id rhoncus lorem. Proin id erat ut dolor condimentum viverra. Praesent viverra sed dolor ac luctus. Praesent placerat id lorem quis lacinia.",
          content3:
            "Etiam interdum vulputate risus, vitae elementum neque consectetur sed. Donec at risus dui. Ut in suscipit neque. Vestibulum sit amet lobortis magna, commodo venenatis ante. Cras molestie, ex a auctor lacinia, risus est aliquam risus, sit amet semper purus tortor id ante. Donec lacus ipsum, porttitor et libero a, fringilla auctor quam. Sed in nisl id libero tincidunt aliquet. Aenean dui ipsum, auctor ut leo ut, semper dignissim lacus. Suspendisse faucibus viverra consequat. Maecenas efficitur massa vel eros sagittis dapibus. Nam lobortis mi in turpis hendrerit eleifend. Nulla non massa felis.",
          content4:
            "Donec sit amet dolor ante. Vivamus vel massa accumsan, faucibus quam quis, convallis velit. Aliquam erat volutpat. Integer imperdiet diam quis arcu venenatis, quis sagittis nibh rhoncus. Donec non nisi scelerisque, sodales metus quis, accumsan mauris. Curabitur volutpat risus rutrum erat condimentum tristique. Nullam at felis diam. Quisque dictum felis non ante pretium mollis. Aliquam turpis neque, varius nec diam a, aliquam pulvinar diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ipsum libero, aliquet sed bibendum faucibus, semper a dui.",
          quote: [
            {
              content:
                "Maecenas id finibus felis. Etiam vitae nibh et felis efficitur pellentesque. Mauris suscipit sapien nunc, a lacinia nibh feugiat ut. In hac habitasse platea dictumst.",
              author: "Larry L. Johnson",
            },
          ],
          tags: ["animate", "bar", "design", "progress", "ui"],
        },
        {
          id: 4,
          cover: require("../assets/images/blog_post_4.jpg"),
          category: "UI",
          a_title: "View all posts in E-Commerce",
          date: "07 Jan 2020",
          title: "An Overview of E-Commerce Platforms",
          content1:
            "Nulla nulla nisl, sodales ac nulla ac, consequat vulputate purus. Curabitur tincidunt ipsum vel nibh rutrum accumsan. Nunc ullamcorper posuere leo, vitae aliquet risus pharetra in. Integer turpis eros, iaculis et mi non, pulvinar egestas leo. Etiam sagittis ex turpis, vitae cursus tortor interdum eu. Quisque ultrices nunc eget erat vestibulum euismod. Ut mauris nisi, facilisis at arcu nec, facilisis porttitor lorem.",
          content2:
            "Vivamus vitae neque molestie, porta libero sed, tincidunt leo. In nec posuere odio, id rhoncus lorem. Proin id erat ut dolor condimentum viverra. Praesent viverra sed dolor ac luctus. Praesent placerat id lorem quis lacinia.",
          content3:
            "Etiam interdum vulputate risus, vitae elementum neque consectetur sed. Donec at risus dui. Ut in suscipit neque. Vestibulum sit amet lobortis magna, commodo venenatis ante. Cras molestie, ex a auctor lacinia, risus est aliquam risus, sit amet semper purus tortor id ante. Donec lacus ipsum, porttitor et libero a, fringilla auctor quam. Sed in nisl id libero tincidunt aliquet. Aenean dui ipsum, auctor ut leo ut, semper dignissim lacus. Suspendisse faucibus viverra consequat. Maecenas efficitur massa vel eros sagittis dapibus. Nam lobortis mi in turpis hendrerit eleifend. Nulla non massa felis.",
          content4:
            "Donec sit amet dolor ante. Vivamus vel massa accumsan, faucibus quam quis, convallis velit. Aliquam erat volutpat. Integer imperdiet diam quis arcu venenatis, quis sagittis nibh rhoncus. Donec non nisi scelerisque, sodales metus quis, accumsan mauris. Curabitur volutpat risus rutrum erat condimentum tristique. Nullam at felis diam. Quisque dictum felis non ante pretium mollis. Aliquam turpis neque, varius nec diam a, aliquam pulvinar diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ipsum libero, aliquet sed bibendum faucibus, semper a dui.",
          quote: [
            {
              content:
                "Maecenas id finibus felis. Etiam vitae nibh et felis efficitur pellentesque. Mauris suscipit sapien nunc, a lacinia nibh feugiat ut. In hac habitasse platea dictumst.",
              author: "Larry L. Johnson",
            },
          ],
          tags: ["animate", "bar", "design", "progress", "ui"],
        },
      ],
    };
  },
  methods: {
    returnBlog() {
      this.$router.go(-1); //返回上一界面，即blog界面
    },
    getArticleDetail(articleId) {
      this.articles.forEach((item) => {
        if (articleId == item.id) {
          this.article = item;
        }
      });
    },
  },
};
</script>

<style>
.return_btn {
  position: relative;
  top: 10px;
  left: 10px;
  z-index: 98;
  list-style: none;
}
.return_btn button {
  position: absolute;
  margin-bottom: 0;
  width: 75px;
  height: 48px;
  background-color: #04b4e0 !important;
  border: 1px solid #04b4e0 !important;
}
.return_btn button:hover {
  color: #04b4e0 !important;
  background-color: transparent !important;
  border: 1px solid #04b4e0 !important;
}
.no_padding {
  padding: 0 !important;
}
.content_mb {
  margin-bottom: 10px;
}
</style>
