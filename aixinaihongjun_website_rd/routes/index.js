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
  let { full_name, email, subject, message } = ctx.request.body;
  let sql = 'insert into t_contact(full_name, email, subject, message) values(?,?,?,?)';
  let results = await getQueryData(sql, [full_name, email, subject, message]);
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
