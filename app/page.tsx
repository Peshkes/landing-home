import Header from "@/components/header/Header";
import Banner from "@/components/banner/Banner";
import AboutUs from "@/components/about-us/AboutUs";
import ScrollingLine from "@/components/ScrollingLine";

export default function Home() {
    return (
        <div className={'max-w-[1920px] my-0 mx-auto'}>
            <Header/>
            <Banner/>
            <ScrollingLine/>
            <AboutUs/>
        </div>
    );
}
