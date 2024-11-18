import React from 'react'
import Image from "next/image";

const Banner = () => {
    return (
        <section id={'main'}>
            <h1 className={'text-[13rem] leading-[1.1] indent-56 mt-32'}>
                <span className={'font-bold'}>Хай</span>, это<br/>
                <span className={'relative bg-green-700/70'}>
                    Снэпыч
                    <span className={'cursor-pointer'}/>
                </span>
            </h1>
            <div className={'grid grid-cols-8 w-full gap-4'}>
                <Image className={'rounded-3xl overflow-hidden col-span-1 self-end mb-8'} src={'/banner.webp'} width={200}
                       height={200} alt={'banner'}></Image>
                <div className={'col-span-1'}></div>
                <div className={'col-span-2 flex flex-col justify-between pt-20'}>
                    <h2 className={"text-sm"}>сервис для легкого создания<br/>коммерческих предложений</h2>
                    <h3 className={'text-xl'}>Упростите процесс создания коммерческих предложений: сервис поможет вам <span className={'green-text'}>быстро</span> разработать
                        профессиональные и персонализированные предложения, которые впечатлят ваших клиентов и <span className={'green-text'}>увеличат
                        продажи</span>.</h3>
                </div>
                <div className={'col-span-2'}>
                    <button
                        className={'mt-[-20px] ml-[-70px] border-2 border-black rounded-full h-44 w-44 text-2xl rotate-[-45deg] bg-white hover:bg-black hover:text-white'}>
                        Try it!
                    </button>
                </div>
                <Image className={'rounded-3xl overflow-hidden col-span-2 justify-end'} src={'/tmpphoto.webp'}
                       width={460}
                       height={460} alt={'banner'}></Image>
            </div>
        </section>
    )
}
export default Banner
