"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MwpConst = void 0;
// 枚举所有类型
var appointmentENUM;
(function (appointmentENUM) {
    /** This is a description of the foo function. */
    appointmentENUM["PENDING"] = "PENDING";
})(appointmentENUM || (appointmentENUM = {}));
exports.MwpConst = {
    appointment: {
        // 待确认
        PENDING: appointmentENUM.PENDING
    },
    getName: function (str) {
        return str;
    }
};
