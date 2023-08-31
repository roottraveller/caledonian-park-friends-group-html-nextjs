import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "@/components/Social/SingleBlog";
import blogData from "@/components/Social/blogData";
import galleryData from "@/components/Gallery/galleryData";
import SingleGallery from "@/components/Gallery/SingleGallery";

const Blog = () => {
    return (
        <section id="blog" className="bg-primary/5 py-16 md:py-20 lg:py-28">
            <div className="container">
                {/*<SectionTitle*/}
                {/*    title="Our Latest pictures from Events"*/}
                {/*    paragraph1=""*/}
                {/*    paragraph2=""*/}
                {/*    paragraph3=""*/}
                {/*    center*/}
                {/*/>*/}

                <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
                    {galleryData.map((gallery) => (
                        <div key={gallery.id} className="w-full">
                            <SingleGallery gallery={gallery}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
