"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$util = void 0;
exports.$util = {
    isNoData: function (data) {
        return ['undefined', undefined, null, false, 'null', '', ' '].includes(data);
    },
    queryParse: function (url) {
        if (url === void 0) { url = window.location.href; }
        if (url.indexOf('?') === -1) {
            return null;
        }
        var str = url.split('?')[1].split('#')[0];
        var items = str.split('&');
        var result = {};
        var arr = [];
        for (var i = 0; i < items.length; i++) {
            arr = items[i].split('=');
            result[arr[0]] = arr[1];
        }
        return result;
    },
    queryParse1: function (url) {
        if (url === void 0) { url = window.location.href; }
        if (url.indexOf('sourceid') === -1) {
            return null;
        }
        var str = '';
        if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
            str = url.split('?')[2];
        }
        else {
            str = url.split('?')[1].split('#')[0];
        }
        var items = str.split('&');
        var result = {};
        var arr = [];
        for (var i = 0; i < items.length; i++) {
            arr = items[i].split('=');
            result[arr[0]] = arr[1];
        }
        return result;
    },
    queryParse2: function (url) {
        if (url === void 0) { url = window.location.href; }
        if (url.indexOf('sourceid') === -1) {
            return null;
        }
        return this.util.queryParseForBusiness(url);
    },
    install: function (vue) {
        vue.prototype.$util = exports.$util;
    }
};
exports.default = exports.$util;
