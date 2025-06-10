
import { ImWhatsapp } from "react-icons/im";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";


const Contact = () => {
    return (
        <div id="contacts" className="min-h-screen bg-[#297DA6] flex flex-col items-center md:flex-row md:justify-center px-6 py-12 md:px-20">


            <div className="md:w-1/2 flex flex-col items-start">
                <h1 className="text-white mb-6 font-extrabold text-4xl md:text-5xl drop-shadow-lg">
                    Entre em contato:
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="md:col-span-1 flex items-center gap-4 p-6 rounded-2xl shadow-md bg-white  hover:shadow-lg transition">
                        <MdOutlineMarkEmailUnread className="text-[#297DA6]" />
                        <div>
                            <a
                                href="mailto:vcruz.alimentafros@gmail.com"
                                className="hover:text-[#D9831A] transition-colors">
                                irenita.f.lopes@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="md:col-span-1 flex items-center gap-4 p-6 rounded-2xl shadow-md bg-white hover:shadow-lg transition">
                        <ImWhatsapp className="text-[#297DA6]" />
                        <div>
                            <a
                                href="https://wa.me/+5511933596981"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#D9831A] transition-colors">
                                (11) 93359-6981
                            </a>
                        </div>
                    </div>

                    <div className="md:col-span-1 flex items-center gap-4 p-6 rounded-2xl shadow-md bg-white hover:shadow-lg transition">
                        < FaLinkedinIn className="text-[#297DA6]" />
                        <div>
                            <a
                                href="https://www.linkedin.com/in/irenita-ferreira-lopes/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#D9831A] transition-colors">
                                Irenita Ferreira Lopes
                            </a>
                        </div>
                    </div>

                    <div className="md:col-span-1 flex items-center gap-4 p-6 rounded-2xl shadow-md bg-white hover:shadow-lg transition">
                        < FaGithub className="text-[#297DA6]" />
                        <div>
                            <a
                                href="https://github.com/Irenita-Lopes"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#D9831A] transition-colors">
                                Irenita-Lopes
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <figure className="md:w-[30%] h-auto flex justify-center items-center">
                    
                </figure>
            </div>
        </div>
    );
};

export default Contact;
