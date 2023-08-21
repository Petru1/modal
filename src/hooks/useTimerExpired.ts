import {useEffect, useState} from "react";

const useTimerExpired = (duration: number, shouldStart: boolean): boolean => {
    const [isExpired, setIsExpired] = useState(false);

    useEffect(() => {
        let timerIdRef;
        if (shouldStart) {
            timerIdRef = setTimeout(() => {
                setIsExpired(true);
            }, duration);
        } else {
            clearTimeout(timerIdRef);
            timerIdRef = null;
            setIsExpired(false);
        }

        return () => {
            if (timerIdRef !== null) {
                clearTimeout(timerIdRef);
            }
        };
    }, [duration, shouldStart]);

    return isExpired;
};

export default useTimerExpired;