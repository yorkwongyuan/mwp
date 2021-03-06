import Vue from 'vue'
// s001是平台管理员，js002是业务（机构）管理员
// 枚举键
// enum enumKeys {
//   /** 平台管理员 */
//   ADMIN = 'ADMIN',
//   /** 业务管理员 */
//   BIZ_ADMIN = 'BIZ_ADMIN',
//   /** 志愿者 */
//   VOLUNTEER = 'VOLUNTEER',
//   /** 医生 */
//   DOCTOR = 'DOCTOR',
//   /** 护士 */
//   NURSE = 'NURSE',
//   /** 药剂师 */
//   DRUGGIST = 'DRUGGIST',
//   /** 影像师 */
//   PHOTOER = 'PHOTOER',
//   /** 检验师 */
//   CHECKER = 'CHECKER',
//   /** 健康从业者 */
//   HEALTHER = 'HEALTHER'
// }

export type enumkeys = 'ADMIN' |'BIZ_ADMIN' |'VOLUNTEER' |'DOCTOR' |'NURSE' |'DRUGGIST' |'PHOTOER' |'CHECKER' |'HEALTHER'
export type enumValues = 'js001' |'js002' |'js003' |'js004' |'js005' |'js006' |'js007' |'js008' |'js009'

type TroleConstant = {
  [key in enumkeys]: string
}
type TroleText = {
  [key in enumValues]: string
}
export interface Iconstant {
  /** vue注册插件 */
  install?: (vue: typeof Vue) => void;
  roles: {
    roleConstant: TroleConstant,
    roleText: TroleText,
    doctorRoles: enumValues[]
  }
}