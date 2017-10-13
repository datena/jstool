## jstool  常用工具集合

//dateformat  将 Date 转化为指定格式的String

```
date 待转换的时间 （2017-10-12 17:14:18）
fmt 转换的格式
    月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
    年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
@return 格式化的日期
eg:format(new Date(),"yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423

yzl.dateformat(date,fmt){

}
```
