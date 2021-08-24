(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MwpConst = void 0;
    var MwpConst = /** @class */ (function () {
        function MwpConst() {
            this.age = 12;
        }
        MwpConst.ListenerCount = function (eventName) {
            MwpConst.eventName = eventName;
        };
        ;
        MwpConst.eventName = 'york';
        return MwpConst;
    }());
    exports.MwpConst = MwpConst;
});
