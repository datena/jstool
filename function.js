/**
 * 将 Date 转化为指定格式的String
 * date 待转换的时间 （2017-10-12 17:14:18）
 * fmt 转换的格式
 *     月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
 *     年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 * @return 格式化的日期
 * eg:format(new Date(),"yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
 */
function dateformat(date,fmt) {
    var o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S":date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};



/**
 * 模仿PHP的strtotime()函数
 * date 待计算的时间 （2017-10-12 17:14:18）
 * num 相差天数(正数为加，负数为减)
 * type 类型:y>年,m>月（默认为天）
 * @return 计算后的时间（Fri Nov 03 2017 17:04:50 GMT+0800 (CST) ）
 */
 function strtotime(date,num,type){
    var date = new Date(date);
    if(type == 'y'){//年
        date.setFullYear(date.getFullYear() + num);
    }else if(type == 'm'){//月
        date.setMonth(date.getMonth() + num);
    }else{//天
        date.setDate(date.getDate() + num);
    }
    return date;
}

/**
 * 计算两个时间之差
 * date1 时间1 
 * date2 时间2
 * type 类型:y>年,m>月（默认为天）
 * @return 相差数值
 */
 function dateshort(date1,date2,type){
    var date1= new Date(date1);
    var date2= new Date(date2);
    var num = 0;
    if(type == 'y'){//年
        num = date1.getFullYear()*1 - date2.getFullYear()*1;
    }else if(type == 'm'){//月
        num = date1.getMonth()*1 - date2.getMonth()*1;
    }else{//天
        num = date1.getDate()*1 - date2.getDate()*1;
    }
    return num;
}