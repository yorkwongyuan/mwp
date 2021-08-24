interface It {
    eventName: string;
    ListenerCount: () => void;
}
export const MwpConst: It = {
    eventName: '12',
    ListenerCount () {
        console.log('12312321')
    }
}
