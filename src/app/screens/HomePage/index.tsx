import Image from "next/image";
import perfil from "@/assets/Irenita_Ferreira_lopes.png";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Link from "next/link";

const HomePage = () => {
    return (
        <section
            className="min-h-screen px-4 py-10 md:py-20 md:px-16 flex flex-col md:flex-row items-center justify-center gap-10 bg-[#297DA6]"
            id="home"
        >
            <figure className="md:w-[30%] h-auto flex justify-center items-center">
                <Image
                    className="rounded-full w-[100vw] h-[100vw] object-cover md:w-[400px] md:h-[400px] shadow-2xl"
                    src={perfil}
                    alt="Foto de Irenita Ferreira Lopes, com fundo branco e camiseta amarela, créditos à fotógrafa Amanda Cena"
                    priority
                />
            </figure>

            <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start">
                <h1 className="text-5xl md:text-6xl text-white mb-4 leading-relaxed drop-shadow-sm font-semibold text-center md:text-left">
                    Irenita Lopes
                </h1>
                <p className="mt-4 text-lg md:text-xl text-justify text-white leading-relaxed drop-shadow-sm md:w-3/4">
                    Desenvolvedora Full Stack com experiência em criação de aplicações web dinâmicas e responsivas.
                    Comprometida em entregar soluções de qualidade, respeitando a experiência do usuário e com propósito.
                </p>
                <div className="md:w-3/4 flex justify-center  mt-6">
                    <Link
                        href="https://www.linkedin.com/in/irenita-ferreira-lopes/"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#f5c58b] transition-colors shadow-2xs">
                        <FaLinkedin size={50} />
                    </Link>
                    <Link
                        href="https://github.com/Irenita-Lopes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 text-white hover:text-[#f5c58b] transition-colors shadow-2xs">
                        <FaGithub size={50} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HomePage;
