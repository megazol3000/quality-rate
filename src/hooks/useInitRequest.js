import { useEffect } from 'react';

export const useInitRequest = (setDataFromOld, getData) => {
    useEffect(() => {
        const func = (event) => {
            if (typeof event.data === 'number') {
                setDataFromOld(event.data);
                getData('?repairId=' + event.data);
            }
        };
        window.addEventListener("message", func);

        return () => {
            window.removeEventListener("message", func);
        }
    });
}
