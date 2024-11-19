import React from 'react'

const Footer = () => {
    return (
        <section className={'bg-black text-white flex px-6 py-12 text-sm lg:text-lg flex-wrap lg:flex-nowrap'}>
            <div className={'text-left w-[40%] lg:w-full flex items-center'}>
                <p>Селектор языков</p>
            </div>
            <div className={'text-center w-full flex items-center justify-center order-1 lg:order-none mt-10 lg:mt-0'}>
                <p>© 2024 Все права защищены</p>
            </div>
            <div className={'text-right w-[60%] lg:w-full'}>
                <p>Политика конфиденциальности</p>
                <p>Публичная оферта</p>
            </div>
        </section>
    )
}
export default Footer
