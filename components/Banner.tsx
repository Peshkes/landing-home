import React from 'react'
import Image from "next/image";

const Banner = () => {
    return (
        <section id={'main'}>
            <h1 className={'text-7xl md:text-[13rem] leading-[1.1] md:indent-56 mt-20 md:mt-32'}>
                <span className={'font-bold'}>Хай</span>, это<br/>
                <span className={'ml-12 relative bg-green-700/70 md:ml-0'}>
                    Снэпыч
                    <span className={'cursor-pointer'}/>
                </span>
            </h1>
            <div className={'grid grid-cols-8 w-full gap-8'}>
                <Image className={'rounded-3xl overflow-hidden col-span-3 md:col-span-1 md:self-end mb-8'} src={'/banner.webp'} width={200}
                       height={200} alt={'banner'}></Image>
                <div className={'hidden md:block md:col-span-1'}></div>
                <div className={'-order-1 md:order-none mr-[-50px] md:mr-0 col-span-5 md:col-span-2 flex flex-col justify-between pt-20'}>
                    <h2 className={"text-sm"}>сервис для легкого создания<br/>коммерческих предложений</h2>
                    <h3 className={'text-xl mr-[-100px] md:mr-0 mt-10 md:mt-0'}>Упростите процесс создания коммерческих предложений: сервис поможет вам <span className={'green-text'}>быстро</span> разработать
                        профессиональные и персонализированные предложения, которые впечатлят ваших клиентов и <span className={'green-text'}>увеличат
                        продажи</span>.</h3>
                </div>
                <div className={'-order-1 md:order-none col-span-3 md:col-span-2'}>
                    <button
                        className={'relative mt-[-10px] md:mt-[-20px] ml-[-15px] md:ml-[-70px] border-2 border-black rounded-full h-32 w-32 md:h-44 md:w-44 text-2xl bg-white hover:bg-black hover:text-white z-10'}>
                        <p className={"rotate-[-45deg]"}>Try it!</p>
                    </button>
                </div>
                <Image className={'rounded-3xl overflow-hidden col-span-5 md:col-span-2 justify-end mt-10 md:mt-0'} src={'/tmpphoto.webp'}
                       width={460}
                       height={460} alt={'banner'}></Image>
            </div>
        </section>
    )
}
export default Banner
