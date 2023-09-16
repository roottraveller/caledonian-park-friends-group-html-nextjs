import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";

const AboutPage = () => {
    return (
        <>
            <Breadcrumb
                pageName="CPFG Park Groups"
                description=""
            />

            <section id="about" className="pt-8 md:pt-10 lg:pt-14">
                <div className="container">
                    <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
                        <div className="-mx-4 flex flex-wrap">
                            <div className="w-full px-4">
                                <SectionTitle
                                    title="Octopus Community Network"
                                    paragraph1=""
                                    paragraph2=""
                                    paragraph3=""
                                    mb="0px"
                                    mt="0px"
                                />
                                <div className="text-justify">
                                    Octopus, is an Islington based charity, supporting a network of multi-purpose commnity centres.
                                    For the past ten years we have run a series of projects focussed on promoting access to nature,
                                    wildlife, and gardening for the better health and wellbeing of Islington's communities. For the
                                    past seven years the Bloomin' Gardeners, led by Octopus, have looked after the two garden beds near
                                    the clocktower. We are a small group of 'older' gardeners who are young in spirit. Formerly run in
                                    partnership with Age UK Islington, the group now meets informally, usually on Wednesday afternoons
                                    to tend the beds, have a catch up chat, and a cuppa! If you are interested in joining us please get
                                    in touch through Octopus.
                                    <br/>
                                    <br/>
                                    Octopus is also working with the Caledonian Park Friends Group to develop Caledonian Park into
                                    Islington's first edible park. Through late 2021 we are replacing the two overgrown beds in the
                                    centre of the avenue between the clocktower and North Road with two bed planters to be filled with
                                    a variety of herbs; these will be accessible for all the community to use. We will be running some
                                    workshops for people to learn about the wonders of herbs and how to cook better with them; watch
                                    this space!
                                    <br/>
                                    <br/>
                                    Contact Anita Gracie or visit their website.
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about" className="pt-8 md:pt-10 lg:pt-14">
                <div className="container">
                    <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
                        <div className="-mx-4 flex flex-wrap">
                            <div className="w-full px-4">
                                <SectionTitle
                                    title="Goodinge Group Practice"
                                    paragraph1=""
                                    paragraph2=""
                                    paragraph3=""
                                    mb="0px"
                                    mt="0px"
                                />
                                <div className="text-justify">
                                    The Goodinge Group Practice are engaged with the Caledonian Park Friends group through their
                                    sustainability program. They are committed to sustainability in the medical practice and have
                                    signed up to the Green Impact for Health toolkit set up by the Royal College of General Practitioners.
                                    <br/>
                                    <br/>
                                    Find more information on their website.
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
