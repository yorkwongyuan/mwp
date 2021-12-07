import Vue from 'vue'
// s001是平台管理员，js002是业务（机构）管理员
// 枚举键
enum enumKeys {
  /** 平台管理员 */
  ADMIN = 'ADMIN',
  /** 业务管理员 */
  BIZ_ADMIN = 'BIZ_ADMIN',
  /** 志愿者 */
  VOLUNTEER = 'VOLUNTEER',
  /** 医生 */
  DOCTOR = 'DOCTOR',
  /** 护士 */
  NURSE = 'NURSE',
  /** 药剂师 */
  DRUGGIST = 'DRUGGIST',
  /** 影像师 */
  PHOTOER = 'PHOTOER',
  /** 检验师 */
  CHECKER = 'CHECKER',
  /** 健康从业者1 */
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