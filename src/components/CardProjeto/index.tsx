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
        <div className="w-full h-full md:h-[40vh] flex flex-col md:flex-row items-center justify-center shadow-lg">
                <Image
                    className="w-full h-auto md:w-auto md:h-full  object-cover"
                    src={imagem}
                    alt={`Imagem do projeto ${titulo}`}
                    priority
                />
            <div className="w-full md:h-full p-4 md:p-10 flex flex-col gap-6 bg-white text-lg md:text-xl text-justify text-zinc-800 ">
                <h1 className="text-3xl font-semibold">
                    {titulo}
                </h1>
                <p className="text-md">
                    {detalhes}
                </p>
                <div className="flex flex-wrap gap-10">
                    {tecnologias.map((tec) => (
                        <span key={tec} className="px-3 py-1 rounded-lg bg-[#297DA6] text-white">{tec}</span>
                    ))}
                </div>
                <Link
                    href={link}
                    className="w-60  md:mt-7 flex items-center justify-center gap-2 bg-[#D9831A] py-1 rounded-xl text-center text-white hover:bg-[#297DA6] font-bold font-default"
                >
                    <span>Acesse o projeto</span>
                    <FaLongArrowAltRight />
                </Link>
            </div>
        </div>
    );
};

export default CardProjeto;