import React from 'react'
import Image from "next/image";
import Tabs from "@/components/pricing/Tabs";

const Prices = () => {
    return (
        <section id={'pricing'} className={'flex'}>
            <div className={'w-full'}>
                <h3 className={'text-7xl mt-11  flex'}>стоимость<br/>подписок</h3>
                <p className={'text-5xl mb-20'}>(02)</p>
                <div className={'relative w-fit text-center'}>
                    <Image className={'rounded-full border-2 border-black'} src={'/prices.webp'} alt={'prices'}
                           width={500} height={500}></Image>
                    <button
                        className={'mt-[-30px] border-2 border-black rounded-full h-44 w-44 text-2xl rotate-[-45deg] bg-white hover:bg-black hover:text-white'}>
                        Try it!
                    </button>
                    <button
                        className={'absolute top-[-30px] right-[-30px] border-2 border-black bg-transparent rounded-full h-24 w-24 text-4xl rotate-[-45deg] hover:bg-black hover:text-white'}>
                        →
                    </button>
                </div>
            </div>
            <div className={'w-full'}>
                <Tabs/>
            </div>
        </section>
    )
}
export default Prices
