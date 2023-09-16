import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";

const ContactPage = () => {
    return (
        <>
            <Breadcrumb
                pageName="Contact Us"
                description=""
            />

            <section id="about" className="pt-8 md:pt-10 lg:pt-14">
                <div className="container">
                    <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
                        <div className="-mx-4 flex flex-wrap">
                            <div className="w-full px-4">
                                <SectionTitle
                                    title="CPFG Events Calendar"
                                    paragraph1=""
                                    paragraph2=""
                                    paragraph3=""
                                    mb="0px"
                                    mt="0px"
                                />
                                <div className="text-justify">
                                    <div id="google_calendar" style={{ minHeight: '500px' }}>
                                        <iframe
                                            src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%230B8043&ctz=Europe%2FLondon&src=ZnJpZW5kc0BjYWxlZG9uaWFucGFya2ZyaWVuZHNncm91cC5vcmc&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4tZ2IudWsjaG9saWRheUBncm91cC52LmC&color=%23039BE5&color=%2333B679&color=%230B8043&showTz=0&hl=en_GB"
                                            style={{ borderWidth: 0, width: '100%', minHeight: 'inherit' }}
                                            frameBorder={0}
                                            scrolling="no"
                                        ></iframe>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactPage;
