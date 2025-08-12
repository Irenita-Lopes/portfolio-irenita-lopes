"use client";
import React from 'react';
import { FaJava, FaHtml5, FaCss3 } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { SiEclipseide, SiTypescript } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiGithub } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { IoGitMergeOutline } from 'react-icons/io5';
import { DiVisualstudio } from 'react-icons/di';
import Link from 'next/link';

const About = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/Irenita_Ferreira_Lopes.pdf';
        link.download = 'Irenita_Ferreira_Lopes.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <section
            className="min-h-screen px-4 py-10 md:px-30 flex flex-col md:flex-row items-center justify-center gap-10 bg-white"
            id="about"
        >
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start">
                <h1 className="text-5xl md:text-6xl text-center mb-4 font-bold text-[#297DA6] leading-relaxed drop-shadow-sm md:text-left">
                    Sobre mim
                </h1>
                <p className="mt-4 text-lg md:text-xl text-justify text-zinc-800 leading-relaxed drop-shadow-sm md:w-3/4">
                    Atuo como desenvolvedora full stack e crio softwares com responsividade, design acolhedor, escalabilidade, responsabilidade e propósito.
                </p>
                <p className="mt-4 text-lg md:text-xl text-justify text-zinc-800 leading-relaxed drop-shadow-sm md:w-3/4">
                    Unindo minha formação em letras e meu desenvolvimento acadêmico atual no campo da STEM, tenho mergulhado nos estudos de Processamento de Linguagem Natural.
                </p>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center items-center gap-6">
                <h2 className="text-4xl mb-6 text-[#D9831A] font-bold">Habilidades Técnicas</h2>

                <div className="text-white flex flex-col gap-4 md:grid md:grid-cols-2">
                    <div className="card bg-[#297DA6] p-6 rounded-lg shadow-md w-70  flex flex-col items-center">
                        <span className="text-lg font-semibold mb-2">Linguagens</span>
                        <div className="flex gap-4 mt-2">
                            <FaJava size={32} />
                            <FaJsSquare size={32} />
                            <SiTypescript size={32} />
                            <FaHtml5 size={32} />
                            <FaCss3 size={32} />
                        </div>
                    </div>

                    <div className="card bg-[#297DA6] p-6 rounded-lg shadow-md flex md:w-70 flex-col items-center">
                        <span className="text-lg font-semibold mb-2">Frameworks e Bibliotecas</span>
                        <div className="flex gap-4 mt-2">
                            <BiLogoSpringBoot size={32} />
                            <FaReact size={32} />
                            <FaNodeJs size={32} />
                            <RiTailwindCssFill size={32} />
                        </div>
                    </div>

                    <div className="card bg-[#297DA6] p-6 rounded-lg shadow-md flex w-70 flex-col items-center">
                        <span className="text-lg font-semibold mb-2">Web</span>
                        <div className="flex gap-4 mt-2">
                            <FaHtml5 size={32} />
                            <FaCss3 size={32} />
                        </div>
                    </div>

                    <div className="card bg-[#297DA6] p-6 rounded-lg shadow-md w-70 flex flex-col items-center">
                        <span className="text-lg font-semibold mb-2">Ferramentas</span>
                        <div className="flex gap-4 mt-2">
                            <IoGitMergeOutline size={32} />
                            <SiGithub size={32} />
                            <SiPostman size={32} />
                            <DiVisualstudio size={32} />
                            <SiEclipseide size={32} />
                        </div>
                    </div>


                    <div className="card bg-[#297DA6] p-6 rounded-lg shadow-md w-70 flex flex-col items-center">
                        <span className="text-lg font-semibold mb-2">Banco de Dados</span>
                        <div className="flex gap-4 mt-2">
                            <SiMongodb size={32} />
                            <SiPostgresql size={32} />
                            <GrMysql size={32} />
                        </div>
                    </div>


                    <div className="card bg-[#297DA6] p-6 rounded-lg shadow-md w-70 flex flex-col items-center">
                        <span className="text-lg font-semibold mb-2">Cloud</span>
                        <div className="flex gap-4 mt-2">
                            <FaAws size={32} />
                            <VscAzure size={32} />
                        </div>
                    </div>
                </div>
                <nav className='flex gap-10 mt-10'>
                    <button
                        className="bg-[#D9831A] w-[10rem] py-4 rounded-2xl text-center text-white hover:bg-[#297DA6] font-bold font-default"
                        onClick={handleDownload}
                    >
                        Download CV
                    </button>

                    <Link
                        className="bg-[#D9831A] w-[10rem] py-4 rounded-2xl text-center text-white hover:bg-[#297DA6] font-bold font-default"
                        href="/screens/CertificatesPage"
                    >
                        Certificados
                    </Link>
                </nav>
            </div>
        </section >
    );
};



export default About;
