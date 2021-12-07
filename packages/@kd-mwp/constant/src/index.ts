import Vue from 'vue'
import { Iconstant } from './type'
const roleConstant = {
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
export const $constant: Iconstant = {
  // 角色
  roles: {
    roleConstant,
    roleText: {
      js001: '平台管理员',
      js002: '业务（机构）管理员',
      js003: '志愿者',
      js004: '医生',
      js005: '护士',
      js006: '药剂师',
      js007: '影像师',
      js008: '检验师',
      js009: '健康从业者'
    },
    doctorRoles: ['js004', 'js005', 'js006', 'js007', 'js008', 'js009']
  }
}
export function install (vue: typeof Vue) {
  vue.prototype.$constant = $constant
}
// 默认导出
export default $constant
