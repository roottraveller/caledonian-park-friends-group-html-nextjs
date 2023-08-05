import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
    <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
        <path
            d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z"/>
    </svg>
);

const AboutSectionOne = () => {
    const List = ({text}) => (
        <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span
          className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
            {text}
        </p>
    );

    // @ts-ignore
    return (
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
    );
};

export default AboutSectionOne;
