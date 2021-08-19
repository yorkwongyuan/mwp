'use strict';

module.exports = mwpHttp;

function mwpHttp() {
    // TODO
    this.getName = function (params) {
        console.log('this.getName -> params', params)
        return params
    }
}
