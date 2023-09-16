import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";

const DocumentPage = () => {
    return (
        <>
            <Breadcrumb
                pageName="Documents"
                description=""
            />

            <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
                            <div
                                className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
                                data-wow-delay=".15s"
                            >
                                <SectionTitle
                                    title="Documents & Policies"
                                    paragraph1=""
                                    paragraph2=""
                                    paragraph3=""
                                    mb="0px"
                                    mt="0px"
                                />
                                <div className="mb-12 text-base font-medium text-body-color">
                                    <ol type="1">
                                        <li>
                                            1. <a href="../../../public/documents/CPFG_Volunteer_Expenses_Policy.doc"
                                                  style={{color: '#068932'}}>CPFG Volunteer Expenses Policy</a>
                                        </li>
                                        <li>
                                            2. <a
                                            href="../../../public/documents/CPFG_Volunteer_Expression_of_Interest.doc"
                                            style={{color: '#068932'}}>CPFG Volunteer Expression of Interest</a>
                                        </li>
                                        <li>
                                            3. <a href="../../../public/documents/CPFG_Want_To_Know_More.doc"
                                                  style={{color: '#068932'}}>CPFG Want To Know More</a>
                                        </li>
                                        <li>
                                            4. <a
                                            href="../../../public/documents/CPFG_Welcome_letter_Volunteer_Guide.doc"
                                            style={{color: '#068932'}}>CPFG Welcome Letter Volunteer Guide</a>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DocumentPage;
