"use client";

import React, {useEffect, useState} from 'react'
import MenuLink from "@/components/header/MenuLink";

const sections = [
    {id: 'main', title: 'Главная'},
    {id: 'about', title: 'О нас'},
    {id: 'features', title: 'Особенности'},
    {id: 'pricing', title: 'Цены'},
    {id: 'faq', title: 'FAQ'},
];

const Navigation = () => {
    const [activeSection, setActiveSection] = useState<string | null>("main");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {threshold: 0.5}
        );

        sections.forEach(({id}) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);


    return (
        <nav className={'flex border-2 rounded-full border-black px-6'}>
            {sections.map(({id, title}) => (
                <MenuLink id={id} isActive={activeSection === id} key={id}>
                    {title}
                </MenuLink>
            ))}
        </nav>
    )
}
export default Navigation
