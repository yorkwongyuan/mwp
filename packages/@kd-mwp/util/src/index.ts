import Vue from 'vue'
export function install (vue: typeof Vue) {
  vue.prototype.$util = {
    getName (str: string) {
      return str
    }
  }
}