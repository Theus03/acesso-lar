'use client'
import IdeiasSlider from '@/components/IdeiasSlider';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

export default function Home() {

    const { data: session } = useSession();
    console.log(session);
    let nameFromStorage = null;
    let displayName = null;

    if (typeof window !== 'undefined') {
      nameFromStorage = sessionStorage.getItem("name");
      if (sessionStorage.getItem("name") != null) {
         displayName = nameFromStorage;
      } else {
         displayName = session?.user?.name;
      }
    } 
    
    return (
        <div>
            <header className="flex items-center justify-between p-12">
                <img className="w-50" src="logo.png" alt="Logo da AcessoLar" />
                {displayName && (
                    <span className="text-2xl font-bold">👋 Olá, {displayName}!</span>
                )}
            </header>
            <main className="flex gap-32 ml-16">
                <div className="max-w-[60%]">
                    <h4 className="text-2xl text-gray-600">Encontre uma marca que você conhece e confia.</h4>
                    <div id="carrouselMarcas" className="max-w-[100%] overflow-auto mt-8">
                        <div className="flex gap-6 w-full">
                            <img className="cursor-pointer" src="madeiramadeira.png" alt="MadeiraMadeira" onClick={() => window.open("https://www.madeiramadeira.com.br/", "_blank", "noopener,noreferrer")} />
                            <img className="cursor-pointer" src="tokstok.png" alt="Tok&Stock" onClick={() => window.open("https://www.tokstok.com.br/", "_blank", "noopener,noreferrer")} />
                            <img className="cursor-pointer" src="casasbahia.png" alt="Casas Bahia" onClick={() => window.open("https://www.casasbahia.com.br/", "_blank", "noopener,noreferrer")} />
                            <img className="cursor-pointer" src="mobly.png" alt="Mobly" onClick={() => window.open("https://www.mobly.com.br/", "_blank", "noopener,noreferrer")} />
                            <img className="cursor-pointer" src="etna.png" alt="Etna" onClick={() => window.open("https://www.etna.com.br/", "_blank", "noopener,noreferrer")} />
                            <img className="cursor-pointer" src="leroymerlin.png" alt="Leroy Merlin" onClick={() => window.open("https://www.leroymerlin.com.br/", "_blank", "noopener,noreferrer")} />
                            <img className="cursor-pointer" src="pontofrio.png" alt="Ponto Frio" onClick={() => window.open("https://www.pontofrio.com.br/", "_blank", "noopener,noreferrer")} />
                            <img className="cursor-pointer" src="magalu.png" alt="Magazine Luiza" onClick={() => window.open("https://www.magazineluiza.com.br/", "_blank", "noopener,noreferrer")} />
                            <img className="cursor-pointer" src="americanas.png" alt="Americanas" onClick={() => window.open("https://www.americanas.com.br/", "_blank", "noopener,noreferrer")} />
                            <img className="cursor-pointer" src="oppa.png" alt="Oppa" onClick={() => window.open("https://www.oppa.com.br/", "_blank", "noopener,noreferrer")} />
                            <img className="cursor-pointer" src="westwing.png" alt="Westwing" onClick={() => window.open("https://www.westwing.com.br/", "_blank", "noopener,noreferrer")} />
                            <img className="cursor-pointer" src="carrefour.png" alt="Carrefour" onClick={() => window.open("https://www.carrefour.com.br/", "_blank", "noopener,noreferrer")} />
                            <img className="cursor-pointer" src="madesa.png" alt="Madesa" onClick={() => window.open("https://www.madesa.com/", "_blank", "noopener,noreferrer")} />
                        </div>
                    </div>
                   <IdeiasSlider></IdeiasSlider>

                </div>
                <div className="max-w-[20%]">
                    <h4 className="text-2xl text-gray-600 mb-8">Loja mais acessadas</h4>
                    <div id="rankingStories" className="w-100 rounded-2xl flex flex-col gap-4">
                        <div id="madeiraMadeira" className="flex items-center bg-orange-200 w-full rounded-2xl">
                            <img src="madeiramadeira.png" className="w-28" alt="MadeiraMadeira"/>
                            <h5 className="ml-4 text-lg text-orange-600 font-medium">MadeiraMadeira</h5>
                        </div>
                        <div id="tokstok" className="flex items-center bg-green-100 w-full rounded-2xl">
                            <img src="tokstok.png" className="w-28" alt="Tok&Stok"/>
                            <h5 className="ml-4 text-lg text-emerald-600 font-medium">Tok&Stok</h5>
                        </div>
                        <div id="tokstok" className="flex items-center bg-blue-100 w-full rounded-2xl">
                            <img src="casasbahia.png" className="w-28" alt="Casas Bahia"/>
                            <h5 className="ml-4 text-lg text-blue-600 font-medium">Casas Bahia</h5>
                        </div>
                    </div>
                    <h4 className="text-2xl text-gray-600 mt-8 mb-8">Suas Favoritas</h4>
                    <div id="yourFavorites" className="w-100 grid gap-4 grid-cols-3 rounded-2xl">
                        <img src="mobly.png" alt="Mobly" />
                        <img src="madesa.png" alt="Madesa" />
                        <img src="leroymerlin.png" alt="Leroy Merlin" />
                        <img src="magalu.png" alt="Magazine Luiza" />
                    </div>
                </div>
            </main>
            <footer className="flex w-full items-end justify-end pr-16">
                <a href="/login" className='underline'>Sair</a>
            </footer>
        </div>
    )
}