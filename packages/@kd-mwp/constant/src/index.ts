import Vue from 'vue'
import { Iconstant } from './type'

export const $constant: Iconstant = {
  install (vue: typeof Vue) {
    vue.prototype.$constant = $constant
  },
  roles: {
    roleConstant: {
      ADMIN: 'js001',
      BIZ_ADMIN: 'js002',
      // s001是平台管理员，js002是业务（机构）管理员
      VOLUNTEER: 'js003',
      DOCTOR: 'js004',
      NURSE: 'js005',
      DRUGGIST: 'js006',
      PHOTOER: 'js007',
      CHECKER: 'js008',
      HEALTHER: 'js009'
    }
  }
}
// 默认导出
export default $constant
