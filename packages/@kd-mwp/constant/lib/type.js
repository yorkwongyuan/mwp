"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
}); // s001是平台管理员，js002是业务（机构）管理员
// 枚举键

var enumKeys;

(function (enumKeys) {
  enumKeys["ADMIN"] = "ADMIN";
  enumKeys["BIZ_ADMIN"] = "BIZ_ADMIN";
  enumKeys["VOLUNTEER"] = "VOLUNTEER";
  enumKeys["DOCTOR"] = "DOCTOR";
  enumKeys["NURSE"] = "NURSE";
  enumKeys["DRUGGIST"] = "DRUGGIST";
  enumKeys["PHOTOER"] = "PHOTOER";
  enumKeys["CHECKER"] = "CHECKER";
  enumKeys["HEALTHER"] = "HEALTHER";
})(enumKeys || (enumKeys = {}));