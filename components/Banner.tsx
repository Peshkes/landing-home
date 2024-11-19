import React from 'react'
import Image from "next/image";

const Banner = () => {
    return (
        <section id={'main'}>
            <h1 className={'text-7xl md:text-[6rem] lg:text-[9rem] xl:text-[12rem] leading-[1.1] lg:indent-56 mt-20 md:mt-32'}>
                <span className={'font-bold'}>Хай</span>, это<br/>
                <span className={'ml-12 relative bg-green-700/70 lg:ml-0'}>
                    Снэпыч
                    <span className={'cursor-pointer'}/>
                </span>
            </h1>
            <div className={'grid grid-cols-8 w-full gap-8'}>
                <Image className={'rounded-3xl overflow-hidden col-span-3 lg:col-span-1 lg:self-end mb-8'} src={'/banner.webp'} width={200}
                       height={200} alt={'banner'}></Image>
                <div className={'hidden lg:block lg:col-span-1'}></div>
                <div className={'-order-1 lg:order-none mr-[-50px] lg:mr-0 col-span-5 lg:col-span-2 flex flex-col justify-between pt-20'}>
                    <h2 className={"text-sm"}>сервис для легкого создания<br/>коммерческих предложений</h2>
                    <h3 className={'text-xl mr-[-100px] md:mr-0 mt-10 lg:mr-[-150px] lg:mt-16'}>Упростите процесс создания коммерческих предложений: сервис поможет вам <span className={'green-text'}>быстро</span> разработать
                        профессиональные и персонализированные предложения, которые впечатлят ваших клиентов и <span className={'green-text'}>увеличат
                        продажи</span>.</h3>
                </div>
                <div className={'-order-1 lg:order-none col-span-3 lg:col-span-2'}>
                    <button
                        className={'relative mt-[-10px] lg:mt-[-20px] ml-[-15px] lg:ml-[-70px] border-2 border-black rounded-full h-32 w-32 lg:h-44 lg:w-44 text-2xl bg-white hover:bg-black hover:text-white z-10'}>
                        <p className={"rotate-[-45deg]"}>Try it!</p>
                    </button>
                </div>
                <Image className={'rounded-3xl overflow-hidden col-span-5 lg:col-span-2 justify-end mt-10 lg:mt-0'} src={'/tmpphoto.webp'}
                       width={460}
                       height={460} alt={'banner'}></Image>
            </div>
        </section>
    )
}
export default Banner
