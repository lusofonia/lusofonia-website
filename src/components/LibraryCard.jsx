import React from 'react';
import { ArrowRight, Box, Layers, Type, BookOpen, Archive, Code, Star } from 'lucide-react';

const getIcon = (name) => {
    const n = name.toLowerCase();
    if (n.includes('extenso')) return Type;
    if (n.includes('conjugador')) return Layers;
    if (n.includes('plural')) return Box;
    if (n.includes('dicio')) return BookOpen;
    if (n.includes('piii')) return Archive;
    return Code;
};

const colorVariants = {
    blue: {
        border: 'border-blue-500/35 hover:border-blue-600/50',
        icon: 'text-blue-600/80'
    },
    emerald: {
        border: 'border-emerald-500/35 hover:border-emerald-600/50',
        icon: 'text-emerald-600/80'
    },
    purple: {
        border: 'border-purple-500/35 hover:border-purple-600/50',
        icon: 'text-purple-600/80'
    },
    orange: {
        border: 'border-orange-500/35 hover:border-orange-600/50',
        icon: 'text-orange-600/80'
    },
    cyan: {
        border: 'border-cyan-500/35 hover:border-cyan-600/50',
        icon: 'text-cyan-600/80'
    },
    rose: {
        border: 'border-rose-500/35 hover:border-rose-600/50',
        icon: 'text-rose-600/80'
    },
    default: {
        border: 'border-lusofonia-primary/40 hover:border-lusofonia-primary',
        icon: 'text-lusofonia-primary'
    }
};

const LibraryCard = ({ name, description, link, archived = false, color = 'default', stars = 0, index = 0 }) => {
    const Icon = getIcon(name);
    const theme = colorVariants[color] || colorVariants.default;

    // Extract border color for accent bar (remove hover part)
    const borderBase = theme.border.split(' ')[0];
    const accentBarColor = borderBase.replace('border-', 'bg-');

    return (
        <div
            className={`group relative flex flex-col h-full rounded-3xl border-2 ${theme.border} transition-all duration-500`}
        >
            <div className="relative flex flex-col h-full bg-white/80 backdrop-blur-sm rounded-[20px] overflow-hidden z-10">
                {/* Color accent bar - same color as border */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${accentBarColor} group-hover:opacity-100 transition-opacity rounded-t-[20px]`} />
                
                <div className="flex flex-col h-full p-8 pt-9">
                    <div className="flex justify-between items-start mb-6">
                        <div className="p-4 rounded-2xl border-2 bg-gradient-to-br from-slate-50 to-slate-100/80 border-slate-200/50 group-hover:from-slate-100 group-hover:to-slate-200 group-hover:border-slate-300/60 transition-all duration-300">
                            <Icon className={`w-7 h-7 ${theme.icon} transition-transform duration-300 group-hover:scale-110`} />
                        </div>
                        {archived && (
                            <span className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider bg-yellow-200/80 text-yellow-800 rounded-lg border border-yellow-300 backdrop-blur-sm">
                                Arquivado
                            </span>
                        )}
                    </div>

                    <div className="flex items-center justify-between mb-3">
                        <h3 className="text-2xl font-bold text-black">
                            {name}
                        </h3>
                        {stars > 0 && (
                            <div className="flex items-center gap-1 text-slate-600">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm font-semibold">{stars}</span>
                            </div>
                        )}
                    </div>

                    <p className="text-slate-500 mb-8 leading-relaxed flex-grow font-medium">
                        {description}
                    </p>

                    <div className="mt-auto pt-6 border-t-2 border-slate-200/50">
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-3 py-2 text-sm font-bold rounded-lg bg-lusofonia-primary text-white hover:bg-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-lg group/link"
                        >
                            Conhecer projeto
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LibraryCard;
