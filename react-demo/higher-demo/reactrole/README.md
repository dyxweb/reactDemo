# reactrole

> 一个简单的判断是否登录，没有登录即跳到登录页面。根据登陆者的权限来判断路由是否允许进入，如果不允许进入则进入没有权限的页面。还会根据登陆者的权限来对应显示导航以及切换权限(高向低切换)

## 启动项目
- npm i
- npm start

## 登录
> 三个username对应不同的权限，显示以及路由权限不同

- username: normal,   password: 123456;
- username: manage,   password: 123456;
- username: highmanage,   password: 123456;

