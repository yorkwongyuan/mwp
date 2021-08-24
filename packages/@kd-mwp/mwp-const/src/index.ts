'use strict';

class MwpConst {
    static eventName: string;
    static ListenerCount(eventName: string) {
        MwpConst.eventName = eventName
    };
}

module.exports = MwpConst
