// 枚举所有类型
enum appointmentENUM {
    /** This is a description of the foo function. */
    PENDING = "PENDING"
}
interface IMwpConst {
    // 预约常量
    appointment: {
        /** This is a description of the foo function. */
        [k in appointmentENUM]: appointmentENUM;
    };
    /** This is a description of the foo function. */
    getName: (str: number) => number
}
export const MwpConst: IMwpConst = {
    appointment: {
        // 待确认
        PENDING: appointmentENUM.PENDING
    },
    getName (str) {
        return str
    }
}
