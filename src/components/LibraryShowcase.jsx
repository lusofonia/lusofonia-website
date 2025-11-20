import React from 'react';
import LibraryCard from './LibraryCard';

const libraries = [
    {
        name: 'Extenso.js',
        description: 'Converta números em sua forma por extenso. Suporta números cardinais, ordinais e monetários com alta precisão.',
        link: 'https://extenso.js.org',
        archived: false,
        color: 'blue',
        stars: 270
    },
    {
        name: 'Conjugador',
        description: 'Conjugação completa de verbos em português. Identifica tempos, modos e formas nominais automaticamente.',
        link: 'https://github.com/lusofonia/conjugador',
        archived: false,
        color: 'emerald',
        stars: 50
    },
    {
        name: 'Pluralizador.js',
        description: 'Regras complexas de pluralização para palavras em português, lidando com exceções e casos especiais.',
        link: 'https://github.com/lusofonia/pluralizador.js',
        archived: false,
        color: 'purple',
        stars: 110
    },
    {
        name: 'Desacentuador',
        description: 'Remova acentos e caracteres especiais de strings de forma performática e segura.',
        link: 'https://github.com/lusofonia/desacentuador',
        archived: false,
        color: 'orange',
        stars: 3
    },
    {
        name: 'Dicio',
        description: 'Acesso programático a definições, sinônimos e informações gramaticais de palavras em português.',
        link: 'https://github.com/lusofonia/dicio',
        archived: false,
        color: 'cyan',
        stars: 55
    },
    {
        name: 'Piii.js',
        description: 'Filtro de palavrões e termos ofensivos em português.',
        link: 'https://github.com/lusofonia/piii.js',
        archived: true,
        color: 'rose',
        stars: 120
    }
].sort((a, b) => {
    // Arquivados sempre por último
    if (a.archived && !b.archived) return 1;
    if (!a.archived && b.archived) return -1;
    // Ordenar por número de estrelas (maior para menor)
    return b.stars - a.stars;
});

const LibraryShowcase = () => {
    return (
        <section id="libraries" className="py-20 bg-slate-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                        Nossas Bibliotecas
                    </h2>
                    <p className="text-slate-700 max-w-2xl mx-auto font-medium">
                        Ferramentas poderosas e leves, desenvolvidas para resolver problemas reais de desenvolvimento em português.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {libraries.map((lib, index) => (
                        <LibraryCard key={lib.name} {...lib} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LibraryShowcase;
