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
                                    title="Nature In The Park"
                                    paragraph1=""
                                    paragraph2=""
                                    paragraph3=""
                                    mb="0px"
                                    mt="0px"
                                />
                                <div className="text-justify">
                                    The park is a borough grade 1 nature conservation area, mainly for its woodlands, and offers woodland walks. Extensive tree and shrub planting gives the park its tranquillity and provides habitats for wildlife. In 2010 the Caledonian Park Friends Group planted a small community orchard to add to the biodiversity.
                                    <br/>
                                    <br/>
                                    The Friends are responsible for the watering, pruning and general maintenance of the trees. In autumn 2013, the group developed an area of the park as a nature garden, introducing plants and other features attractive to bees, butterflies and birds, a hibernaculum and loggery.
                                    <br/>
                                    <br/>
                                    We are hoping to have an updated survey of the trees in the park next year.
                                    <br/>
                                    <br/>
                                    Do email or tweet us any pictures of bugs, birds, or wild animals you spot.
                                </div>
                            </div>

                            <div className="w-full px-4 lg:w-1/2">
                                <div
                                    className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                                    data-wow-delay=".2s"
                                >
                                    <div>
                                        <Image
                                            src="/images/about/nature_in_park.jpeg"
                                            alt="about-image"
                                            fill
                                            className="mx-auto max-w-full lg:mr-0"
                                        />
                                    </div>
                                </div>
                                <div className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0 text-sm">
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutPage;
