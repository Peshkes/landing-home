import React from 'react'
import Image from "next/image";

const Features = () => {
    return (
        <section id={'features'} className={'bg-black text-white'}>
            <h3 className={'text-4xl md:text-7xl mt-11 mb-20 flex'}>
                <span className={'text-2xl md:text-5xl'}>(01)</span>
                <span className=" ml-10 md:ml-40">особенности</span>
            </h3>
            <div className={'grid grid-rows-4 grid-cols-2 md:grid-rows-2 md:grid-cols-4 gap-4 md:gap-8 text-sm md:text-lg'}>
                <div className="col-span-1 row-span-1 flex flex-col justify-end items-start">
                    <button className={'button border-2 border-green-700 text-green-700 font-bold'}>Try it!</button>
                </div>
                <div
                    className="col-span-1 row-span-1 aspect-square rounded-3xl border-2 border-white p-3 md:p-6 flex flex-col justify-between">
                    <p className={'text-xl m-0'}>01</p>
                    <p>Sample text</p>
                </div>
                <div
                    className="relative col-span-1 row-span-1 border-2 border-white bg-white p-3 md:p-6 rounded-3xl flex flex-col justify-between">
                    <p className="text-xl m-0 text-black">02</p>
                    <p className={'text-black'}>Sample text</p>
                    <div
                        className="absolute top-0 right-0 w-20 h-20 md:w-44 md:h-44 bg-black m-[-4px]"
                        style={{
                            clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
                        }}
                    />
                    <button
                        className={'absolute top-[-15px] right-[-15px] md:top-[-20px] md:right-[-20px] border-2 border-white bg-transparent rounded-full h-12 w-12 md:h-24 md:w-24 text-2xl md:text-4xl rotate-[-45deg] hover:bg-white hover:text-black'}>
                        →
                    </button>
                </div>
                <div
                    className="col-span-1 row-span-2 rounded-3xl border-2 border-white p-3 md:p-6 mt-20 md:mt-44 flex flex-col justify-between">
                    <p className={'text-xl m-0'}>03</p>
                    <p>Sample text</p>
                </div>

                <Image
                    className="col-span-1 row-span-1 bg-blue-500 aspect-square rounded-3xl overflow-hidden border-2 border-white flex flex-col justify-between"
                    src={'/features.webp'} alt={'tmp'} width={500} height={500}></Image>
                <div
                    className="col-span-1 row-span-1 rounded-3xl border-2 border-white p-3 md:p-6 flex flex-col justify-between">
                    <p className={'text-xl m-0'}>04</p>
                    <p>Sample text</p>
                </div>
                <div className="col-span-1 row-span-1 hidden">7</div>
            </div>
        </section>
    )
}
export default Features
