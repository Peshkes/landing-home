import React from 'react'

const Footer = () => {
    return (
        <section className={'bg-black text-white flex px-6 py-12 text-sm md:text-lg flex-wrap md:flex-nowrap'}>
            <div className={'text-left w-[40%] md:w-full flex items-center'}>
                <p>Селектор языков</p>
            </div>
            <div className={'text-center w-full flex items-center justify-center order-1 md:order-none mt-10 md:mt-0'}>
                <p>© 2024 Все права защищены</p>
            </div>
            <div className={'text-right w-[60%] md:w-full'}>
                <p>Политика конфиденциальности</p>
                <p>Публичная оферта</p>
            </div>
        </section>
    )
}
export default Footer
