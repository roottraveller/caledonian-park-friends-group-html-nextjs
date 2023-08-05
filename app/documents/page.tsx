import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import Documents from "@/components/Documents";

const DocumentPage = () => {
    return (
        <>
            <Breadcrumb
                pageName="Documents"
                description=""
            />
            <Documents/>
        </>
    );
};

export default DocumentPage;
