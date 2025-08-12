"use client";
import React from 'react';
import { useState } from "react";
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
import frontendProgramaria from '@/assets/Irenita-desenvolvimento-profissional-frontend.png';
import backendProgramaria from '@/assets/Irenita-desenvolvimento-profissional-backend.png';
import copilotAI from '@/assets/Irenita-ia-copilot.png';
import elasAI from '@/assets/Irenita-ia-elas.png';
import generativaAI from '@/assets/Irenita-ia-generativa.png';
import geralAzureAI from '@/assets/Irenita-ia-visao-geral-azure.png';
import fundAzureAI from '@/assets/Irenita-ia-fund-visao-computacional-ia-azure.png';

const Certificates = () => {
    const [showModal, setShowModal] = useState(false);
    const [certificateSelected, setCertificateSelected] = useState<ICertificate | null>(null);

    const certificateCategories = {
        JavaScript: [
            {
                src: backendProgramaria,
                alt: 'Back-End'
            },
            {
                src: bootcamp,
                alt: 'Programação do Zero'
            },

            {
                src: fundamentos,
                alt: 'Fundamentos de Programação'
            },
            {
                src: logica,
                alt: 'Lógica de Programação'
            },

        ],
        Versionamento: [
            {
                src: gg,
                alt: 'Git e GitHub'
            },
            {
                src: versionamento,
                alt: 'Versionamento de Código'
            }
        ],
        Teste: [
            {
                src: tdd,
                alt: 'Programação Orientada a Testes'
            }
        ],
        Web: [
            {
                src: webdom,
                alt: 'Manipulando Elementos no DOM'
            },
            {
                src: site,
                alt: 'HTML, CSS e JavaScript'
            }
        ],
        Frontend: [
            {
                src: design,
                alt: 'Design'
            },
            {
                src: frontendProgramaria,
                alt: 'Front-End'
            }
        ],
        AI: [
            {
                src: copilotAI,
                alt: 'IA Generativo da Microsoft - Copilot'
            },
            {
                src: elasAI,
                alt: 'Mentoria - Elas na IA'
            },
            {
                src: generativaAI,
                alt: 'Inteligência Artificial Generativa'
            },
            {
                src: geralAzureAI,
                alt: 'Visão Geral da IA no Azure'
            },
            {
                src: fundAzureAI,
                alt: 'Fundamentos da Visão Computacional - IA do Azure'
            }
        ],
        Carreira: [
            {
                src: tech,
                alt: 'Carreiras em Tech'
            },
            {
                src: aprendizagem,
                alt: 'Aprender a Aprender: Técnicas para seu Autodesenvolvimento'
            },
            {
                src: foco,
                alt: 'Foco: Trazendo mais resultados para o dia a dia'
            },
            {
                src: produtividade,
                alt: 'Hábitos: Da produtividade às metas pessoais'
            }
        ],
        Educação: [
            {
                src: letras,
                alt: 'Licenciatura em Letras'
            }
        ]
    };

    const renderCategory = (category: string, certs: ICertificate[]) => (
        <div key={category} className="mb-8">
            <h2 className="text-3xl mb-4 text-white">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
                {certs.map((certificate) => (
                    <CertificateBox
                        key={certificate.alt}
                        certificate={certificate}
                        onSelect={handleSelectCertificate}
                    />
                ))}
            </div>
        </div>
    );

    const handleSelectCertificate = (certificate: ICertificate) => {
        setCertificateSelected(certificate);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <section className="min-h-screen px-4 py-10 md:py-20 md:px-16 bg-[#297DA6]" id="certificates">
            <h1 className="text-4xl md:text-5xl text-center mb-10 text-white font-semibold">
                Meus Certificados
            </h1>
            {Object.entries(certificateCategories).map(([category, certs]) => renderCategory(category, certs))}
            <CertificateModal
                isOpen={showModal}
                onClose={handleCloseModal}
                certificate={certificateSelected}
            />
        </section>
    );
};

export default Certificates;
