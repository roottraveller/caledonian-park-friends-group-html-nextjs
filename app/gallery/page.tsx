import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";

const GalleryPage = () => {
    return (
        <>
            <Breadcrumb
                pageName="Gallery"
                description=""
            />
            <Gallery/>
        </>
    );
};

export default GalleryPage;
