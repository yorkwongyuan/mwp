import Vue from 'vue';
export declare type enumkeys = 'ADMIN' | 'BIZ_ADMIN' | 'VOLUNTEER' | 'DOCTOR' | 'NURSE' | 'DRUGGIST' | 'PHOTOER' | 'CHECKER' | 'HEALTHER';
export declare type enumValues = 'js001' | 'js002' | 'js003' | 'js004' | 'js005' | 'js006' | 'js007' | 'js008' | 'js009';
declare type TroleConstant = {
    [key in enumkeys]: string;
};
declare type TroleText = {
    [key in enumValues]: string;
};
export interface Iconstant {
    /** vue注册插件 */
    install?: (vue: typeof Vue) => void;
    roles: {
        roleConstant: TroleConstant;
        roleText: TroleText;
        doctorRoles: enumValues[];
    };
}
export {};
