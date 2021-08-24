interface Iconfig {
  baseUrl: {
    preproduction: string;
    www: string;
    dev: string
  }
}

export const config:Iconfig = {
  baseUrl: {
    /** 预发布环境地址 */
    preproduction: 'preproduction.mhealth100.com',
    /** 正式环境地址 */
    www: 'www.mhealth100.com',
    /** 开发环境地址 */
    dev: 'development.mhealth100.com'
  }
}