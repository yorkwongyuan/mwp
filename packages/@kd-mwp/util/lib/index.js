"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.install = void 0;
function install(vue) {
    vue.prototype.$util = {
        getName: function (str) {
            return str;
        }
    };
}
exports.install = install;
