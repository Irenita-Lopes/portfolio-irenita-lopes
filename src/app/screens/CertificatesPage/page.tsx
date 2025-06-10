"use client";
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import bootcamp from '@/assets/Irenita-desenvolvimento-profissional-bootcamp-programacao.png';
import webdom from '@/assets/Irenita-Irenita-desenvolvimento-profissional-letras-js-web-manipulando-dom.png';
import design from '@/assets/Irenita-desenvolvimento-profissional-design.png';
import fundamentos from '@/assets/Irenita-desenvolvimento-profissional-fundamentos-programacao.png';
import gg from '@/assets/Irenita-desenvolvimento-profissional-git-github.png';
import letras from '@/assets/Irenita-desenvolvimento-profissional-letras.png';
import logica from '@/assets/Irenita-desenvolvimento-profissional-logica-js.png';
import site from '@/assets/Irenita-desenvolvimento-profissional-site-css-js-html.png';
import tech from '@/assets/Irenita-desenvolvimento-profissional-tech.png';
import tdd from '@/assets/Irenita-desenvolvimento-profissional-teste-tdd.png';
import versionamento from '@/assets/Irenita-desenvolvimento-profissional-versionamento.png';
import aprendizagem from '@/assets/Irenita-desenvolvimento-socioemocional-aprendizagem.png';
import foco from '@/assets/Irenita-desenvolvimento-socioemocional-foco.png';
import produtividade from '@/assets/Irenita-desenvolvimento-socioemocional-produtividade.png';
import { ICertificate } from '@/interface/ICertificate';
import CertificateBox from '@/components/CertificateBox';
import CertificateModal from '@/components/CertificateModal';



const Certificates = () => {
    const [showModal, setShowModal] = useState(false);
    const [certificateSelected, setCertificateSelected] = useState<ICertificate | null>(null);

    const certificates = [
        {
            src: bootcamp,
            alt: 'bootcamp Programação do Zero'
        },
        {
            src: webdom,
            alt: 'Manipulando o DOM com JavaScript'
        },
        {
            src: design,
            alt: 'Design para Desenvolvedores'
        },
        {
            src: fundamentos,
            alt: 'Fundamentos de Programação'
        },
        {
            src: gg,
            alt: 'Git e GitHub'
        },
        {
            src: letras,
            alt: 'Graduação em Letras'
        },
        {
            src: logica,
            alt: 'Lógica de Programação com JavaScript'
        },
        {
            src: site,
            alt: 'Criando um Site com HTML, CSS e JavaScript'
        },
        {
            src: tech,
            alt: 'Carreira Tech'
        },
        {
            src: tdd,
            alt: 'Programação Orientada a Testes (TDD)'
        },
        {
            src: versionamento,
            alt: 'Versionamento de Código'
        },
        {
            src: aprendizagem,
            alt: 'Aprendizagem Contínua'
        },
        {
            src: foco,
            alt: 'Foco e Concentração'
        },
        {
            src: produtividade,
            alt: 'Produtividade Pessoal'
        }
    ];

    const handleSelectCertificate = (certificate: ICertificate) => {
        setCertificateSelected(certificate);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <section className="min-h-screen px-4 py-10 md:py-20 md:px-16 bg-white" id="certificates">
            <h1 className="text-4xl md:text-5xl text-center mb-10 text-zinc-800 font-semibold">
                Meus Certificados
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {certificates.map((certificate) => (
                    <CertificateBox
                        key={certificate.alt}
                        certificate={certificate}
                        onSelect={handleSelectCertificate}
                    />
                ))}
            </div>
            <CertificateModal
                isOpen={showModal}
                onClose={handleCloseModal}
                certificate={certificateSelected}
            />
        </section>
    );
};

export default Certificates;
