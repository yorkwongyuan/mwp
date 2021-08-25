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
}