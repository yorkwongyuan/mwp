import Vue from 'vue';
declare enum enumKeys {
    ADMIN = "ADMIN",
    BIZ_ADMIN = "BIZ_ADMIN",
    VOLUNTEER = "VOLUNTEER",
    DOCTOR = "DOCTOR",
    NURSE = "NURSE",
    DRUGGIST = "DRUGGIST",
    PHOTOER = "PHOTOER",
    CHECKER = "CHECKER",
    HEALTHER = "HEALTHER"
}
declare type keys = Record<enumKeys, string>;
export interface Iconstant {
    /** vue注册插件 */
    install?: (vue: typeof Vue) => void;
    roles: {
        roleConstant: keys;
    };
}
export {};
