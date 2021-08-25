import Vue from 'vue'
import { Iutil } from './type'
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
    interface Iresult {
      [props: string]: string
    }
    var result:Iresult = {}
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
    interface IResult {
      [prop: string]: string
    }
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
  install (vue: typeof Vue) {
    vue.prototype.$util = $util
  }
}
export default $util
