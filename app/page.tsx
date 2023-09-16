import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import {Inter} from "@next/font/google";
import GoogleMap from "@/components/GoogleMap";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
    return (
        <>
            <ScrollUp/>
            <Hero/>
            <GoogleMap/>
            <Features/>
            <Video/>
            <Testimonials/>
        </>
    );
}
