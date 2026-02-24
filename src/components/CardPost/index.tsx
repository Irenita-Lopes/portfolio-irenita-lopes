import Link from "next/link";

export interface ICardPostProps {
    titulo: string;
    resumo: string;
    data: string;
    categoria: string;
    slug: string;
}

const CardPost: React.FC<ICardPostProps> = ({ titulo, resumo, data, categoria, slug }) => {
    return (
        <div className="w-full flex flex-col bg-white shadow-lg rounded-xl overflow-hidden border-t-4 border-[#297DA6]">
            <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-[#A3A651]">
                        {categoria}
                    </span>
                    <span className="text-xs text-zinc-400">{data}</span>
                </div>
                
                <h2 className="text-xl font-semibold text-zinc-800 mb-3 leading-tight">
                    {titulo}
                </h2>
                
                <p className="text-sm text-zinc-600 text-justify line-clamp-4 mb-6">
                    {resumo}
                </p>

                <Link 
                    href={`/blog/${slug}`}
                    className="mt-auto text-[#297DA6] font-bold text-sm hover:text-[#A3A651] transition-colors flex items-center gap-1"
                >
                    Indisponível<span>→</span>
                </Link>
            </div>
        </div>
    );
};

export default CardPost;