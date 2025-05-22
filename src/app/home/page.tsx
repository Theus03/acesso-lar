export default function Home() {
    return (
        <div>
            <header className="flex items-center justify-between p-12">
                <img className="w-50" src="logo.png" alt="Logo da AcessoLar" />
                <span className="text-2xl font-bold">👋 Olá, Matheus!</span>
            </header>
            <main className="flex gap-32 ml-16">
                <div className="max-w-[60%]">
                    <h4 className="text-2xl text-gray-600">Encontre uma marca que você conhece e confia.</h4>
                    <div id="carrouselMarcas" className="max-w-[100%] overflow-auto mt-8">
                        <div className="flex gap-6 w-full">
                            <img src="madeiramadeira.png" alt="MadeiraMadeira"/>
                            <img src="tokstok.png" alt="Tok&Stock" />
                            <img src="casasbahia.png" alt="Casas Bahia" />
                            <img src="mobly.png" alt="Mobly" />
                            <img src="etna.png" alt="Etna" />
                            <img src="leroymerlin.png" alt="Leroy Merlin" />
                            <img src="pontofrio.png" alt="Ponto Frio" />
                            <img src="magalu.png" alt="Magazine Luiza" />
                            <img src="americanas.png" alt="Americanas" />
                            <img src="oppa.png" alt="Oppa" />
                            <img src="westwing.png" alt="Westiwing" />
                            <img src="carrefour.png" alt="Carrefour" />
                            <img src="madesa.png" alt="Madesa" />
                        </div>
                    </div>
                    <h4 className="text-2xl text-gray-600 mt-8">Ideias para o seu lar.</h4>
                    <div className="flex gap-6 mt-6">
                        <img src="ideia1.png" alt="Ideia 1" />
                        <img src="ideia2.png" alt="Ideia 2" />
                    </div>

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
        </div>
    )
}