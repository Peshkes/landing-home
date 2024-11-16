'use client';

import React from 'react'

const ScrollingLine = () => {
    return (
        <div className="relative overflow-hidden w-full py-5">
            <div className="flex gap-28 text-2xl scrolling-text-animation w-full">
                <span>быстрое создание коммерческих предложений</span>
                <span>→</span>
                <span>попробуй бесплатно</span>
            </div>
        </div>
    )
}
export default ScrollingLine
