import React from 'react';
import LibraryCard from './LibraryCard';
import { Terminal, Github, ArrowRight } from 'lucide-react';

const libraries = [
    {
        name: 'Extenso.js',
        description: 'Converta números em sua forma por extenso com suporte para cardinais, ordinais e monetários.',
        link: 'https://extenso.js.org',
        archived: false,
        color: 'blue',
        stars: 270,
        type: 'library'
    },
    {
        name: 'Conjugador',
        description: 'Conjugação completa de verbos em português identificando tempos, modos e formas nominais.',
        link: 'https://github.com/lusofonia/conjugador',
        archived: false,
        color: 'emerald',
        stars: 50,
        type: 'library'
    },
    {
        name: 'Pluralizador.js',
        description: 'Regras complexas de pluralização para palavras em português com exceções e casos especiais.',
        link: 'https://github.com/lusofonia/pluralizador.js',
        archived: false,
        color: 'purple',
        stars: 110,
        type: 'library'
    },
    {
        name: 'Desacentuador',
        description: 'Remova acentos e caracteres especiais de strings de forma performática, segura e eficiente.',
        link: 'https://github.com/lusofonia/desacentuador',
        archived: false,
        color: 'orange',
        stars: 3,
        type: 'library'
    },
    {
        name: 'Dicio',
        description: 'Acesso programático a definições, sinônimos e informações gramaticais de palavras portuguesas.',
        link: 'https://github.com/lusofonia/dicio',
        archived: false,
        color: 'cyan',
        stars: 55,
        type: 'cli'
    },
    {
        name: 'Piii.js',
        description: 'Filtro de palavrões e termos ofensivos em português para moderar conteúdo de forma automática.',
        link: 'https://github.com/lusofonia/piii.js',
        archived: true,
        color: 'rose',
        stars: 120,
        type: 'library'
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
            {/* Decorative Background */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `radial-gradient(#4f46e5 1px, transparent 1px)`,
                backgroundSize: '32px 32px'
            }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 text-sm font-semibold">
                        <Terminal className="w-4 h-4 text-lusofonia-primary" />
                        <span>Ecossistema Open Source</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 tracking-tight">
                        Código que Entende <span className="text-transparent bg-clip-text bg-gradient-to-r from-lusofonia-primary to-lusofonia-secondary">Português</span>
                    </h2>
                    
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
                        Bibliotecas especializadas, criadas para resolver as complexidades da nossa língua com elegância e performance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {libraries.map((lib, index) => (
                        <LibraryCard key={lib.name} {...lib} index={index} />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-slate-500 mb-6">
                        Junte-se a centenas de desenvolvedores construindo o futuro da tecnologia em português.
                    </p>
                    <a 
                        href="https://github.com/lusofonia" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-slate-600 hover:text-lusofonia-primary font-semibold transition-colors"
                    >
                        <Github className="w-5 h-5" />
                        Explorar organização no GitHub
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default LibraryShowcase;
