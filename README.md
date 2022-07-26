VitePress 的练手项目
"海胆的生活冷知识"

使用说明：
```shell
npm install
// 更改了默认的命令
npm run dev
```

基本配置方法：
```js
themeConfig.nav // 配置导航栏 activeMatch属性设置路径匹配时表现选中样式
themeConfig.sidebar -> items // 目录需要手动配置
```
[vitepress 官方文档](https://vitepress.vuejs.org/guide/theme-sidebar.html)

注意事项：gh-pages分支需要切换dist目录来进行推送
感受：
侧边菜单对于二级标题的表现不同于 vuepress ，其采用在右侧显示目录的方式