/**
 * 实现vue路由“去中心化管理,根据视图文件内的VUE文件自动生产路由表”
 * e.781488109@qq.com
 */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
let mhRoute = {routes:[]};//路由表
let importAllpage = {};//暂存vue文件
// 获取VUE文件列表
((r)=>{r.keys().forEach(key => importAllpage[r(key).default.name] = r(key))})(require.context('./views/', true, /\.vue$/))
// 生产路由表
for (var key in importAllpage) {
  if (importAllpage.hasOwnProperty(key)) {
    mhRoute.routes.push({
      path: key=='home'?'/':'/'+key,//home为项目入口也名称,可根据项目自定义
      name: importAllpage[key].default.name,
      component: importAllpage[key].default
    })
    delete importAllpage[key]//销毁缓存数据
  }
}
export default new Router(mhRoute)