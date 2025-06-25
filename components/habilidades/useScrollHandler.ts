'use client';

import { useCallback } from 'react';

export const useScrollHandler = () => {
    const handleWheel = useCallback((e: React.WheelEvent, scrollRef: React.RefObject<HTMLDivElement>) => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const { scrollTop, scrollHeight, clientHeight } = container;

            // Verificar si estamos en el inicio o final del scroll
            const isAtTop = scrollTop === 0;
            const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;

            // Si estamos scrolleando hacia arriba y ya estamos arriba, permitir scroll horizontal
            if (e.deltaY < 0 && isAtTop) {
                return; // Permitir scroll horizontal/normal
            }

            // Si estamos scrolleando hacia abajo y ya estamos abajo, permitir scroll horizontal
            if (e.deltaY > 0 && isAtBottom) {
                return; // Permitir scroll horizontal/normal
            }

            // En cualquier otro caso, hacer scroll vertical dentro de la categoría
            e.preventDefault();
            e.stopPropagation();
            container.scrollTop += e.deltaY;
        }
    }, []);

    return { handleWheel };
};
