"use client";

import React, { useEffect, useState } from "react";
import MenuLink from "@/components/header/MenuLink";

const sections = [
    { id: "main", title: "Главная" },
    { id: "features", title: "Особенности" },
    { id: "pricing", title: "Цены" },
    { id: "about", title: "О нас" },
];

const Navigation = () => {
    const [activeSection, setActiveSection] = useState<string | null>("main");
    const [isMobile, setIsMobile] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.8 }
        );

        sections.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const handleMenuToggle = () => setMenuOpen((prev) => !prev);

    const handleSectionClick = (id: string) => {
        setActiveSection(id);
        setMenuOpen(false); // Закрываем меню после выбора
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" }); // Скроллим к секции
        }
    };

    return (
        <nav className="relative flex items-center justify-center border-2 rounded-full border-black px-6 bg-black md:bg-white">
            {isMobile ? (
                <div className="w-full">
                    <div className="flex justify-between items-center text-white">
                        <div className="text-lg" onClick={handleMenuToggle}>
                            {sections.find((section) => section.id === activeSection)?.title}
                        </div>
                    </div>
                    {menuOpen && (
                        <div className="absolute top-12 right-0 w-44 rounded-3xl overflow-hidden z-10 bg-white border-2 border-black">
                            {sections.map(({ id, title }) => (
                                <div
                                    key={id}
                                    onClick={() => handleSectionClick(id)}
                                    className={`px-4 py-2 ${
                                        activeSection === id
                                            ? "bg-black text-white font-semibold"
                                            : "hover:bg-gray-100"
                                    }`}
                                >
                                    {title}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ) : (
                sections.map(({ id, title }) => (
                    <MenuLink id={id} isActive={activeSection === id} key={id}>
                        {title}
                    </MenuLink>
                ))
            )}
        </nav>
    );
};

export default Navigation;
