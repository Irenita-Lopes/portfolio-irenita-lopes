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
        <section className="min-h-screen bg-[#292E33] py-20" id="projects">
    <h1 className="text-5xl md:text-6xl text-center mb-16 font-bold text-white">
        Projetos
    </h1>
            <div className="max-w-7xl mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-6">
    
    <CardProjeto
        titulo="Oficinas de Literatura, Slam e Sarau"
        detalhes="Mediação de processos criativos coletivos e letramento através da exercícios inspirados nos movimentos literários de rua. Incentivo à escrita autoral e à leitura crítica."
        tecnologias={["Oralidade", "Letramento", "Leitura", "Escuta Ativa"]}
        imagem={oficinaSlam}
        link="https://www.linkedin.com/posts/irenita-ferreira-lopes_a-amanda-cena-fala-que-meu-perfil-nessa-rede-activity-7425301199228407808-KLVl/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB1SdR0BLMxObrIu_l4T1s7Z4ixIS0M-fKs" 
    />
  
    <CardProjeto
        titulo="Oficinas de Escrita Criativa"
        detalhes="Fomento à escrita autoral e preservação da memória individual e coletiva. Da sensibilização da página em branco à materialização de publicações independentes."
        tecnologias={["Escrevivência", "Identidade", "Patrimônio"]}
        imagem={oficinaPoesia}
        link="https://www.linkedin.com/posts/irenita-ferreira-lopes_a-amanda-cena-fala-que-meu-perfil-nessa-rede-activity-7425301199228407808-KLVl/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB1SdR0BLMxObrIu_l4T1s7Z4ixIS0M-fKs"
    />

    <CardProjeto
        titulo="AlimentAfros: Memória e Nutrição"
        detalhes="Desenvolvimento de ecossistema digital para salvaguarda da ancestralidade alimentar. 
                Onde a tecnologia serve como suporte para narrativas de cura, resistência e identidade afro-brasileira."
        tecnologias={["Next.js", "Gestão de Impacto", "Patrimônio Imaterial"]}
        imagem={VivianiCruz}
        link="https://alimentafros.vercel.app"
    />

    <CardProjeto
        titulo="Não Jogue Fora"
        detalhes="Interface digital para campanhas de sustentabilidade e logística reversa. 
        Solução focada na conscientização ambiental e na democratização do acesso a informações sobre descarte consciente."
        tecnologias={["Next.js", "Educação Ambiental", "Tech for Good"]}
        imagem={educacaoAmbiental}
        link="https://nao-jogue-fora.vercel.app"
    />

    <CardProjeto
        titulo="Kibebelu"
        detalhes="Simulação de presença digital para gastronomia de base territorial 
        Foco na valorização dos sabores locais e na estruturação da identidade visual de negócios periféricos."
        tecnologias={["Next.js", "Economia Solidária", "UX Afetiva"]}
        imagem={taioba}
        link="https://kibebelu.vercel.app"
    />

    <CardProjeto
        titulo="Gamificação: Fauna Paulistana"
        detalhes="Desenvolvimento de ferramenta lúdica para promoção do patrimônio natural. 
        O 'Jogo dos Pássaros' resgata a figura de uma fauna paulistana."
        tecnologias={["React", "Educação Ambiental", "Gamificação"]}
        imagem={passaros}
        link="https://jogo-passarinhos.vercel.app"
    />

    <CardProjeto
        titulo="Portal PANCS"
        detalhes="Repositório digital sobre Plantas Alimentícias Não Convencionais. 
        Focado na difusão de saberes sobre biodiversidade e segurança alimentar."
        tecnologias={["React", "Segurança Alimentar", "Acessibilidade"]}
        imagem={pancs}
        link="https://pancs.vercel.app"
    />

</div>
        </section>
    );
};

export default ProjectsPage;
