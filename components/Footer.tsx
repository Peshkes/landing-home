import React from 'react'

const Footer = () => {
    return (
        <section className={'bg-black text-white flex px-6 py-12'}>
            <div className={'text-left w-full flex items-center'}>
                <p>Селектор языков</p>
            </div>
            <div className={'text-center w-full flex items-center justify-center'}>
                <p>© 2024 Все права защищены</p>
            </div>
            <div className={'text-right w-full'}>
                <p>Политика конфиденциальности</p>
                <p>Публичная оферта</p>
            </div>
        </section>
    )
}
export default Footer
