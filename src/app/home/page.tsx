export default function Home() {
    return (
        <div>
            <header className="flex items-center justify-between p-12">
                <img className="w-50" src="logo.png" alt="Logo da AcessoLar" />
                <span className="text-2xl font-bold">👋 Olá, Matheus!</span>
            </header>
            <main className="flex">
                <div>
                    <h4>Encontre uma marca que você conhece e confia.</h4>
                    <div id="carrouselMarcas">Carrossel de Imagens</div>
                    <div className="flex">
                        <div>Image 1</div>
                        <div>Image 2</div>
                    </div>
                </div>
                <div>
                    <h4>Loja mais acessadas</h4>
                    <div id="rankingStories">Ranking de Lojas</div>
                    <div id="yourFavorites">Suas Favoritas</div>
                </div>
            </main>
        </div>
    )
}