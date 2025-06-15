
export const throttle = (fn: Function, delay: number) => {
    let lastCall = 0;

    const throttling = (...args: any) => {
        const now = Date.now();
        if(now - lastCall >= delay){
            lastCall = now;
            fn.apply(this, args);
        }
    }
    return throttling;
}