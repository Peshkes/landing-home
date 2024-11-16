import React from 'react'

const Banner = () => {
    return (
        <section id={'main'}>
            <h1 className={'text-[13rem] leading-[1.1] indent-40 mt-72'}>
                <span className={'font-bold'}>Хай</span>, это<br/>
                <span className={'relative bg-green-700/70'}>
                    Снэпич
                    <span className={'cursor-pointer'}/>
                </span>
            </h1>
        </section>
    )
}
export default Banner
