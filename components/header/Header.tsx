import React from 'react'
import Navigation from "@/components/header/Navigation";

const Header = () => {
    return (
        <header className={'w-full max-w-[1920px] fixed top-6 flex gap-6 justify-between px-6 z-40'}>
            <button className={'button black-button'}>
                Try it!
            </button>
            <Navigation/>
        </header>
    )
}
export default Header