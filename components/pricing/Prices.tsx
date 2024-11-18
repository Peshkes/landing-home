import React from 'react'
import Image from "next/image";
import Tabs from "@/components/pricing/Tabs";

const Prices = () => {
    return (
        <section id={'pricing'} className={'flex flex-col md:flex-row'}>
            <div className={'w-full'}>
                <h3 className={'text-4xl md:text-7xl mt-11 flex'}>стоимость<br/>подписок</h3>
                <p className={'text-2xl md:text-5xl mb-20'}>(02)</p>
                <div className={'relative w-full md:w-fit text-center flex justify-end md:block mt-[-150px] md:mt-0 pr-2 md:pr-0'}>
                    <Image className={'rounded-full w-[50%] border-2 border-black'} src={'/prices.webp'} alt={'prices'}
                           width={500} height={500}></Image>
                    <button
                        className={'absolute top-[-30px] md:right-[-30px] border-2 border-black bg-transparent bg-white rounded-full h-24 w-24 text-4xl rotate-[-45deg] hover:bg-black hover:text-white'}>
                        →
                    </button>
                    <button
                        className={'hidden md:block mt-[-30px] border-2 border-black rounded-full h-44 w-44 text-2xl rotate-[-45deg] bg-white hover:bg-black hover:text-white'}>
                        Try it!
                    </button>
                </div>
            </div>
            <div className={'w-full pt-6 md:pt-0'}>
                <Tabs/>
            </div>
        </section>
    )
}
export default Prices
