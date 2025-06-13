import alimentafros from "@/assets/Alimentafros.png";
import CardProjeto from "@/components/CardProjeto";

const ProjectsPage = () => {
    return (
        <section
            className="min-h-screen bg-[#297DA6]"
            id="projects"
        >  <h1 className="text-5xl md:text-6xl text-center mb-4 font-bold text-white leading-relaxed drop-shadow-sm md:text-left">
                Projetos
            </h1>
           <CardProjeto
               titulo="AlimentAfro"
               detalhes="Landing Page personalizada para projeto de nutrição."
               tecnologias={["Next.js", "React", "TypeScript"]}
               imagem={alimentafros}
               link="https://alimentafros.vercel.app"
           />
              <CardProjeto
                titulo="PANCS"
                detalhes="Landing Page para o projeto de divulgação de plantas alimentícias não convencionais."
                tecnologias={["Next.js", "React", "TypeScript"]}
                imagem={alimentafros}
                link="https://admin-alimentafro.vercel.app"
            />

              <CardProjeto
                titulo="Não Jogue Fora"
                detalhes="Landing Page para o projeto de campanha entitulada Não Jogue Fora."
                tecnologias={["Next.js", "React", "TypeScript"]}
                imagem={alimentafros}
                link="https://admin-alimentafro.vercel.app"
            />

        </section>
    );
};

export default ProjectsPage;
