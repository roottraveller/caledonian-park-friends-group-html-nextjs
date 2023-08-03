import Image from "next/image";

const AboutSectionTwo = () => {
    return (
        <section className="py-16 md:py-20 lg:py-28">
            <div className="container">
                <div className="-mx-4 flex flex-wrap items-center">
                    <div className="w-full px-4 lg:w-1/2">
                        <div
                            className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                            data-wow-delay=".15s"
                        >
                            <Image
                                src="/images/about/about-image-2.jpeg"
                                alt="about image"
                                fill
                            />
                        </div>
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                        <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
                            <div className="mb-9">
                                {/*<h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">*/}
                                {/*  Bug free code*/}
                                {/*</h3>*/}
                                <p className="text-justify">
                                    In recent years, the park has benefitted from major investment and redesign on its
                                    northern edge.
                                    A new ‘natural play’ area was opened in 2010 and a section with formal garden spaces
                                    and extensive
                                    tree, shrub and herbaceous planting, intended for community use, was opened in
                                    August 2013. Caledonian
                                    Park Friends Group has planted and maintains two of these as nature gardens with
                                    planting attractive
                                    to bees, butterflies and birds, a hibernaculum, loggery and a wildflower meadow.
                                    Another community
                                    group based in the Drovers Age UK Centre is developing an ‘art garden’ with mosaic
                                    planters, sculptures
                                    and other art displays. Brecknock School grows vegetables in raised beds in another
                                    garden space and
                                    the Gower School pupils take a special interest in one of the woodland areas.
                                </p>
                            </div>
                            <div className="mb-9">
                                {/*<h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">*/}
                                {/*  Premier support*/}
                                {/*</h3>*/}
                                <p className="text-justify">
                                    In December 2016, Islington Council was awarded a £1.87 million Heritage Lottery
                                    Fund grant to repair
                                    and make accessible the Clock Tower, park gates and railings and to build a Heritage
                                    Centre, providing
                                    information on the park's history, a café and toilets. The Cally Clock Tower Centre
                                    opened in June 2019,
                                    and the Tolpuddle Café opened in July 2019. For more information have a look at the
                                    Centre website or
                                    islington.gov.uk/caledonianpark.

                                    Find out more about the history of the park and the local area in our booklet,
                                    available for £5 from
                                    the Friends stall (next event) or from <a
                                    href="mailto:tunstalls1@aol.com">tunstalls1@aol.com</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSectionTwo;
