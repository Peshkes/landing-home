'use client';

import React, { useState } from 'react';

const tabs = [
    { id: 'tab1', title: 'Вкладка 1', body: 'Содержимое для вкладки 1' },
    { id: 'tab2', title: 'Вкладка 2', body: 'Содержимое для вкладки 2' },
    { id: 'tab3', title: 'Вкладка 3', body: 'Содержимое для вкладки 3' },
];

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('tab1'); // Состояние активной вкладки

    return (
        <div className="h-full flex flex-col">
            <div className="flex">
                {tabs.map(({ id, title }) => (
                    <button
                        key={id}
                        className={`relative px-10 py-6 text-center rounded-t-3xl w-fit ml-[-20px] first-of-type:ml-0 border-b-0 ${
                            activeTab === id
                                ? 'text-white bg-black border-2 border-black z-10'
                                : 'text-black bg-white border-2 border-black'
                        }`}
                        onClick={() => setActiveTab(id)}
                    >
                        {title}
                    </button>
                ))}
            </div>
            <div className="p-10 bg-black text-white flex-1 rounded-b-3xl rounded-tr-3xl">
                {tabs.map(({ id, body }) => (
                    <div key={id} className={activeTab === id ? 'block' : 'hidden'}>
                        {body}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tabs;
