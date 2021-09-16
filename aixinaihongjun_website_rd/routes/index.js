// 加载MySQL驱动
const mysql = require('mysql');
// 连接数据库
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'aixinaihongjun_website'
});

const router = require('koa-router')()

function getQueryData(sql, params = []) {
    return new Promise((resolve, reject) => {
        pool.query(sql, params, function (error, results) {
            if (error) reject(error);
            resolve(results);
        });
    })
}

router.post('/postContact', async (ctx) => {
    let { user_name, full_name, email, subject, message } = ctx.request.body;
    let sql = 'insert into t_contact(user_name, full_name, email, subject, message) values(?,?,?,?,?)';
    let results = await getQueryData(sql, [user_name, full_name, email, subject, message]);
    if (results.affectedRows > 0) {
        ctx.body = {
            state: 'success'
        }
    } else {
        ctx.body = {
            state: 'fail'
        }
    }
})

router.post('/register', async (ctx) => {
    let { username, password } = ctx.request.body;
    let sql = 'insert ignore into t_user(username, password) values(?,?)';
    let results = await getQueryData(sql, [username, password]);
    if (results.affectedRows > 0) {
        ctx.body = {
            state: 'success'
        }
    } else {
        ctx.body = {
            state: 'fail'
        }
    }
})

router.post('/login', async (ctx) => {
    let { username, password } = ctx.request.body;
    let sql = `SELECT * FROM t_user WHERE username=? and password=?`;
    let results = await getQueryData(sql, [username, password]);
    if (results.length > 0) {
        ctx.body = {
            state: "success",
            userInfo: results[0]
        };
    } else {
        ctx.body = {
            state: "fail"
        };
    }
})

router.get('/getArticleList', async (ctx) => {
    let sql = `SELECT * FROM t_blog`;
    let results = await getQueryData(sql);
    ctx.body = results;
});

router.get('/getArticleDetail/:id', async (ctx) => {
    let articleId = ctx.params.id;
    let sql = `SELECT * FROM t_blog WHERE t_blog.id=?`;
    let results = await getQueryData(sql, [articleId]);
    let article = results[0];

    let sql2 = `select t_comment.*, t_user.portrait from t_comment, t_user where t_comment.user_name=t_user.username and t_comment.blog_id=?`;

    let results2 = await getQueryData(sql2, [articleId]);

    let sql3 =
        `select t_tag.tag_name from t_blog, t_tag, t_tag_blog where t_blog.id=t_tag_blog.blog_id and t_tag_blog.tag_id=t_tag.id and t_tag_blog.blog_id=?`;
    let results3 = await getQueryData(sql3, [articleId]);

    article = {
        id: article.id,
        cover: article.cover,
        category: article.category,
        a_title: article.a_title,
        date: article.date,
        title: article.title,
        content1: article.content1,
        content2: article.content2,
        content3: article.content3,
        content4: article.content4,
        quote_content: article.quote_content,
        quote_author: article.quote_author,
        comments: results2,
        tags: results3
    }
    ctx.body = article;
});

router.post('/postComment', async (ctx) => {
    let { user_name, blog_id, content } = ctx.request.body;
    let sql = 'insert into t_comment(user_name, blog_id, content) values(?,?,?)';
    let results = await getQueryData(sql, [user_name, blog_id, content]);
    if (results.affectedRows > 0) {
        ctx.body = {
            state: 'success'
        }
    } else {
        ctx.body = {
            state: 'fail'
        }
    }
})

module.exports = router
