import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";
import Image from "next/image";

const AboutPage = () => {
    return (
        <>
            <Breadcrumb
                pageName="What's in the Park"
                description=""
            />

            <section id="about" className="pt-8 md:pt-10 lg:pt-14">
                <div className="container">
                    <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
                        <div className="-mx-4 flex flex-wrap">
                            <div className="w-full px-4 lg:w-1/2">
                                <SectionTitle
                                    title="Family Activities"
                                    paragraph1=""
                                    paragraph2=""
                                    paragraph3=""
                                    mb="0px"
                                    mt="0px"
                                />
                                <div className="text-justify">
                                    To be added
                                </div>
                            </div>

                            <div className="w-full px-4 lg:w-1/2">
                                <div
                                    className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px]"
                                    data-wow-delay=".2s"
                                >
                                    <div>
                                        <Image
                                            src="/images/whats-here/clkfestival2019c.jpg"
                                            alt="about-image"
                                            fill
                                            className="mx-auto max-w-full lg:mr-0"
                                        />
                                    </div>
                                </div>
                                {/*<div className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px]  text-sm">*/}
                                {/*</div>*/}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutPage;
