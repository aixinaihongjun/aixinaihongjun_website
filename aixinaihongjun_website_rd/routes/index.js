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

module.exports = router
