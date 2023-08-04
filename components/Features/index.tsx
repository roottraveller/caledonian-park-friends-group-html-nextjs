import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
    return (
        <>
            <section
                id="features"
                className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
            >
                <div className="container">
                    <SectionTitle
                        title="How it started?"
                        paragraph1="The Caledonian Park Friends Group was formed to represent park users and to protect the amenities and
                            wildlife of the park. The Friends maintain and care for the two wildlife gardens to the north-west corner of the
                            park, the community orchard at the south-west of the field, help tend the raised square beds at the South gate,
                            and also plant bulbs and flowers around the park generally. Recently we undertook a major project to plant over
                            100 flowering climbers along the railings of the avenue north of the Clock Tower, through New Clocktower Place."

                        paragraph2="The Friends group holds meetings about ten times a year, and also supports a number of park activities including
                            Open Garden Squares Weekend and the Clocktower Festival."

                        paragraph3="We also do a range of planting, tending, and weeding activities throughout the year. Everyone is welcome to attend,
                            we provide gloves and tools, a friendly chat and often tea and biscuits too! Do come and say hello if you see us."
                        center
                    />

                    {/*<SectionTitle*/}
                    {/*    title="What's in the Park?"*/}
                    {/*    paragraph1=""*/}
                    {/*    paragraph2=""*/}
                    {/*    paragraph3=""*/}
                    {/*    center*/}
                    {/*/>*/}
                    <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3 ">
                        {featuresData.map((feature) => (
                            <SingleFeature key={feature.id} feature={feature}/>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Features;
