import React, { useEffect, useState } from 'react';

type UnsplashImage = {
  id: string;
  urls: {
    regular: string;
  };
  alt_description: string | null;
};

type IdeiasSliderProps = {
  query?: string;
  imagensPorSlide?: number;
  tempoTroca?: number;
};

const IdeiasSlider: React.FC<IdeiasSliderProps> = ({
  query = 'home furniture',
  imagensPorSlide = 2,
  tempoTroca = 5000,
}) => {
  const [imagens, setImagens] = useState<UnsplashImage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const carregarImagens = async () => {
      try {
        const resposta = await fetch(
          `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=10&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
        );
        const dados = await resposta.json();
        setImagens(dados.results);
      } catch (error) {
        console.error('Erro ao carregar imagens do Unsplash:', error);
      }
    };

    carregarImagens();
  }, [query]);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + imagensPorSlide;
        return nextIndex >= imagens.length ? 0 : nextIndex;
      });
    }, tempoTroca);

    return () => clearInterval(intervalo);
  }, [imagens, imagensPorSlide, tempoTroca]);

  const imagensAtuais = imagens.slice(currentIndex, currentIndex + imagensPorSlide);

  return (
    <div>
      <h4 className="text-2xl text-gray-600 mt-8">Ideias para o seu lar.</h4>
      <div className="flex gap-6 mt-6 transition-all duration-500">
        {imagensAtuais.map((imagem) => (
            <img
            key={imagem.id}
            src={imagem.urls.regular}  // maior resolução
            alt={imagem.alt_description || 'Imagem'}
            className="rounded-lg object-cover w-140 h-100"
          />
        ))}
      </div>
    </div>
  );
};

export default IdeiasSlider;
