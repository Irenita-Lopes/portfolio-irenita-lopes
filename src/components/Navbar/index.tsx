"use client";
import Link from "next/link";
import { useState } from "react";
import { GrClose, GrMenu } from "react-icons/gr";


const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className={`${isOpen ? "h-screen" : "h-auto"} fixed md:h-auto top-0 pr-30 bg-white z-80 w-full text-black flex flex-col md:flex-row align-center items-center p-5`}
        >
            <div className="flex justify-center md:justify-start items-center relative w-full md:w-auto p-4 md:p-0">
                {isOpen ? <GrClose
                    className="cursor-pointer absolute right-4 md:hidden"
                    onClick={toggleSidebar} /> :
                    <GrMenu
                        className="cursor-pointer absolute right-4 md:hidden"
                        onClick={toggleSidebar}
                    />}
            </div>
            <nav className="w-[100%] h-[100%] text-[20px] md:h-auto flex flex-col md:flex-row align-center items-center justify-center md:justify-end gap-10">

                <Link
                    className={`text-[#D9831A] hover:text-[#297DA6] font-bold font-default ${!isOpen ? "hidden md:block" : ""}`}
                    href={"/"}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Início
                </Link>

                <Link
                    className={`text-[#D9831A] hover:text-[#297DA6] font-bold font-default ${!isOpen ? "hidden md:block" : ""}`}
                    href={"/#about"}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Sobre
                </Link>
                <Link
                    className={`text-[#D9831A] hover:text-[#297DA6] font-bold font-default ${!isOpen ? "hidden md:block" : ""}`}
                    href={"/screens/CertificatesPage"}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Certificados
                </Link>
                <Link
                    className={`text-[#D9831A] hover:text-[#297DA6] font-bold font-default ${!isOpen ? "hidden md:block" : ""}`}
                    href={"/#services"}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Projetos
                </Link>

                <Link
                    className={`text-[#D9831A] hover:text-[#297DA6] font-bold font-default ${!isOpen ? "hidden md:block" : ""}`}
                    href={"/"}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Currículo
                </Link>

                <Link
                    className={`text-[#D9831A] hover:text-[#297DA6] font-bold font-default ${!isOpen ? "hidden md:block" : ""}`}
                    href={"/#contacts"}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Contatos
                </Link>
            </nav>
        </div>
    );
};

export default Navbar;