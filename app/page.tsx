import Header from "@/components/header/Header";
import Banner from "@/components/Banner";
import Features from "@/components/Features";
import ScrollingLine from "@/components/ScrollingLine";
import Prices from "@/components/pricing/Prices";
import Footer from "@/components/Footer";
import About from "@/components/About";

export default function Home() {
    return (
        <div className={'max-w-[1920px] my-0 mx-auto'}>
            <Header/>
            <Banner/>
            <ScrollingLine/>
            <Features/>
            <Prices/>
            <About/>
            <ScrollingLine/>
            <Footer/>
        </div>
    );
}
