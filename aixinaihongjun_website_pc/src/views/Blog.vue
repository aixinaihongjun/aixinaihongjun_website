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
                        :src="article.cover"
                        class="size-blog-masonry-image-two-c"
                        alt="Why I Switched to Sketch For UI Design"
                        title=""
                      />
                      <div class="mask"></div>
                    </router-link>
                  </div>
                  <div class="post-info">
                    <div class="post-date">{{ article.date }}</div>
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
export default {
  name: "Blog",
  data() {
    return {
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
};
</script>
