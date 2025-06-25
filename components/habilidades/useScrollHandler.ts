'use client';

import { useCallback } from 'react';

export const useScrollHandler = () => {
    const handleWheel = useCallback((e: React.WheelEvent, scrollRef: React.RefObject<HTMLDivElement>) => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const { scrollTop, scrollHeight, clientHeight } = container;

            const isAtTop = scrollTop === 0;
            const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;

            if (e.deltaY < 0 && isAtTop) {
                return;
            }

            if (e.deltaY > 0 && isAtBottom) {
                return;
            }

            e.preventDefault();
            e.stopPropagation();
            container.scrollTop += e.deltaY;
        }
    }, []);

    return { handleWheel };
};
