import Vue from 'vue'
import { Iutil } from './type'
interface IResult {
  [prop: string]: string
}

export const $util: Iutil = {
  isNoData (data: any) {
    return ['undefined', undefined, null, false, 'null', '', ' '].includes(data)
  },
  queryParse (url:typeof window.location.href = window.location.href) {
    if (url.indexOf('?') === -1) {
      return null
    }
    var str = url.split('?')[1].split('#')[0]
    var items = str.split('&')
    var result:IResult = {}
    var arr:string[] = []
    for (var i = 0; i < items.length; i++) {
      arr = items[i].split('=')
      result[arr[0]] = arr[1]
    }
    return result
  },
  queryParse1 (url:typeof window.location.href = window.location.href) {
    if (url.indexOf('sourceid') === -1) {
      return null
    }
    var str = ''
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      str = url.split('?')[2]
    } else {
      str = url.split('?')[1].split('#')[0]
    }
    var items = str.split('&')
    var result:IResult  = {}
    var arr = []
    for (var i = 0; i < items.length; i++) {
      arr = items[i].split('=')
      result[arr[0]] = arr[1]
    }
    return result
  },
  queryParse2 (url:typeof window.location.href = window.location.href) {
    if (url.indexOf('sourceid') === -1) {
      return null
    }
    return this.util.queryParseForBusiness(url)
  },
  queryParseForBusiness (url) {
    var str = ''
    let splitArr = url.split('?')
    if (splitArr.length === 3) {
      str = url.split('?')[2]
    } else {
      str = url.split('?')[1].split('#')[0]
    }
    var items = str.split('&')
    var result:IResult = {}
    var arr = []
    for (var i = 0; i < items.length; i++) {
      arr = items[i].split('=')
      result[arr[0]] = arr[1]
    }
    return result
  },
  mobileTest () {
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      /* 移动端 */
      return true
    } else {
      /* web端 */
      return false
    }
  },
  getMobile () {
    var u = navigator.userAgent
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1 // g
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
    if (isAndroid) {
      return 'Android'
    }
    if (isIOS) {
      return 'IOS'
    }
  },
  openPerson (openId) {
    (window as any).XuntongJSBridge.call('personInfo', {
      'openId': openId,
      'success': function (result: any) {
      }
    })
  },
  isLeap (year) {
    let a = year % 4
    let b = year % 100
    let c = year % 400
    if (((a === 0) && (b !== 0)) || (c === 0)) {
      return true
    }
    return false
  },
  isSfz (idcard) {
    var Errors = [1, '身份证号码位数不对', '身份证号码出生日期错误', '身份证号码错误', '身份证号码地区非法', '身份证号码不能为空']
    var area = { 11: '北京', 12: '天津', 13: '河北', 14: '山西', 15: '内蒙古', 21: '辽宁', 22: '吉林', 23: '黑龙江', 31: '上海', 32: '江苏', 33: '浙江', 34: '安徽', 35: '福建', 36: '江西', 37: '山东', 41: '河南', 42: '湖北', 43: '湖南', 44: '广东', 45: '广西', 46: '海南', 50: '重庆', 51: '四川', 52: '贵州', 53: '云南', 54: '西藏', 61: '陕西', 62: '甘肃', 63: '青海', 64: '宁夏', 65: '新疆', 71: '台湾', 81: '香港', 82: '澳门', 91: '国外' }
    var JYM
    var SUM, ereg, Err
    var arr = []
    // 身份证号不能为空
    if (idcard.trim() === '') {
      Err = Errors[5]
      return Err
    }
    // 身份证号码错误
    let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/g
    if (!reg.test(idcard)) {
      Err = Errors[3]
      return Err
    }
    arr = idcard.split('')
    // 身份证号码地区非法
    if (area[parseInt(idcard.substr(0, 2)) as (keyof typeof area)] === null) {
      Err = Errors[4]
      return Err
    }
    switch (idcard.length) {
      case 15:
        if (this.isLeap((parseInt(idcard.substr(6, 2)) + 1900))) {
          ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/ // 测试出生日期的合法性
        } else {
          ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/ // 测试出生日期的合法性
        }
        if (ereg.test(idcard)) {
          Err = Errors[0]
        } else {
          Err = Errors[2]
        }
        return Err
      case 18:
        if (this.isLeap(parseInt(idcard.substr(6, 4)))) {
          ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/ // 闰年出生日期的合法性正则表达式
        } else {
          ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/ // 平年出生日期的合法性正则表达式
        }
        if (ereg.test(idcard)) {
          // 校验码判断
          /* 首先将前面的身份证号码17位数分别乘以不同的系数。
          * 从第一位到第十七位的系数分别为：7－9－10－5－8－4－2－1－6－3－7－9－10－5－8－4－2
          * 接下来将这17位数字和系数相乘的结果相加，然后用加出来和除以11，看余数，
          * 余数只可能有0－1－2－3－4－5－6－7－8－9－10这11个数字。
          * 其分别对应的最后一位身份证的号码为1－0－X－9－8－7－6－5－4－3－2。 */
          // 系数
          let c = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
          // 校验码对照表
          JYM = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
          SUM = 0
          for (let k = 0; k < 17; k++) {
            SUM += parseInt(arr[k]) * c[k]
          }
          if (arr[17].toUpperCase() !== JYM[SUM % 11].toUpperCase()) {
            Err = Errors[3]
          } else {
            Err = Errors[0]
          }
        } else {
          Err = Errors[2]
        }
        return Err
      default:
        Err = Errors[1]
        return Err
    }
  },
  /* 验证手机号格式是否正确 */
  isPhoneAvailable (phone) {
    let myreg = /^1[3456789]\d{9}$/
    return myreg.test(phone)
  },
  getToday (n) {
    let date = new Date()
    date.setDate(date.getDate() + n)
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let monthStr = month < 10 ? '0' + month : month
    let dayStr = day < 10 ? '0' + day : day
    return year + '-' + monthStr + '-' + dayStr
  },
  getSomeDay (init, n) {
    var date = new Date(init)
    date.setDate(date.getDate() + n)
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    let monthStr = month < 10 ? '0' + month : month
    let dayStr = day < 10 ? '0' + day : day
    return year + '-' + monthStr + '-' + dayStr
  },
  // 获取特定时间下一天
  getNextDay (init) {
    var date = new Date(init)
    date.setDate(date.getDate() + 1)
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    let monthStr = month < 10 ? '0' + month : month
    let dayStr = day < 10 ? '0' + day : day
    return year + '-' + monthStr + '-' + dayStr
  },
  // 获取特定时间前一天
  getPreDay (init) {
    var date = new Date(init)
    date.setDate(date.getDate() - 1)
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    let monthStr = month < 10 ? '0' + month : month
    let dayStr = day < 10 ? '0' + day : day
    return year + '-' + monthStr + '-' + dayStr
  },
  // 获取周几
  getWeekDay (date) {
    var days = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
    return days[new Date(date).getDay()]
  },
  // 获取某月第一天
  getMonthFirstDay (date) {
    var currentMonth = date.getMonth()
    var res = new Date(date.getFullYear(), currentMonth, 1)
    var year = res.getFullYear()
    var month = res.getMonth() + 1
    var day = res.getDate()
    let monthStr = month < 10 ? '0' + month : month
    let dayStr = day < 10 ? '0' + day : day
    return year + '-' + monthStr + '-' + dayStr
  },
  // 获取某月最后一天
  getMonthLastDay (date) {
    var currentMonth = date.getMonth()
    var nextMonth = ++currentMonth
    var nextMonthFirstDay:any = new Date(date.getFullYear(), nextMonth, 1)
    var oneDay = 1000 * 60 * 60 * 24
    var res = new Date(nextMonthFirstDay - oneDay)
    var year = res.getFullYear()
    var month = res.getMonth() + 1
    var day = res.getDate()
    let monthStr = month < 10 ? '0' + month : month
    let dayStr = day < 10 ? '0' + day : day
    return year + '-' + monthStr + '-' + dayStr
  },
  getMonthFirstDate (date) {
    var currentMonth = date.getMonth()
    return new Date(date.getFullYear(), currentMonth, 1)
  },
  // 获取某月最后一天date对象
  getMonthLastDate (date) {
    var currentMonth = date.getMonth()
    var nextMonth = ++currentMonth
    var nextMonthFirstDay:any = new Date(date.getFullYear(), nextMonth, 1)
    var oneDay = 1000 * 60 * 60 * 24
    return new Date(nextMonthFirstDay - oneDay)
  },
  getPrevMonthFirstDate (date) {
    var currentMonth = date.getMonth()
    var prevMonth = --currentMonth
    return new Date(date.getFullYear(), prevMonth, 1)
  },
  getNextMonthFirstDate (date) {
    var currentMonth = date.getMonth()
    var nextMonth = ++currentMonth
    return new Date(date.getFullYear(), nextMonth, 1)
  },
  // 2019-03-14(周四)至2019-03-15(周五)
  getTimeRangStr (startDate, endDate) {
    var days = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
    let str = startDate + '(' + days[new Date(startDate).getDay()] + ')' + '至' + endDate + '(' + days[new Date(endDate).getDay()] + ')'
    return str
  },
  // 2019-03-14(周四)至2019-03-15(周五)换行
  getTimeRangStr2 (startDate, endDate) {
    var days = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
    let str = startDate + '(' + days[new Date(startDate).getDay()] + ')' + '<br/>至' + endDate + '(' + days[new Date(endDate).getDay()] + ')'
    return str
  },
  // 2019-03-14(周四) 12:11—12:12
  getTimeRangStr3 (startDate, endDate) {
    if (!startDate) return ''
    var days = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
    if (endDate) {
      let str = startDate.substr(0, 10) + ' (' + days[new Date(startDate.substr(0, 10)).getDay()] + ') ' + startDate.substr(11, 5) + '-' + endDate.substr(11, 5)
      return str
    } else {
      return startDate.substr(0, 10) + ' (' + days[new Date(startDate.substr(0, 10)).getDay()] + ')'
    }
  },
  // 2018-12-20 周三
  getDateStr (date) {
    var days = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
    let str = date + '\xa0\xa0' + days[new Date(date).getDay()]
    return str
  },
  // 2018-12-20 (周三)
  getDateStr2 (date) {
    var days = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
    let str = date + ' (' + days[new Date(date).getDay()] + ')'
    return str
  },
  // 08-20(周四)
  getDateStr3 (date) {
    var days = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
    let str = date.substr(5, 10) + '(' + days[new Date(date).getDay()] + ')'
    return str
  },
  /* 将年月日时分秒字符串截取成年月日字符串 */
  changeTimeToDate (time) {
    if (!time) {
      return ''
    }
    let timeArray = time.split(' ')
    if (timeArray.length === 2) {
      return timeArray[0]
    } else {
      return ''
    }
  },
  /* 由于echarts直接写px时，无法自适应，需要乘dpr */
  pxToRem (num) {
    return num * window.devicePixelRatio
  },
  /* 判断输入框是否有表情 */
  isEmojiCharacter (substring) {
    for (var i = 0; i < substring.length; i++) {
      let hs = substring.charCodeAt(i)
      if (hs >= 0xd800 && hs <= 0xdbff) {
        if (substring.length > 1) {
          let ls = substring.charCodeAt(i + 1)
          var uc = ((hs - 0xd800) * 0x400) + (ls - 0xdc00) + 0x10000
          if (uc >= 0x1d000 && uc <= 0x1f77f) {
            return true
          }
        }
      } else if (substring.length > 1) {
        let ls = substring.charCodeAt(i + 1)
        if (ls === 0x20e3) {
          return true
        }
      } else {
        if (hs >= 0x2100 && hs <= 0x27ff) {
          return true
        } else if (hs >= 0x2B05 && hs <= 0x2b07) {
          return true
        } else if (hs >= 0x2934 && hs <= 0x2935) {
          return true
        } else if (hs >= 0x3297 && hs <= 0x3299) {
          return true
        } else if (hs === 0xa9 || hs === 0xae || hs === 0x303d || hs === 0x3030 ||
          hs === 0x2b55 || hs === 0x2b1c || hs === 0x2b1b || hs === 0x2b50) {
          return true
        }
      }
    }
  },
  /* 日期格式化 */
  dateFormat (date, fmt) {

    var o:{[props: string]: any} = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds(),
      'q+': Math.floor((date.getMonth() + 3) / 3),
      'S': date.getMilliseconds()
    }
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? o[k] : (('00' + o[k]).substr(('' + o[k]).length)))
      }
    }
    return fmt
  },
  delUrlParams (name) {
    let reg = new RegExp(`\\??${name}=(.*)?&?`, 'g')
    let search = window.location.search.replace(reg, '') // 删除指定的search并返回
    window.history.replaceState(null, '', search) // 无刷新跳转
  },
  getSearchParams (name) {
    var query = decodeURI(window.location.search.substring(1))
    var vars = query.split('&')
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=')
      if (pair[0] === name) { return pair[1] }
    }
    return null
  },
  isPc () {
    var userAgentInfo = navigator.userAgent
    var Agents = ['Android', 'iPhone',
      'SymbianOS', 'Windows Phone',
      'iPad', 'iPod']
    var flag = true
    flag = Agents.some(item => userAgentInfo.includes(item))
    return !flag
  },
  isWechat () {
    var ua = (navigator as any).userAgent.toLowerCase()// 获取判断用的对象
    if (ua && ua.match && ua.match(/MicroMessenger/i) && ua.match(/MicroMessenger/i).includes('micromessenger')) {
      return true
    } else {
      return false
    }
  },
  resetArr (arr, group = 8) {
    let newArr = []
    // 当数量小于一组数量
    if (arr.length <= group) {
      newArr = [arr]
    } else {
      for (let index = 0, len = arr.length; index < len; index++) {
        if ((index + 1) % group === 0 && index !== 0) {
          let _arr = arr.slice(index + 1 - group, index + 1)
          newArr.push(_arr)
        }
      }
      let lastNums = arr.length % group
      if (lastNums !== 0) {
        newArr.push(arr.slice(-lastNums))
      }
    }
    return newArr
  },
  async setTitle (title:string) {
    if (title) {
      document.title = title
      window && (window as any).XuntongJSBridge.call('setWebViewTitle', { 'title': title })
      // todo
      // if (currentEnv === 'DINGTALK') {
      //   let { biz } = await import('dingtalk-jsapi')
      //   biz.navigation.setTitle({
      //     title
      //   })
      // }
    }
  },
  Mathround (num, dec) {
    var strNum = num + ''/* 把要转换的小数转换成字符串 */
    var index = strNum.indexOf('.') /* 获取小数点的位置 */
    if (index < 0) {
      return num/* 如果没有小数点，那么无需四舍五入，返回这个整数 */
    }
    var n = strNum.length - index - 1/* 获取当前浮点数，小数点后的位数 */
    if (dec < n) {
      /* 把小数点向后移动要保留的位数，把需要保留的小数部分变成整数部分，只留下不需要保留的部分为小数 */
      var e = Math.pow(10, dec)
      num = num * e
      /* 进行四舍五入，只保留整数部分 */
      num = Math.round(num)
      /* 再把原来小数部分还原为小数 */
      return num / e
    } else {
      return num/* 如果当前小数点后的位数等于或小于要保留的位数，那么无需处理，直接返回 */
    }
  },
  // 清空v-scroll-cache自定义指令中的缓存的当前页面位置
  clearPageScrollDistance (vm) {
    // let obj = {}
    // if (sessionStorage.getItem('scrollDistance')) {
    //   obj = JSON.parse(sessionStorage.getItem('scrollDistance'))
    // }
    // obj[vm.$route.path as any] = 0
    // sessionStorage.setItem('scrollDistance', JSON.stringify(obj))
  },
  install (vue: typeof Vue) {
    vue.prototype.$util = $util
  }
}
// 默认导出
export default $util
