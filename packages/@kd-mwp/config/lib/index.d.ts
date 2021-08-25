interface Iconfig {
    /** 各个环境域名 */
    baseUrl: {
        /** 预发布环境地址 */
        preproduction: string;
        /** 正式环境地址 */
        www: string;
        /** 开发环境地址 */
        dev: string;
    };
    /** 上传地址,主要用于腾讯云图片上传 */
    uploadUrl: {
        /** 预发布环境上传地址 */
        preproduction: string;
        /** 正式环境上传地址 */
        www: string;
        /** 开发环境上传地址 */
        dev: string;
    };
    /** websocket连接地址 */
    websocketUrl: {
        /** 预发布环境地址 */
        preproduction: string;
        /** 正式环境地址 */
        www: string;
        /** 开发环境地址 */
        dev: string;
        /** 正式移动端 */
        mp: string;
    };
}
declare const config: Iconfig;
export default config;
