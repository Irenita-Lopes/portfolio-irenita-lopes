import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

export interface ICardProjetoProps {
    titulo: string;
    detalhes: string;
    tecnologias: string[];
    imagem: StaticImageData;
    link: string;
}

const CardProjeto: React.FC<ICardProjetoProps> = ({
    titulo,
    detalhes,
    tecnologias,
    imagem,
    link,
}) => {
    return (
       
        <div className="w-full flex flex-col shadow-lg rounded-xl overflow-hidden bg-white">
           
            <div className="relative w-full h-48">
                <Image
                    className="object-cover w-full h-full"
                    src={imagem}
                    alt={`Imagem do projeto ${titulo}`}
                    fill
                    priority
                />
            </div>

            <div className="flex flex-col flex-grow p-5 gap-3 text-zinc-800">
                <h1 className="text-xl font-semibold leading-tight">
                    {titulo}
                </h1>

                <p className="text-sm text-justify leading-relaxed line-clamp-5">
                    {detalhes}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    {tecnologias.map((tec) => (
                        <span
                            key={tec}
                            className="px-2 py-1 rounded-md bg-[#292E33] text-white text-[10px] uppercase font-medium"
                        >
                            {tec}
                        </span>
                    ))}
                </div>

                <Link
                    href={link}
                    target="_blank"
                    className="w-full mt-5 flex items-center justify-center gap-2 bg-[#297DA6] py-2 rounded-xl text-center text-white font-bold text-sm"
                >
                    <span>Saiba mais</span>
                    <FaLongArrowAltRight />
                </Link>
            </div>
        </div>
    );
};

export default CardProjeto;