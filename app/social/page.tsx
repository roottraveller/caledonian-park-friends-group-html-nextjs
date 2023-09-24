import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";
import React from "react";
import TwitterFeed from "@/app/social/TwitterFeed";
import InstagramFeed from "@/app/social/InstagramFeed";

const Social = () => {
    return (
        <>
            <Breadcrumb
                pageName="Social Media"
                description=""
            />

            <section id="about" className="pt-8 md:pt-10 lg:pt-14">
                <div className="container">
                    <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
                        <div className="-mx-4 flex flex-wrap">
                            <div className="w-full px-4 lg:w-1/2">
                                <SectionTitle
                                    title="Twitter"
                                    paragraph1=""
                                    paragraph2=""
                                    paragraph3=""
                                    mb="0px"
                                    mt="0px"
                                />
                                <div className="text-justify" id="twitter-feed">
                                    <TwitterFeed/>
                                </div>
                            </div>

                            <div className="w-full px-4 lg:w-1/2">
                                <SectionTitle
                                    title="Instagram"
                                    paragraph1=""
                                    paragraph2=""
                                    paragraph3=""
                                    mb="0px"
                                    mt="0px"
                                />
                                <div className="text-justify" id="twitter-feed">
                                    <InstagramFeed/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Social;
