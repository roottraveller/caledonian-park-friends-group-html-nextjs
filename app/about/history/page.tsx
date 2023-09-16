import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";
import SectionTitle from "@/components/Common/SectionTitle";

const AboutPage = () => {
    return (
        <>
            <Breadcrumb
                pageName="About Histoy"
                description=""
            />
            <section id="about" className="pt-8 md:pt-10 lg:pt-14">
                <div className="container">
                    <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
                        <div className="-mx-4 flex flex-wrap">
                            <div className="w-full px-4 lg:w-1/2">
                                <SectionTitle
                                    title="Past, Present and Future of Caledonian Park"
                                    paragraph1=""
                                    paragraph2=""
                                    paragraph3=""
                                    mb="0px"
                                    mt="0px"
                                />
                                <div className="text-justify">
                                    The Clock Tower at the heart of today's Caledonian Park was constructed near the site of
                                    a
                                    17th-century manor house, Copenhagen House, which subsequently operated as an Inn. This
                                    building
                                    stood isolated in open fields used for recreation which stretched down to the edge of
                                    London at
                                    Kings Cross. This area was also the scene of political demonstrations, the most famous
                                    of which in
                                    April 1834 was in support of the Tolpuddle Martyrs, agricultural labourers deported to
                                    Australia
                                    after forming a union to protest at reducing wages, being convicted under an obscure law
                                    for the secret
                                    oath they swore.
                                    <br/>
                                    <br/>
                                    The imposing Grade-II-listed Victorian Clock Tower and fine listed railings and gates to
                                    the south and east of the park,
                                    and the name of Market Road to the south, are signs of the park's previous incarnation
                                    as a livestock market to replace
                                    the overcrowded Smithfield Market. The Metropolitan Cattle Market was opened by Prince
                                    Albert in 1855 and operated,
                                    apart from a break during World War II, until its slaughterhouses closed in 1963. The
                                    famous associated Cally ‘flea’
                                    market closed in 1939. The architect James Bunning, responsible for the market, the
                                    clocktower and the four pubs
                                    that stood at the corners of the market, three of which are still standing, worked
                                    mainly in Italianate style.
                                    <br/>
                                    <br/>
                                    In 1970 Islington Council created Caledonian Park on about 18 acres of the former cattle
                                    market, by this time derelict.
                                    The park went through periods of neglect and became known for crime, prostitution, and
                                    burnt-out cars in the 1980s and
                                    1990s. However extensive tree and shrub planting in 1980 now gives the park its
                                    tranquillity and provides habitats for
                                    wildlife. The park is a Borough Grade 1 Site of Importance for Nature Conservation,
                                    mainly for its woodlands, and
                                    offers woodland walks. In 2010 the Caledonian Park Friends Group planted a small
                                    community orchard to add to the
                                    biodiversity. The group is responsible for watering, pruning and general maintenance of
                                    the trees. The park has
                                    an extensive area of mown grass used for youth football training by voluntary groups,
                                    picnicking, sunbathing and
                                    dog walking. A circular path around the park is popular with runners.
                                </div>
                            </div>

                            <div className="w-full px-4 lg:w-1/2">
                                <div
                                    className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                                    data-wow-delay=".2s"
                                >
                                    <div>
                                        <Image
                                            src="/images/about/about-image.jpeg"
                                            alt="about-image"
                                            fill
                                            className="mx-auto max-w-full lg:mr-0"
                                        />
                                    </div>
                                </div>
                                <div className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0 text-sm">
                                    [A black-and-white aerial photograph of the market in 1931, stalls and the clocktower
                                    with octagonal offices at the base clearly visible]
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
                                        In recent years, the park has benefitted from major investment and redesign on
                                        its
                                        northern edge.
                                        A new ‘natural play’ area was opened in 2010 and a section with formal garden
                                        spaces
                                        and extensive
                                        tree, shrub and herbaceous planting, intended for community use, was opened in
                                        August 2013. Caledonian
                                        Park Friends Group has planted and maintains two of these as nature gardens with
                                        planting attractive
                                        to bees, butterflies and birds, a hibernaculum, loggery and a wildflower meadow.
                                        Another community
                                        group based in the Drovers Age UK Centre is developing an ‘art garden’ with
                                        mosaic
                                        planters, sculptures
                                        and other art displays. Brecknock School grows vegetables in raised beds in
                                        another
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
                                        and make accessible the Clock Tower, park gates and railings and to build a
                                        Heritage
                                        Centre, providing
                                        information on the park's history, a café and toilets. The Cally Clock Tower
                                        Centre
                                        opened in June 2019,
                                        and the Tolpuddle Café opened in July 2019. For more information have a look at
                                        the
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
        </>
    );
};

export default AboutPage;
