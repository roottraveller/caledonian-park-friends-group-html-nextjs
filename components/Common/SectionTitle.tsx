import MultiLineText from "@/components/Features/MultiLineText";

const SectionTitle = ({
                          title,
                          paragraph1,
                          paragraph2,
                          paragraph3,
                          width = "1070px",
                          center,
                          mb = "20px",
                          mt = "1px"
                      }: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    width?: string;
    center?: boolean;
    mb?: string;
    mt?: string;
}) => {
    return (
        <>
            <div
                className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
                data-wow-delay=".1s"
                style={{maxWidth: width, marginBottom: mb, marginTop: mt}}
            >
                <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[35px]">
                    {title}
                </h2>

                <p className="text-base !leading-relaxed text-body-color md:text-lg text-justify"
                   style={{marginBottom: "20px"}}>
                    {paragraph1}
                    {/*<MultiLineText paragraph={paragraph} />;*/}
                </p>
                <p className="text-base !leading-relaxed text-body-color md:text-lg text-justify"
                   style={{marginBottom: "20px"}}>
                    {paragraph2}
                </p>
                <p className="text-base !leading-relaxed text-body-color md:text-lg text-justify"
                   style={{marginBottom: "20px"}}>
                    {paragraph3}
                </p>
            </div>
        </>
    );
};


export default SectionTitle;
