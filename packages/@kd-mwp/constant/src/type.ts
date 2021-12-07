import Vue from 'vue'
// s001是平台管理员，js002是业务（机构）管理员
// 枚举键
enum enumKeys {
  ADMIN = 'ADMIN',
  BIZ_ADMIN = 'BIZ_ADMIN',
  VOLUNTEER = 'VOLUNTEER',
  DOCTOR = 'DOCTOR',
  NURSE = 'NURSE',
  DRUGGIST = 'DRUGGIST',
  PHOTOER = 'PHOTOER',
  CHECKER = 'CHECKER',
  HEALTHER = 'HEALTHER'
}
type keys = Record<enumKeys, string>
export interface Iconstant {
  /** vue注册插件 */
  install?: (vue: typeof Vue) => void;
  roles: {
    roleConstant: keys
  }
}