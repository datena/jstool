/** 
 * 常用JS方法集合
 * qq:781488109
 * http://www.zcrkj.com
*/
;!function(){
    "use strict";
  
    var yzl = {

        /**
         * 将 Date 转化为指定格式的String
         * date 待转换的时间 （2017-10-12 17:14:18）
         * fmt 转换的格式
         *     月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
         *     年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
         * @return 格式化的日期
         * eg:format(new Date(),"yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
         */
        dateformat:function(date,fmt) {
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
        }



        /**
         * 模仿PHP的strtotime()函数
         * date 待计算的时间 （2017-10-12 17:14:18）
         * num 相差天数(正数为加，负数为减)
         * type 类型:y>年,m>月（默认为天）
         * @return 计算后的时间（Fri Nov 03 2017 17:04:50 GMT+0800 (CST) ）
         */
        ,strtotime:function(date,num,type){
            var date = new Date(date);
            if(typeof(date) != 'object' && date.indexOf('-') >= 0){ //兼容ios
                date = date.replace(/\-/g,'/');
            }
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
        ,dateshort:function(date1,date2,type){
            var date1= new Date(date1);
            var date2= new Date(date2);
            var num = 0;
            if(typeof(date1) != 'object' && date1.indexOf('-') >= 0){ //兼容ios
                date1 = date1.replace(/\-/g,'/');
            }
            if(typeof(date2) != 'object' && date2.indexOf('-') >= 0){ //兼容ios
                date2 = date2.replace(/\-/g,'/');
            }
            if(type == 'y'){//年
                num = date1.getFullYear()*1 - date2.getFullYear()*1;
            }else if(type == 'm'){//月
                num = date1.getMonth()*1 - date2.getMonth()*1;
            }else{//天
                num = date1.getDate()*1 - date2.getDate()*1;
            }
            return num;
        }

        /* 
        * 获取身份证信息
        * certificateNo 身份证号
        * return res
        *        res.sex 性别
        *        res.birthday 出生日期
        *        res.age 年龄
        */
        ,getCardInfo:function (certificateNo){  
            var pat = /^\d{6}(((19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])\d{3}([0-9]|x|X))|(\d{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])\d{3}))$/;  
            if(!pat.test(certificateNo))  
                    return null;  

            var parseInner = function(certificateNo, idxSexStart, birthYearSpan){  
                    var res = {};  
                    var idxSex = 1 - certificateNo.substr(idxSexStart, 1) % 2;  
                    res.sex = idxSex == '1' ? '女' : '男';  //性别

                    var year = (birthYearSpan == 2 ? '19' : '') +   
                                certificateNo.substr(6, birthYearSpan);  
                    var month = certificateNo.substr(6 + birthYearSpan, 2);  
                    var day = certificateNo.substr(8 + birthYearSpan, 2);  
                    res.birthday = year + '-' + month + '-' + day;  //出生日期
                                        
                    var d = new Date(); //!!!考虑获取服务器的当前时间  
                    var monthFloor = ((d.getMonth()+1) < parseInt(month,10) || (d.getMonth()+1) == parseInt(month,10) && d.getDate() < parseInt(day,10)) ? 1 : 0;  
                    res.age = d.getFullYear() - parseInt(year,10) - monthFloor;//年龄  
                    return res;  
            };  
            return parseInner(certificateNo, certificateNo.length == 15 ? 14 : 16, certificateNo.length == 15 ? 2 : 4);  
        } 
    }  

  window.yzl = window.yzl || yzl;
  
}();

