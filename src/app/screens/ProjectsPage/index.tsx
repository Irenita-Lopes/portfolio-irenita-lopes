import oficinaSlam from "@/assets/oficinaSlamEscolaSaoJoaquim.png";
import oficinaPoesia from "@/assets/oficinaPoesia.png";
import VivianiCruz from "@/assets/VivianiCruz.png";
import educacaoAmbiental from "@/assets/jardimEscolaSamuel.png";
import taioba from "@/assets/taioba.png";
import passaros from "@/assets/passaros.png";
import pancs from "@/assets/pancs.png";
import CardProjeto from "@/components/CardProjeto";
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
                    titulo="Oficinas de literatura"
                    detalhes="Atividades personalizadas de promoção da leitura para públicos diversos com tecnologias de Sarau e Slam de poesias."
                    tecnologias={["Educação", "Letramento", "Cultura", "Arte", "Slam", "Sarau"]}
                    imagem={oficinaSlam}
                    link="https://www.linkedin.com/posts/irenita-ferreira-lopes_a-amanda-cena-fala-que-meu-perfil-nessa-rede-activity-7425301199228407808-KLVl/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB1SdR0BLMxObrIu_l4T1s7Z4ixIS0M-fKs"
                />
              
                <CardProjeto
                    titulo="Oficinas de escrita criativa"
                    detalhes="Atividades personalizadas de promoção da escrita criativa e eautoral para públicos diversos, com tecnologias da literatura periférica."
                    tecnologias={["Educação", "Escrita", "Cultura", "Arte", "Escrevivência", "Poesia", "Zine"]}
                    imagem={oficinaPoesia}
                    link="https://www.linkedin.com/posts/irenita-ferreira-lopes_a-amanda-cena-fala-que-meu-perfil-nessa-rede-activity-7425301199228407808-KLVl/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB1SdR0BLMxObrIu_l4T1s7Z4ixIS0M-fKs"
                />

                <CardProjeto
                    titulo="AlimentAfros"
                    detalhes="Modelo de portfólio com landing page personalizada de salvaguarda da memória alimentar e nutricional de base ancestral, para Viviani Cruz."
                    tecnologias={["Next.js", "React", "TypeScript"]}
                    imagem={VivianiCruz}
                    link="https://alimentafros.vercel.app"
                />

                <CardProjeto
                    titulo="Não Jogue Fora"
                    detalhes="Modelo de campanha com landing page para divulgação de logística reversa."
                    tecnologias={["Next.js", "React", "TypeScript"]}
                    imagem={educacaoAmbiental}
                    link="https://nao-jogue-fora.vercel.app"
                />

                  <CardProjeto
                    titulo="Kibebelu"
                    detalhes="Modelo comercial de landing page de restaurante gastronomia territorial (produto fictício)."
                    tecnologias={["Next.js", "React", "TypeScript"]}
                    imagem={taioba}
                    link="https://kibebelu.vercel.app"
                />

                <CardProjeto
                    titulo="Jogo dos pássaros"
                    detalhes="Projeto de gamificação para a preservação do patrimônio natural da fauna paulistana."
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
