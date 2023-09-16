import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";

const AboutPage = () => {
    return (
        <>
            <Breadcrumb
                pageName="About CPFG"
                description=""
            />

            <section id="about" className="pt-8 md:pt-10 lg:pt-14">
                <div className="container">
                    <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
                        <div className="-mx-4 flex flex-wrap">
                            <div className="w-full px-4">
                                <SectionTitle
                                    title="Welcome to the Caledonian Park Friends Group"
                                    paragraph1=""
                                    paragraph2=""
                                    paragraph3=""
                                    mb="0px"
                                    mt="0px"
                                />
                                <div className="text-justify">
                                    The Caledonian Park Friends Group was formed to represent park users and to protect
                                    the amenities
                                    and wildlife of the park. The Friends maintain and care for the two wildlife gardens
                                    to the
                                    north-west corner of the park, the community orchard at the south-west of the field,
                                    help tend
                                    the raised square beds at the South gate, and also plant bulbs and flowers around
                                    the park generally.
                                    Recently we undertook a major project to plant over 100 flowering climbers along the
                                    railings of the
                                    avenue north of the Clock Tower, through New Clocktower Place.
                                    <br/>
                                    <br/>
                                    The Friends group holds meetings about ten times a year, and also supports a number
                                    of park activities
                                    including Open Garden Squares Weekend and the Clocktower Festival.
                                    <br/>
                                    <br/>
                                    We also do a range of planting, tending, and weeding activities throughout the year.
                                    Everyone is
                                    welcome to attend, we provide gloves and tools, a friendly chat and often tea and
                                    biscuits too!
                                    Do come and say hello if you see us.
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
                                    title="About the park"
                                    paragraph1=""
                                    paragraph2=""
                                    paragraph3=""
                                    mb="0px"
                                    mt="0px"
                                />
                                <div className="text-justify">
                                    The Caledonian Park is Islington’s second largest park at 7.4 hectares. It has a
                                    children’s natural
                                    play area and conventional playground equipment, extensive grassy space for ball
                                    games, picnic-ing
                                    etc, flower and nature gardens, a small orchard and woodland areas and walks plus
                                    handsome 1855
                                    clock tower and railings.
                                    <br/>
                                    <br/>
                                    On Saturdays there are guided tours up the tower and a ground-level walking tour
                                    about the history
                                    of the park and tower.
                                    <br/>
                                    <br/>
                                    Visit the new Cally Clock Tower Centre website to learn more and to book tours.
                                    <br/>
                                    <br/>
                                    There are also gardens maintained by the Friends group, Brecknock School and the
                                    Blooming Gardeners.
                                    <br/>
                                    <br/>
                                    On Sunday mornings the park hosts a junior parkrun.
                                    <br/>
                                    <br/>
                                    The park is located between York Way to the west and Caledonian Road to the east,
                                    with Market Road
                                    and tennis and football sports facilities to the south, and North Road, you've
                                    guessed it, to the
                                    north. It is served by several bus routes including the 274 and the 393. The nearest
                                    Underground
                                    station is Caledonian Road on the Picadilly Line.
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
