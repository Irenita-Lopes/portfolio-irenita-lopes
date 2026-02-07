import alimentafros from "@/assets/Alimentafros.png";
import CardProjeto from "@/components/CardProjeto";
import pancs from "@/assets/pancs.png";
import naojogue from "@/assets/naojoguefora.png";
import passaros from "@/assets/passaros.png";
import kibebelu from "@/assets/kibebelu.png";

const ProjectsPage = () => {
    return (
        <section
            className="min-h-screen bg-[#A3A651]"
            id="projects"
        >  <h1 className="text-5xl md:text-6xl text-center md:px-30 my-10 font-bold text-white leading-relaxed drop-shadow-sm md:text-left">
                Projetos
            </h1>
            <div className="w-full h-full flex flex-col gap-4 px-4 md:px-30 mb-4">
               
                <CardProjeto
                    titulo="AlimentAfro"
                    detalhes="Landing page personalizada para projeto de nutrição."
                    tecnologias={["Next.js", "React", "TypeScript"]}
                    imagem={alimentafros}
                    link="https://alimentafros.vercel.app"
                />
                
                <CardProjeto
                    titulo="Não Jogue Fora"
                    detalhes="Landing page para o projeto de campanha entitulada Não Jogue Fora."
                    tecnologias={["Next.js", "React", "TypeScript"]}
                    imagem={naojogue}
                    link="https://nao-jogue-fora.vercel.app"
                />
                  <CardProjeto
                    titulo="Kibebelu"
                    detalhes="Landing page para resturante: Kibebelu."
                    tecnologias={["Next.js", "React", "TypeScript"]}
                    imagem={kibebelu}
                    link="https://kibebelu.vercel.app"
                />

                <CardProjeto
                    titulo="Jogo dos pássaros"
                    detalhes="Inspirado no jogo da velha, aqui apresentamos pássaros da fauna paulistana, partindo do Guia de Aves da Cidade de São Paulo."
                    tecnologias={["React", "HTML", "JavaScript", "CSS"]}
                    imagem={passaros}
                    link="https://jogo-passarinhos.vercel.app"
                />

                <CardProjeto
                    titulo="PANCS"
                    detalhes="Landing page para o projeto de divulgação de plantas alimentícias não convencionais."
                    tecnologias={["React", "HTML", "JavaScript", "CSS"]}
                    imagem={pancs}
                    link="https://pancs.vercel.app"
                />


            </div>
        </section>
    );
};

export default ProjectsPage;
