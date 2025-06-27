import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        let mouseX = 0;
        let mouseY = 0;
        let currentX = 0;
        let currentY = 0;
        let rafId;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const animate = () => {
            currentX += (mouseX - currentX) * 0.15;
            currentY += (mouseY - currentY) * 0.15;
            if (cursor) {
                cursor.style.transform = `translate3d(${currentX - 16}px, ${currentY - 16}px, 0)`;
            }
            rafId = requestAnimationFrame(animate);
        };

        document.addEventListener('mousemove', onMouseMove);
        rafId = requestAnimationFrame(animate);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: 42,
                height: 42,
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '2px solid #000',
                boxShadow: '0 0 16px 8px rgba(0,0,0,0.1)',
                pointerEvents: 'none',
                zIndex: 9999,
                backdropFilter: 'blur(2px)',
                transition: 'background 0.2s, border 0.2s',
                mixBlendMode: 'normal',
            }}
        />
    );
};

export default CustomCursor; 