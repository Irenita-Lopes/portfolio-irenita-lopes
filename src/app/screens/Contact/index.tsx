
import { ImWhatsapp } from "react-icons/im";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import Image from "next/image";
import perfil from "@/assets/Irenita_Ferreira_lopes.png"
import Title from "@/components/Title";


const Contact = () => {
    return (
        <div id="contacts" className="min-h-screen bg-white flex flex-col md:justify-center">
           <Title text= "Contate-me" color="[#297DA6]"/>
            <div className="w-full flex flex-col md:flex-row items-center justify-center">
                <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 text-zinc-800 text-xl">
                    <div className="w-full md:col-span-1 flex items-center gap-4 p-6 rounded-2xl shadow-md border border-[#A3A651]  hover:shadow-lg transition">
                        <MdOutlineMarkEmailUnread className="text-3xl" />
                        <a
                            href="mailto:vcruz.alimentafros@gmail.com"
                            className="hover:text-[#297DA6] transition-colors">
                            irenita.f.lopes@gmail.com
                        </a>
                    </div>

                    <div className="w-full md:col-span-1 flex items-center gap-4 p-6 rounded-2xl shadow-md border border-[#A3A651]  hover:shadow-lg transition">
                        <ImWhatsapp className="text-3xl"/>
                        <a
                            href="https://wa.me/+5511933596981"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#297DA6] transition-colors">
                            (11) 93359-6981
                        </a>
                    </div>

                    <div className="w-full md:col-span-1 flex items-center gap-4 p-6 rounded-2xl shadow-md border border-[#A3A651]  hover:shadow-lg transition">
                        < FaLinkedinIn className="text-3xl"/>
                        <a
                            href="https://www.linkedin.com/in/irenita-ferreira-lopes/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#297DA6] transition-colors">
                            Irenita Ferreira Lopes
                        </a>
                    </div>

                    <div className="w-full md:col-span-1 flex items-center gap-4 p-6 rounded-2xl shadow-md border border-[#A3A651]  hover:shadow-lg transition">
                        < FaGithub className="text-3xl"/>
                        <a
                            href="https://github.com/Irenita-Lopes"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#297DA6] transition-colors">
                            Irenita-Lopes
                        </a>
                    </div>
                </div>
                <figure className="md:w-[30%] h-auto flex justify-center mt-4 items-center">
                    <Image
                        className="rounded-full w-[100vw] h-[100vw] object-cover md:w-[400px] md:h-[400px] shadow-2xl"
                        src={perfil}
                        alt="Foto de Irenita Ferreira Lopes, com fundo branco e camiseta amarela, créditos à fotógrafa Amanda Cena"
                        priority
                        width={400}
                        height={400}
                    />
                </figure>
            </div>
        </div>
    );
};

export default Contact;
