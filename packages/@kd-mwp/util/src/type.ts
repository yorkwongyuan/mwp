import Vue from 'vue'

export interface Iutil {
  install?: (vue: typeof Vue) => void;
  /** 判断数据是否为空 */
  isNoData: (data:any) => boolean;
  /** url序列参数转化为对象，取云之家自动拼的参数 */
  queryParse: (url: typeof window.location.href) => null | object;
  /** 获取云之家业务参数方法，因为云之家待办参数拼法有问题：
   * 移动端云之家拼参时业务参数拼在第二个问号后面 
   * web端云之家拼参是拼在一起的
   * */
  queryParse1: (url: typeof window.location.href) => null | object;
  /** 获取云之家业务参数方法，因为云之家待办参数拼法有问题：
  *  移动端云之家拼参时业务参数拼在第二个问号后面
  *  web端云之家拼参是拼在一起的
  *  属于queryParse1的升级版 */
  queryParse2: (url: typeof window.location.href) => null | object;
  /** 只是取参数，不判断是不是待办，因为公共号没有sourceid */
  queryParseForBusiness: (url: typeof window.location.href) => null | object;
  /** 判断设备处于PC还是移动端 */
  mobileTest: () => boolean;
  /** 判断手机类型 */
  getMobile: () => 'Android' | 'IOS' | undefined;
  /** 云之家打开人员信息 */
  openPerson: (openId: string) => void;
  /** 判断年份是否是闰年：
   * 1.年份能被4整除，但不能被100整除
   * 2.年份能被400整除 */
  isLeap: (year: number) => boolean;
  /** 校验身份证号：
  * 返回1代表正确，其余返回错误信息 */
  isSfz: (idcard: string) => string | number;
  /** 验证手机号格式是否正确 */
  isPhoneAvailable: (phone: string) => boolean;
  /** 获取当前时间前进/后退几天 */
  getToday: (n: number) => string;
  /** 获取特定时间前进/后退几天 */
  getSomeDay: (init: string, n: number) => string;
  /**
   * @init {init} 日期字符串
   * 获取特定时间下一天
   */
  getNextDay: (init: string) => string;
  /**
   * @init {init} 日期字符串
   * 获取特定时间下一天
   */
  getPreDay: (init: string) => string;
  /**
   * @date 日期字符串
   * 获取周几
   */
  getWeekDay: (date: string) => string;
  /**
   * @date 日期字符串
   * 获取周几
   */
  getMonthFirstDay: (date: any) => string;
  /**
   * @date 日期字符串
   * 获取周几
   */
  getMonthLastDay: (date: any) => string;
  /**
   * @date 日期字符串
   * 获取某月第一天date对象
   */
  getMonthFirstDate: (date: any) => Date;
  /**
   * @date 日期字符串
   * 获取某月最后一天date对象
   */
  getMonthLastDate: (date: any) => Date;
  /**
   * @date 日期字符串
   * 获取上个月的第一天date对象
   */
  getPrevMonthFirstDate: (date: any) => Date;
  /**
   * @date 日期字符串
   * 获取下个月的第一天date对象
   */
  getNextMonthFirstDate: (date: any) => Date;
  /**
   * @startDate 开始日期字符串
   * @endDate 结束日期字符串符串
   * 2019-03-14(周四)至2019-03-15(周五)
   */
  getTimeRangStr: (startDate: string,endDate:string) => string
  /**
   * @startDate 开始日期字符串
   * @endDate 结束日期字符串符串
   * 2019-03-14(周四)至2019-03-15(周五)换行
   */
  getTimeRangStr2: (startDate: string,endDate:string) => string
  /**
   * @startDate 开始日期字符串
   * @endDate 结束日期字符串符串
   * 2019-03-14(周四) 12:11—12:12
   */
  getTimeRangStr3: (startDate: string,endDate:string) => string
  /**
   * @date 日期字符串
   * 2018-12-20 周三
   */
  getDateStr: (date:string) => string
  /**
   * @date 日期字符串
   * 2018-12-20 (周三)
   */
  getDateStr2: (date:string) => string
  /**
   * @date 日期字符串
   * 08-20(周四)
   */
  getDateStr3: (date:string) => string
  /**
   * @time 年月日时分秒字符
   * 将年月日时分秒字符串截取成年月日字符串
   */
  changeTimeToDate: (time:string) => string
  /**
   * @num 像素单位
   * 由于echarts直接写px时，无法自适应，需要乘dpr
   */
  pxToRem: (num:number) => number
  /**
   * @substring 字符串
   * 判断输入框是否有表情
   */
  isEmojiCharacter: (substring:string) => boolean | undefined
  /**
   * @date 日期
   * @fmt 日期格式
   * 日期格式化
   */
  dateFormat: (date: Date, fmt:any) => string
  /**
   * @name 参数的名称
   * 删除url上的参数
   */
  delUrlParams: (name:string) => void
  /**
   * @name 参数的名称
   * 获取url上的参数
   */
  getSearchParams: (name:string) => void
  /**
   * @name 参数的名称
   * 是否是pc端
   */
  isPc: (name:string) => boolean
  /**
   * @name 参数的名称
   * 是否是微信端
   */
  isWechat: () => boolean
  /**
   * @arr 数组
   * @group 划分组的数量
   * 一维数组转为二维数组
   */
  resetArr: (arr: any[], group: number) => any[]
  /**
   * @title 标题名
   * 设置标题
   */
  setTitle: (title:string) => void
  /**
   * @num 数字(小数)
   * @dec 小数点后的位数
   * 四舍五入
   */
  Mathround: (num: number, dec: number) => number
  /**
   * 清空v-scroll-cache自定义指令中的缓存的当前页面位置
   */
  clearPageScrollDistance: (vm: any) => void
}