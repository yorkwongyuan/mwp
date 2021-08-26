"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
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
};
