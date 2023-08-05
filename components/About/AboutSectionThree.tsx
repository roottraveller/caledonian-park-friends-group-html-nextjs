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
    );
};

export default AboutSectionOne;
