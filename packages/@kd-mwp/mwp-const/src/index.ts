export class MwpConst {
    static eventName: string = 'york';
    static ListenerCount(eventName: string) {
        MwpConst.eventName = eventName
    };
    public age:number
    constructor() {
        this.age = 12
    }
}
