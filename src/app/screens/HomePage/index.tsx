import Image from "next/image";
import perfil from "@/assets/Irenita_Ferreira_lopes.png";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Link from "next/link";

const HomePage = () => {
    return (
        <section
            className="min-h-screen px-4 py-10 md:py-20 md:px-16 flex flex-col md:flex-row items-center justify-center gap-10 bg-[#292E33]"
            id="home"
        >
            <figure className="md:w-[30%] h-auto flex justify-center items-center">
                <Image
                    className="rounded-full w-[100vw] h-[100vw] object-cover md:w-[400px] md:h-[400px] shadow-2xl"
                    src={perfil}
                    alt="Foto de Irenita Ferreira Lopes, com fundo branco e camiseta amarela, créditos à fotógrafa Amanda Cena"
                    priority
                    width={400}
                    height={400}
                />
            </figure>

            <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start">
                <h1 className="text-5xl md:text-6xl text-white mb-4 leading-relaxed drop-shadow-sm font-semibold text-center md:text-left">
                    Irenita Lopes
                </h1>
                <p className="mt-4 text-lg md:text-xl text-justify text-white leading-relaxed drop-shadow-sm md:w-3/4">
                Irenita Lopes é analista desenvolvedora de sistemas e educadora com experiência em movimentos literários de rua, 
                cujo trabalho transforma memórias e patrimônios em experiências digitais de impacto. 
                Formada em Letras e com trajetória voltada para a educação e a cultura, 
                dedica-se a criar ferramentas que preservam histórias e ampliam o acesso ao conhecimento. 
                Sua atuação também multiplica iniciativas de leitura e escrita, 
                combinando recursos digitais e analógicos para construir pontes entre tradição e inovação. 
                Em seus projetos, 
                cada narrativa resgatada se torna um convite à reflexão coletiva e à valorização da memória e dos territórios.
                </p>
                <div className="md:w-3/4 flex justify-center  mt-6">
                    <Link
                        href="https://www.linkedin.com/in/irenita-ferreira-lopes/"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#297DA6] transition-colors shadow-2xs">
                        <FaLinkedin size={50} />
                    </Link>
                    <Link
                        href="https://github.com/Irenita-Lopes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 text-white hover:text-[#297DA6] transition-colors shadow-2xs">
                        <FaGithub size={50} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HomePage;
