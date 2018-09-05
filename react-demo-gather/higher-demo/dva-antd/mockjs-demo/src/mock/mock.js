/**
 * Created by chengfan on 2017/5/25.
 */
const Mock = require('mockjs');
//拼接自己模拟的数据
const data = Mock.mock({
  'users|2': [//定义请求一次数据的个数
    {
      name: '@name',
      'age|1-100': 100,
      color: '@color',//生成随机的颜色
    },
  ],
});

const database = data.users;

module.exports = {
  [`GET /users`](req, res) {
    res.status(200).json(database);
  },
};
