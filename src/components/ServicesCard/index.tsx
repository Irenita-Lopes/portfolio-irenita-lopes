import Image, { StaticImageData } from "next/image";
import { RiSearchLine } from "react-icons/ri";

export interface IServicesCard {
    description: string;
    title: string;
    src: StaticImageData;
    alt: string;
    onClick?: () => void;
}
const ServicesCard: React.FC<IServicesCard> = ({
    description,
    title,
    src,
    alt,
    onClick,
}) => {
    return (
        <div className="w-full md:w-[300px] min-h-[400px] shadow-lg flex flex-col justify-between bg-white rounded-3xl overflow-hidden">

            <figure className="w-full h-[250px] flex items-center justify-center">
                <Image
                    className="w-full h-full object-cover rounded-tr-3xl p-[1px]"
                    src={src}
                    alt={alt}
                    title={title}
                    priority
                    width={300}
                    height={250}
                />
            </figure>
            <div className="px-4 py-2 flex flex-col items-center justify-between flex-grow">
                <strong>
                    {title}
                </strong>
                <span className="text-center text-gray-700">
                    {description}
                </span>
                <button
                    title="Saiba mais"
                    onClick={onClick}
                    className='bg-[#292E33] hover:bg-[#297DA6] text-white font-bold py-2 px-4 rounded-xl mt-4'
                >
                    <RiSearchLine size={20} />
                </button>

            </div>
        </div>
    );
}
export default ServicesCard;