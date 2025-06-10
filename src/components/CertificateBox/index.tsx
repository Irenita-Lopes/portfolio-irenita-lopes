import { ICertificate } from "@/interface/ICertificate";

export interface ICertificateBox {
    certificate: ICertificate;
    onSelect: (certificate: ICertificate) => void;
}

const CertificateBox: React.FC<ICertificateBox> = ({ certificate, onSelect }) => {
    const handleClick = () => {
        onSelect(certificate);
    };

    return (
        <div
            className="cursor-pointer rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
            onClick={handleClick}
        >
             <div className="p-4">
                <h3 className="text-lg font-semibold">{certificate.alt}</h3>
            </div>
            <img
                src={certificate.src.src}
                alt={certificate.alt}
                className="w-full h-auto rounded-t-lg"
            />
        </div>
    );
}
export default CertificateBox;
