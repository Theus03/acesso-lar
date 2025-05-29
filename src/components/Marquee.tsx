import FastMarquee from "react-fast-marquee";
import Image from "next/image";

export default function Marquee() {
    return (
        <div id="carrouselMarcas" className="max-w-[100%] overflow-auto mt-8">
            <FastMarquee className="flex gap-6 w-full mb-6" speed={20}>
                <Image width={150} height={200} className="mb-6 mx-3 transition-transform duration-300 hover:scale-95 rounded-2xl shadow-md cursor-pointer" src="/madeiramadeira.png" alt="MadeiraMadeira" onClick={() => window.open("https://www.madeiramadeira.com.br/", "_blank", "noopener,noreferrer")} />
                <Image width={150} height={200} className="mb-6 mx-3 transition-transform duration-300 hover:scale-95 rounded-2xl shadow-md cursor-pointer" src="/tokstok.png" alt="Tok&Stock" onClick={() => window.open("https://www.tokstok.com.br/", "_blank", "noopener,noreferrer")} />
                <Image width={150} height={200} className="mb-6 mx-3 transition-transform duration-300 hover:scale-95 rounded-2xl shadow-md cursor-pointer" src="/casasbahia.png" alt="Casas Bahia" onClick={() => window.open("https://www.casasbahia.com.br/", "_blank", "noopener,noreferrer")} />
                <Image width={150} height={200} className="mb-6 mx-3 transition-transform duration-300 hover:scale-95 rounded-2xl shadow-md cursor-pointer" src="/mobly.png" alt="Mobly" onClick={() => window.open("https://www.mobly.com.br/", "_blank", "noopener,noreferrer")} />
                <Image width={150} height={200} className="mb-6 mx-3 transition-transform duration-300 hover:scale-95 rounded-2xl shadow-md cursor-pointer" src="/etna.png" alt="Etna" onClick={() => window.open("https://www.etna.com.br/", "_blank", "noopener,noreferrer")} />
                <Image width={150} height={200} className="mb-6 mx-3 transition-transform duration-300 hover:scale-95 rounded-2xl shadow-md cursor-pointer" src="/leroymerlin.png" alt="Leroy Merlin" onClick={() => window.open("https://www.leroymerlin.com.br/", "_blank", "noopener,noreferrer")} />
                <Image width={150} height={200} className="mb-6 mx-3 transition-transform duration-300 hover:scale-95 rounded-2xl shadow-md cursor-pointer" src="/pontofrio.png" alt="Ponto Frio" onClick={() => window.open("https://www.pontofrio.com.br/", "_blank", "noopener,noreferrer")} />
                <Image width={150} height={200} className="mb-6 mx-3 transition-transform duration-300 hover:scale-95 rounded-2xl shadow-md cursor-pointer" src="/magalu.png" alt="Magazine Luiza" onClick={() => window.open("https://www.magazineluiza.com.br/", "_blank", "noopener,noreferrer")} />
                <Image width={150} height={200} className="mb-6 mx-3 transition-transform duration-300 hover:scale-95 rounded-2xl shadow-md cursor-pointer" src="/americanas.png" alt="Americanas" onClick={() => window.open("https://www.americanas.com.br/", "_blank", "noopener,noreferrer")} />
                <Image width={150} height={200} className="mb-6 mx-3 transition-transform duration-300 hover:scale-95 rounded-2xl shadow-md cursor-pointer" src="/oppa.png" alt="Oppa" onClick={() => window.open("https://www.oppa.com.br/", "_blank", "noopener,noreferrer")} />
                <Image width={150} height={200} className="mb-6 mx-3 transition-transform duration-300 hover:scale-95 rounded-2xl shadow-md cursor-pointer" src="/westwing.png" alt="Westwing" onClick={() => window.open("https://www.westwing.com.br/", "_blank", "noopener,noreferrer")} />
                <Image width={150} height={200} className="mb-6 mx-3 transition-transform duration-300 hover:scale-95 rounded-2xl shadow-md cursor-pointer" src="/carrefour.png" alt="Carrefour" onClick={() => window.open("https://www.carrefour.com.br/", "_blank", "noopener,noreferrer")} />
                <Image width={150} height={200} className="mb-6 mx-3 transition-transform duration-300 hover:scale-95 rounded-2xl shadow-md cursor-pointer" src="/madesa.png" alt="Madesa" onClick={() => window.open("https://www.madesa.com/", "_blank", "noopener,noreferrer")} />        
            </FastMarquee>
        </div>
    )
}