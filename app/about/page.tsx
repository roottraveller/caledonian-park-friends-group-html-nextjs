import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import AboutSectionThree from "@/components/About/AboutSectionThree";

const AboutPage = () => {
    return (
        <>
            <Breadcrumb
                pageName="About CPFG"
                description=""
            />
            <AboutSectionOne/>
            <AboutSectionTwo/>
            <AboutSectionThree/>
        </>
    );
};

export default AboutPage;
