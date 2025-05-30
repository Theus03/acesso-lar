'use client'
import IdeiasSlider from '@/components/IdeiasSlider';
import Marquee from '@/components/Marquee';
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
                <Image src="/logo.png" width={200} height={200} className='w-50' alt="Logo da AcessoLar" />
                {displayName && (
                    <span className="text-2xl font-bold">👋 Olá, {displayName}!</span>
                )}
            </header>
            <main className="flex gap-32 ml-16">
                <div className="max-w-[60%]">
                    <h4 className="text-2xl text-gray-600">Encontre uma marca que você conhece e confia.</h4>
                    <Marquee></Marquee>
                    <IdeiasSlider></IdeiasSlider>
                </div>
                <div className="max-w-[20%]">
                    <h4 className="text-2xl text-gray-600 mb-8">Loja mais acessadas</h4>
                    <div id="rankingStories" className="w-100 rounded-2xl flex flex-col gap-4">
                        <div id="madeiraMadeira" className="flex items-center bg-orange-200 w-full rounded-2xl transition-transform duration-300 hover:translate-x-2">
                            <Image width={200} height={200} src="/madeiramadeira.png" className="w-28" alt="MadeiraMadeira"/>
                            <h5 className="ml-4 text-lg text-orange-600 font-medium">MadeiraMadeira</h5>
                        </div>
                        <div id="tokstok" className="flex items-center bg-green-100 w-full rounded-2xl transition-transform duration-300 hover:translate-x-2">
                            <Image width={200} height={200} src="/tokstok.png" className="w-28" alt="Tok&Stok"/>
                            <h5 className="ml-4 text-lg text-emerald-600 font-medium">Tok&Stok</h5>
                        </div>
                        <div id="tokstok" className="flex items-center bg-blue-100 w-full rounded-2xl transition-transform duration-300 hover:translate-x-2">
                            <Image width={200} height={200} src="/casasbahia.png" className="w-28" alt="Casas Bahia"/>
                            <h5 className="ml-4 text-lg text-blue-600 font-medium">Casas Bahia</h5>
                        </div>
                    </div>
                    <h4 className="text-2xl text-gray-600 mt-8 mb-8">Suas Favoritas</h4>
                    <div id="yourFavorites" className="w-100 grid gap-4 grid-cols-3 rounded-2xl">
                        <Image width={200} height={200} src="/mobly.png" alt="Mobly" className='transition-transform duration-300 hover:-translate-y-2' />
                        <Image width={200} height={200} src="/madesa.png" alt="Madesa" className='transition-transform duration-300 hover:-translate-y-2' />
                        <Image width={200} height={200} src="/leroymerlin.png" alt="Leroy Merlin" className='transition-transform duration-300 hover:-translate-y-2' />
                        <Image width={200} height={200} src="/magalu.png" alt="Magazine Luiza" className='transition-transform duration-300 hover:-translate-y-2' />
                    </div>
                </div>
            </main>
            <footer className="flex w-full items-end justify-end pr-16">
                <a href="/login" className='underline'>Sair</a>
            </footer>
        </div>
    )
}