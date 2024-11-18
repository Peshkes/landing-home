'use client';

import React from 'react'

const ScrollingLine = () => {
    return (
        <div className="relative overflow-hidden w-full py-5">
            <div className="flex gap-28 text-2xl scrolling-text-animation whitespace-nowrap">
                <span className="inline-block">быстрое создание коммерческих предложений</span>
                <span className="inline-block">→</span>
                <span className="inline-block">попробуй бесплатно</span>
            </div>
        </div>
    );
};
export default ScrollingLine
