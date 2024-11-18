import React from 'react'
import Image from "next/image";

const About = () => {
    return (
        <section id={'about'} className={'bg-black text-white'}>
            <div className={'grid grid-rows-2 grid-cols-4 w-full gap-8 items-end'}>
                <div className={'col-span-1 row-span-1 self-start'}>
                    <h3 className={'text-7xl mt-11 mb-20 flex'}>
                        <span className={'text-5xl'}>(03)</span>
                        <span className="ml-20">О НАС</span>
                    </h3>
                </div>
                <div
                    className={'relative w-full col-span-1 row-span-2 rounded-3xl border-2 h-[75%] p-6 flex flex-col justify-between'}>
                    <p className={'text-xl m-0 text-right'}>12</p>
                    <p>Sample text</p>
                </div>
                <div
                    className={'relative w-full h-full col-span-1 row-span-1 rounded-3xl border-2 flex justify-center items-center pt-2 bg-white'}>
                    <Image src={'/vp_black.webp'} alt={'about'} width={150} height={250}/>
                    <div
                        className="absolute top-0 left-0 w-[50%] h-48 bg-black m-[-4px]"
                        style={{
                            clipPath: 'polygon(0 100%, 100% 0, 0 0)',
                        }}
                    />
                    <button
                        className={'absolute top-[-20px] left-[-20px] border-2 border-white bg-transparent rounded-full h-24 w-24 text-4xl rotate-[-135deg] hover:bg-white hover:text-black'}>
                        →
                    </button>
                    <p className={'text-xl m-0 absolute right-6 top-6 text-black'}>13</p>
                </div>
                <Image className={'col-span-1 row-span-2 rounded-3xl border-2 border-white w-full'}
                       src={'/tmp_about.webp'} alt={'about'}
                       width={150} height={300}/>
                <div className={'relative w-full col-span-1 row-span-1 rounded-3xl border-2 h-full p-6 flex flex-col justify-between'}>
                    <p className={'text-xl m-0 text-right'}>11</p>
                    <p>Sample text</p>
                </div>
            </div>
        </section>
    )
}
export default About
