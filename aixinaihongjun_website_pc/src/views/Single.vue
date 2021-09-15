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
          <img :src="getImgUrl(article.cover)" alt="image" style="width: 100%" />
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

                  <blockquote class="quote">
                    {{ article.quote_content }}
                    <footer class="quote-author">
                      <span>{{ article.quote_author }}</span>
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
                  <span class="entry-date">
                    {{ article.date | dateFormat("YYYY-mm-dd") }}</span
                  >
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
              <a href="#" rel="tag" v-for="tag in article.tags" :key="tag.tag_name">{{
                tag.tag_name
              }}</a>
            </div>
          </div>

          <div class="pt-5 mt-5">
            <h3 class="mb-5 font-weight-bold">{{ article.comments.length }}&nbsp;评论</h3>
            <ul class="comment-list">
              <li class="comment" v-for="comment in article.comments" :key="comment.id">
                <div class="vcard bio">
                  <img :src="getImgUrl(comment.portrait)" alt="Image placeholder" />
                </div>
                <div class="comment-body">
                  <div class="flex_between">
                    <p class="comment_name">{{ comment.user_name }}</p>
                    <div class="meta">
                      {{ comment.comment_time | dateFormat("YYYY-mm-dd HH:MM") }}
                    </div>
                  </div>
                  <p class="comment_content">
                    {{ comment.content }}
                  </p>
                </div>
              </li>
            </ul>

            <div class="comment-form-wrap pt-5">
              <div class="form-group">
                <textarea
                  id="message"
                  cols="30"
                  rows="10"
                  class="form-control margin_buttom"
                  placeholder="发一条友善的评论"
                  v-model="commentContent"
                ></textarea>
              </div>
              <div class="form-group">
                <input
                  type="button"
                  value="发表评论"
                  class="btn py-3 px-4 btn-primary btn_postComment"
                  @click="postComment"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- .col-md-8 -->
      </div>
    </section>
  </div>
</template>

<script>
import http from "@/utils/http.js";
import myMixin from "@/utils/mixin.js";
export default {
  name: "Single",
  mixins: [myMixin],
  data() {
    return {
      article: {
        id: "",
      },
      commentContent: "",
    };
  },
  created() {
    this.article.id = this.$route.params.articleId;
    this.getArticleDetail();
  },
  methods: {
    returnBlog() {
      this.$router.go(-1); //返回上一界面，即blog界面
    },
    getArticleDetail() {
      http.get("/getArticleDetail/" + this.article.id).then((res) => {
        this.article = res.data;
      });
    },
    postComment() {
      let userInfo = this.$store.state.userInfo;
      if (userInfo.isLogin && this.commentContent != "") {
        http
          .post("/postComment", {
            user_name: userInfo.username,
            blog_id: this.article.id,
            content: this.commentContent,
          })
          .then((res) => {
            let { state } = res.data;
            if (state == "success") {
              alert("评论成功！");
              window.location.reload();
            } else {
              alert("评论失败！");
            }
          });
      } else if (!userInfo.isLogin) {
        alert("您尚未登录，请先登录再来评论！");
        this.$router.push("/login");
      } else {
        alert("评论内容不得为空！");
      }
    },
  },
};
</script>

<style>
.margin_buttom {
  margin-bottom: 48px !important;
}
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
.btn_postComment {
  border: 2px solid #04b4e0 !important;
  background: transparent !important;
  cursor: pointer;
}
.btn_postComment:hover {
  border: 2px solid #04b4e0 !important;
  background: #04b4e0 !important;
  color: #fff !important;
}
.flex_between {
  display: flex;
  justify-content: space-between;
}
.comment_name {
  color: #ccc;
}
.comment_content {
  font-size: 24px;
  color: #fff;
}
</style>
