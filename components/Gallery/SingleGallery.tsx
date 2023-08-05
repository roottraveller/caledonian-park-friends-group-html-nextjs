import {Gallery} from "@/types/gallery";
import Image from "next/image";
import Link from "next/link";

const Singlegallery = ({gallery}: { gallery: Gallery }) => {
    const {image, tags} = gallery;
    return (
        <>
            <div
                className="wow fadeInUp relative overflow-hidden rounded-md bg-white shadow-one dark:bg-dark"
                data-wow-delay=".1s"
            >
                <Link href="#" className="relative block h-[220px] w-full">
          <span style={{backgroundColor: '#068932'}}
                className="absolute top-6 right-6 z-20 inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold capitalize text-white">
            {tags[0]}
          </span>
                    <Image src={image} alt="image" fill/>
                </Link>
            </div>
        </>
    );
};

export default Singlegallery;
