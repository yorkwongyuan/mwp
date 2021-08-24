declare enum appointmentENUM {
    /** This is a description of the foo function. */
    PENDING = "PENDING"
}
interface IMwpConst {
    /** 预约常量 */
    appointment: {
        [k in appointmentENUM]: appointmentENUM;
    };
    /** This is a description of the foo function. */
    getName: (str: number) => number;
}
export declare const MwpConst: IMwpConst;
export {};
