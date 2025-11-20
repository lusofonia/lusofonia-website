import React from 'react';
import { ArrowRight, Box, Layers, Type, BookOpen, Archive, Code } from 'lucide-react';

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
        border: 'border-blue-500/35',
        borderHover: 'hover:border-blue-600/50',
        shadow: 'shadow-blue-500/12',
        shadowHover: 'hover:shadow-blue-600/18',
        blob: 'bg-blue-500/10',
        blobHover: 'group-hover:bg-blue-600/15',
        iconWrapper: 'bg-gradient-to-br from-blue-50 to-blue-100/90 border-blue-300/50',
        iconWrapperHover: 'group-hover:from-blue-100 group-hover:to-blue-200 group-hover:border-blue-400/60',
        icon: 'text-blue-600/80',
        title: 'text-slate-800',
        titleHover: 'group-hover:text-slate-900',
        link: 'text-slate-700',
        linkHover: 'hover:text-slate-900',
        gradient: 'from-blue-500/5 via-blue-400/3 to-transparent',
        accent: 'bg-blue-600/50',
        accentBar: 'bg-blue-500/35'
    },
    emerald: {
        border: 'border-emerald-500/35',
        borderHover: 'hover:border-emerald-600/50',
        shadow: 'shadow-emerald-500/12',
        shadowHover: 'hover:shadow-emerald-600/18',
        blob: 'bg-emerald-500/10',
        blobHover: 'group-hover:bg-emerald-600/15',
        iconWrapper: 'bg-gradient-to-br from-emerald-50 to-emerald-100/90 border-emerald-300/50',
        iconWrapperHover: 'group-hover:from-emerald-100 group-hover:to-emerald-200 group-hover:border-emerald-400/60',
        icon: 'text-emerald-600/80',
        title: 'text-slate-800',
        titleHover: 'group-hover:text-slate-900',
        link: 'text-slate-700',
        linkHover: 'hover:text-slate-900',
        gradient: 'from-emerald-500/5 via-emerald-400/3 to-transparent',
        accent: 'bg-emerald-600/50',
        accentBar: 'bg-emerald-500/35'
    },
    purple: {
        border: 'border-purple-500/35',
        borderHover: 'hover:border-purple-600/50',
        shadow: 'shadow-purple-500/12',
        shadowHover: 'hover:shadow-purple-600/18',
        blob: 'bg-purple-500/10',
        blobHover: 'group-hover:bg-purple-600/15',
        iconWrapper: 'bg-gradient-to-br from-purple-50 to-purple-100/90 border-purple-300/50',
        iconWrapperHover: 'group-hover:from-purple-100 group-hover:to-purple-200 group-hover:border-purple-400/60',
        icon: 'text-purple-600/80',
        title: 'text-slate-800',
        titleHover: 'group-hover:text-slate-900',
        link: 'text-slate-700',
        linkHover: 'hover:text-slate-900',
        gradient: 'from-purple-500/5 via-purple-400/3 to-transparent',
        accent: 'bg-purple-600/50',
        accentBar: 'bg-purple-500/35'
    },
    orange: {
        border: 'border-orange-500/35',
        borderHover: 'hover:border-orange-600/50',
        shadow: 'shadow-orange-500/12',
        shadowHover: 'hover:shadow-orange-600/18',
        blob: 'bg-orange-500/10',
        blobHover: 'group-hover:bg-orange-600/15',
        iconWrapper: 'bg-gradient-to-br from-orange-50 to-orange-100/90 border-orange-300/50',
        iconWrapperHover: 'group-hover:from-orange-100 group-hover:to-orange-200 group-hover:border-orange-400/60',
        icon: 'text-orange-600/80',
        title: 'text-slate-800',
        titleHover: 'group-hover:text-slate-900',
        link: 'text-slate-700',
        linkHover: 'hover:text-slate-900',
        gradient: 'from-orange-500/5 via-orange-400/3 to-transparent',
        accent: 'bg-orange-600/50',
        accentBar: 'bg-orange-500/35'
    },
    cyan: {
        border: 'border-cyan-500/35',
        borderHover: 'hover:border-cyan-600/50',
        shadow: 'shadow-cyan-500/12',
        shadowHover: 'hover:shadow-cyan-600/18',
        blob: 'bg-cyan-500/10',
        blobHover: 'group-hover:bg-cyan-600/15',
        iconWrapper: 'bg-gradient-to-br from-cyan-50 to-cyan-100/90 border-cyan-300/50',
        iconWrapperHover: 'group-hover:from-cyan-100 group-hover:to-cyan-200 group-hover:border-cyan-400/60',
        icon: 'text-cyan-600/80',
        title: 'text-slate-800',
        titleHover: 'group-hover:text-slate-900',
        link: 'text-slate-700',
        linkHover: 'hover:text-slate-900',
        gradient: 'from-cyan-500/5 via-cyan-400/3 to-transparent',
        accent: 'bg-cyan-600/50',
        accentBar: 'bg-cyan-500/35'
    },
    rose: {
        border: 'border-rose-500/35',
        borderHover: 'hover:border-rose-600/50',
        shadow: 'shadow-rose-500/12',
        shadowHover: 'hover:shadow-rose-600/18',
        blob: 'bg-rose-500/10',
        blobHover: 'group-hover:bg-rose-600/15',
        iconWrapper: 'bg-gradient-to-br from-rose-50 to-rose-100/90 border-rose-300/50',
        iconWrapperHover: 'group-hover:from-rose-100 group-hover:to-rose-200 group-hover:border-rose-400/60',
        icon: 'text-rose-600/80',
        title: 'text-slate-800',
        titleHover: 'group-hover:text-slate-900',
        link: 'text-slate-700',
        linkHover: 'hover:text-slate-900',
        gradient: 'from-rose-500/5 via-rose-400/3 to-transparent',
        accent: 'bg-rose-600/50',
        accentBar: 'bg-rose-500/35'
    },
    default: {
        border: 'border-lusofonia-primary/40',
        borderHover: 'hover:border-lusofonia-primary',
        shadow: 'shadow-lusofonia-primary/20',
        shadowHover: 'hover:shadow-lusofonia-primary/30',
        blob: 'bg-lusofonia-primary/20',
        blobHover: 'group-hover:bg-lusofonia-primary/30',
        iconWrapper: 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-300/50',
        iconWrapperHover: 'group-hover:from-purple-100 group-hover:to-purple-200 group-hover:border-purple-400',
        icon: 'text-lusofonia-primary',
        title: 'text-slate-900',
        titleHover: 'group-hover:text-lusofonia-primary',
        link: 'text-slate-900',
        linkHover: 'hover:text-lusofonia-primary',
        gradient: 'from-lusofonia-primary/10 via-lusofonia-secondary/5 to-transparent',
        accent: 'bg-lusofonia-primary',
        accentBar: 'bg-lusofonia-primary/40'
    }
};

const LibraryCard = ({ name, description, link, archived = false, color = 'default', index = 0 }) => {
    const Icon = getIcon(name);
    const theme = colorVariants[color] || colorVariants.default;

    return (
        <div
            className={`group relative flex flex-col h-full rounded-3xl border-2 ${theme.border} ${theme.borderHover} transition-all duration-500`}
        >
            <div className="relative flex flex-col h-full bg-white/80 backdrop-blur-sm rounded-[20px] overflow-hidden z-10">
                {/* Color accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${theme.accentBar} group-hover:opacity-100 transition-opacity rounded-t-[20px]`} />
                
                <div className="flex flex-col h-full p-8 pt-9">
                    <div className="flex justify-between items-start mb-6">
                        <div className={`p-4 rounded-2xl border-2 transition-all duration-300 ${theme.iconWrapper} ${theme.iconWrapperHover}`}>
                            <Icon className={`w-7 h-7 ${theme.icon} transition-transform duration-300 group-hover:scale-110`} />
                        </div>
                        {archived && (
                            <span className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider bg-slate-200/80 text-slate-700 rounded-lg border border-slate-300 backdrop-blur-sm">
                                Arquivado
                            </span>
                        )}
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-black">
                        {name}
                    </h3>

                    <p className="text-slate-700 mb-8 leading-relaxed flex-grow font-medium">
                        {description}
                    </p>

                    <div className="mt-auto pt-6 border-t-2 border-slate-200/50">
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm font-bold transition-all duration-300 text-black group/link"
                        >
                            Conhecer projeto
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 text-black group-hover/link:translate-x-2" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LibraryCard;
