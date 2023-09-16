import Breadcrumb from "@/components/Common/Breadcrumb";
import NewsLatterBox from "@/components/Contact/NewsLatterBox";

const ContactPage = () => {
    return (
        <>
            <Breadcrumb
                pageName="Contact Us"
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
                                <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                                    Need Help? Get in Touch
                                </h2>
                                <p className="mb-12 text-base font-medium text-body-color">
                                    Our team will get back to you ASAP via email. We promise we won't sell your email address to spammers.
                                    <br/>
                                    <br/>
                                    If you would like to, please email our Chair, (Miriam Ashwell) <a href="mailto:friends@caledonianparkfriendsgroup.org" style={{ color: '#068932'}}> friends@caledonianparkfriendsgroup.org </a> to be kept informed about park news, meetings, and events.
                                    <br/>
                                    <br/>
                                    For website queries, or to submit pictures or content for the website, please email (Contact Webmaster)
                                    <a href="mailto:webmaster@caledonianparkfriendsgroup.org" style={{ color: '#068932'}}> webmaster@caledonianparkfriendsgroup.org</a>

                                </p>
                                <form>
                                    <div className="-mx-4 flex flex-wrap">
                                        <div className="w-full px-4 md:w-1/2">
                                            <div className="mb-8">
                                                <label
                                                    htmlFor="name"
                                                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                                >
                                                    Your Name
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter your name"
                                                    className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full px-4 md:w-1/2">
                                            <div className="mb-8">
                                                <label
                                                    htmlFor="email"
                                                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                                >
                                                    Your Email
                                                </label>
                                                <input
                                                    type="email"
                                                    placeholder="Enter your email"
                                                    className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full px-4">
                                            <div className="mb-8">
                                                <label
                                                    htmlFor="message"
                                                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                                >
                                                    Your Message
                                                </label>
                                                <textarea
                                                    name="message"
                                                    rows={5}
                                                    placeholder="Enter your Message"
                                                    className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="w-full px-4">
                                            <button style={{ background : "#068932"}}
                                                    className="rounded-md py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                                                Submit Ticket
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
                            <NewsLatterBox/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactPage;
