Vue项目初始化
=
# 功能点
* 自动生成路由表  
* 模板自动加载机制  
* console 开关配置  
-开发模式默认启用,生产模式自动屏蔽-

## 使用
```
import Vue from 'vue'
import App from './App.vue'
import mhTms from './mhTms'

new Vue({
  router:mhTms.mhVue.router,
  render: h => h(App),
}).$mount('#app')
```

## ⚠️目录说明
- /mhTms  
    > mhTms必须放根目录
- /page 
    > 路由页面必须放page下面,支持多级目录
- /template
    > /template/default 默认模板  
    > /template/diy 模板2  
        > 模板2下面未找到文件,会默认寻找default下面的对应的文件
    > 模板必须放根目录  
