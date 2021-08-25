
interface Iconfig {
  /** 各个环境域名 */
  baseUrl: {
    /** 预发布环境地址 */
    preproduction: string;
    /** 正式环境地址 */
    www: string;
    /** 开发环境地址 */
    dev: string
  };
  /** 上传地址,主要用于腾讯云图片上传 */
  uploadUrl: {
    /** 预发布环境上传地址 */
    preproduction: string;
     /** 正式环境上传地址 */
    www: string;
    /** 开发环境上传地址 */
    dev: string
  },
  /** websocket连接地址 */
  websocketUrl: {
    /** 预发布环境地址 */
    preproduction: string;
    /** 正式环境地址 */
    www: string;
    /** 开发环境地址 */
    dev: string,
    /** 正式移动端 */
    mp: string
  }
}

const config:Iconfig = {
  baseUrl: {
    dev: 'development.mhealth100.com',
    preproduction: 'preproduction.mhealth100.com',
    www: 'www.mhealth100.com',
  },
  uploadUrl: {
    dev: 'https://dev.mhealth100.com/gateway/zuul/files/upload?overwrite=true',
    preproduction: 'https://preproduction.mhealth100.com/gateway/zuul/files/upload?overwrite=true',
    www: 'https://api.mhealth100.com/gateway/zuul/files/upload?overwrite=true',
  },
  websocketUrl: {
    dev: 'wss://development.mhealth100.com',
    preproduction: 'wss://preproduction.mhealth100.com',
    www: 'wss://wss.mhealth100.com',
    mp: 'wss://wss.mhealth100.com'
  }
}

export default config