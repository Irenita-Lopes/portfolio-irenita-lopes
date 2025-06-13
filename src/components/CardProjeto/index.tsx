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
        <div className="w-full h-[30vh] flex flex-col md:flex-row items-center justify-center gap-10 bg-white shadow-lg p-10">
            <figure className="h-[50%] flex justify-center items-center">
                <Image
                    className="w-full h-full object-cover  shadow-2xl rounded-lg"
                    src={imagem}
                    alt={`Imagem do projeto ${titulo}`}
                    priority
                />
            </figure>
            <div className="md:w-1/2 flex flex-col gap-6 p-6 rounded-lg bg-[#297DA6] text-white">
                <h1 className="text-xl font-semibold">
                    {titulo}
                </h1>
                <p className="text-sm">
                    {detalhes}
                </p>
                <div className="flex flex-wrap gap-10">
                    {tecnologias.map((tec) => (
                        <span key={tec} className="px-3 py-1 rounded-lg bg-[#297DA6] text-white">{tec}</span>
                    ))}
                </div>
                <Link
                    href={link}
                    className="flex items-center gap-2"
                >
                    <span>Acesse o projeto</span>
                    <FaLongArrowAltRight />
                </Link>
            </div>
        </div>
    );
};

export default CardProjeto;