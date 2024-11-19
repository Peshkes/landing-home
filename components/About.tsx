import React from 'react'
import Image from "next/image";

const About = () => {
    return (
        <section id={'about'} className={'bg-black text-white pt-0 lg:pt-10'}>
            <div className={'grid grid-rows-4 grid-cols-2 lg:grid-rows-2 lg:grid-cols-4 w-full gap-4 lg:gap-8 items-end'}>
                <div className={'col-span-2 lg:col-span-1 row-span-1 -order-1 lg:order-none self-start pt-10 lg:pt-0'}>
                    <h3 className={'text-4xl lg:text-7xl mt-11 lg:mb-20 flex '}>
                        <span className={'text-2xl lg:text-5xl'}>(03)</span>
                        <span className="ml-20">О НАС</span>
                    </h3>
                </div>
                <div
                    className={'relative w-full col-span-1 row-span-2 rounded-3xl border-2 h-[83%] lg:h-[75%] p-3 mg:p-5 lg:p-6 flex flex-col justify-between text-sm lg:text-lg'}>
                    <p className={'text-xl m-0 text-right'}>12</p>
                    <p>Sample text</p>
                </div>
                <div
                    className={'relative w-full h-full col-span-1 row-span-1 rounded-3xl border-2 flex justify-center items-center pt-2 bg-white'}>
                    <Image className={"w-[40%]"} src={'/vp_black.webp'} alt={'about'} width={150} height={250}/>
                    <div
                        className="absolute top-0 left-0 w-24 h-24 lg:w-[50%] lg:h-48 bg-black m-[-4px]"
                        style={{
                            clipPath: 'polygon(0 100%, 100% 0, 0 0)',
                        }}
                    />
                    <button
                        className={'absolute top-[-15px] left-[-15px] lg:top-[-20px] lg:right-[-20px] border-2 border-white bg-transparent rounded-full h-12 w-12 lg:h-24 lg:w-24 text-2xl lg:text-4xl rotate-[-135deg] hover:bg-white hover:text-black'}>
                        →
                    </button>
                    <p className={'text-xl m-0 absolute right-3 top-3 text-black'}>13</p>
                </div>
                <Image className={'col-span-1 row-span-2 rounded-3xl border-2 border-white w-full'}
                       src={'/tmp_about.webp'} alt={'about'}
                       width={150} height={300}/>
                <div className={'relative w-full col-span-1 row-span-1 rounded-3xl border-2 h-full p-3 md:p-5 lg:p-6 flex flex-col justify-between text-sm lg:text-lg'}>
                    <p className={'text-xl m-0 text-right'}>11</p>
                    <p>Sample text</p>
                </div>
            </div>
        </section>
    )
}
export default About
