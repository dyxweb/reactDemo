import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route } from 'react-router-dom'; 
import { matchRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { getStore } from '../store'
import Routes from '../src/Routes'
const app = express();
app.use(express.static('public'))

const store = getStore()
export const render = (req, res) => {
  //调用matchRoutes用来匹配当前路由(支持多级路由)
  const matchedRoutes = matchRoutes(Routes, req.path)
  const promises = [];
  matchedRoutes.forEach(item => {
    //如果这个路由对应的组件有loadData方法
    if (item.route.loadData) {
      //那么就执行一次,并将store传进去
      //注意loadData函数调用后需要返回Promise对象
      promises.push(item.route.loadData(store))
    }
  })
  Promise.all(promises).then(() => {
    //构建服务端的路由
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.path}>
          <div>
          {
            Routes.map(route => (
              <Route {...route} />
            ))
          }
          </div>
        </StaticRouter>
      </Provider>
    );
    res.send(`
      <html>
        <head>
          <title>ssr</title>
        </head>
        <body>
          <div id="root">${content}</div>
          <script>
            window.context = {
              state: ${JSON.stringify(store.getState())}
            }
          </script>
          <script src="/bundle.js"></script>
        </body>
      </html>`
    )
  })
}

app.get('*', function (req, res) {
  render(req, res);
})

app.listen(3001, () => {
  console.log('listen:3001')
})