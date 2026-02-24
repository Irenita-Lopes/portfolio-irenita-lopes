"use client";
import CardPost from "@/components/CardPost";

const Blog = () => {
    const posts = [
        {
            titulo: "Galeano e o Código: Por que a tecnologia precisa de poesia?",
            resumo: "Reflexões sobre como precisamos codar com o coração.",
            data: "Fev, 2026",
            categoria: "Artigo",
            slug: "galeano-e-o-codigo"
        },
        {
            titulo: "Escrevivência Digital: Relato da última oficina",
            resumo: "Prestação de serviços para o coletivo Enredo, colaboração com oficinas literárias para facilitar a construção de narrativas.",
            data: "fev, 2026",
            categoria: "Relato",
            slug: "escrevivencia-digital"
        }
    ];

    return (
        <section className="min-h-screen bg-[#292E33] py-20" id="blog">
            <div className="max-w-7xl mx-auto px-4 md:px-10">
                <div className="mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                       Eu também conto histórias
                    </h1>
                    <p className="text-[#A3A651] font-medium tracking-wide italic">
                        Tecnologias e letramentos (em construção)
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <CardPost key={post.slug} {...post} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;