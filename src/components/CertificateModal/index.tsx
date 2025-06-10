"use client";
import { ICertificate } from "@/interface/ICertificate";
import Image from "next/image";
import { useEffect } from "react";

interface CertificateModalProps {
    isOpen: boolean;
    onClose: () => void;
    certificate?: ICertificate | null;
}

const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, onClose, certificate = null }) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => e.key === "Escape" && onClose();
        if (isOpen) document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleBackgroundClick = () => onClose();

    const stop = (e: React.MouseEvent) => e.stopPropagation();

    if (!isOpen) return null;

    return (
        <div 
        onClick={handleBackgroundClick}
        onMouseDown={stop}
        className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
            <div className="bg-white rounded-lg p-6 relative w-1/2 md:w-3/4 max-w-xl">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition-colors"
                >
                    &times;
                </button>
                <Image
                    src={certificate?.src ?? ""}
                    alt={certificate?.alt ?? ""}
                    className="w-full"
                    layout="responsive"
                    width={500}
                    height={300}
                />
            </div>
        </div>
    );
};

export default CertificateModal;