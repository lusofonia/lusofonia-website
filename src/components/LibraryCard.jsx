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
        border: 'border-blue-400/40',
        borderHover: 'hover:border-blue-500',
        shadow: 'shadow-blue-500/20',
        shadowHover: 'hover:shadow-blue-500/30',
        blob: 'bg-blue-400/20',
        blobHover: 'group-hover:bg-blue-500/30',
        iconWrapper: 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-300/50',
        iconWrapperHover: 'group-hover:from-blue-100 group-hover:to-blue-200 group-hover:border-blue-400',
        icon: 'text-blue-600',
        title: 'text-blue-700',
        titleHover: 'group-hover:text-blue-800',
        link: 'text-blue-600',
        linkHover: 'hover:text-blue-700',
        gradient: 'from-blue-500/10 via-blue-400/5 to-transparent',
        accent: 'bg-blue-500'
    },
    emerald: {
        border: 'border-emerald-400/40',
        borderHover: 'hover:border-emerald-500',
        shadow: 'shadow-emerald-500/20',
        shadowHover: 'hover:shadow-emerald-500/30',
        blob: 'bg-emerald-400/20',
        blobHover: 'group-hover:bg-emerald-500/30',
        iconWrapper: 'bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-300/50',
        iconWrapperHover: 'group-hover:from-emerald-100 group-hover:to-emerald-200 group-hover:border-emerald-400',
        icon: 'text-emerald-600',
        title: 'text-emerald-700',
        titleHover: 'group-hover:text-emerald-800',
        link: 'text-emerald-600',
        linkHover: 'hover:text-emerald-700',
        gradient: 'from-emerald-500/10 via-emerald-400/5 to-transparent',
        accent: 'bg-emerald-500'
    },
    purple: {
        border: 'border-purple-400/40',
        borderHover: 'hover:border-purple-500',
        shadow: 'shadow-purple-500/20',
        shadowHover: 'hover:shadow-purple-500/30',
        blob: 'bg-purple-400/20',
        blobHover: 'group-hover:bg-purple-500/30',
        iconWrapper: 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-300/50',
        iconWrapperHover: 'group-hover:from-purple-100 group-hover:to-purple-200 group-hover:border-purple-400',
        icon: 'text-purple-600',
        title: 'text-purple-700',
        titleHover: 'group-hover:text-purple-800',
        link: 'text-purple-600',
        linkHover: 'hover:text-purple-700',
        gradient: 'from-purple-500/10 via-purple-400/5 to-transparent',
        accent: 'bg-purple-500'
    },
    orange: {
        border: 'border-orange-400/40',
        borderHover: 'hover:border-orange-500',
        shadow: 'shadow-orange-500/20',
        shadowHover: 'hover:shadow-orange-500/30',
        blob: 'bg-orange-400/20',
        blobHover: 'group-hover:bg-orange-500/30',
        iconWrapper: 'bg-gradient-to-br from-orange-50 to-orange-100 border-orange-300/50',
        iconWrapperHover: 'group-hover:from-orange-100 group-hover:to-orange-200 group-hover:border-orange-400',
        icon: 'text-orange-600',
        title: 'text-orange-700',
        titleHover: 'group-hover:text-orange-800',
        link: 'text-orange-600',
        linkHover: 'hover:text-orange-700',
        gradient: 'from-orange-500/10 via-orange-400/5 to-transparent',
        accent: 'bg-orange-500'
    },
    cyan: {
        border: 'border-cyan-400/40',
        borderHover: 'hover:border-cyan-500',
        shadow: 'shadow-cyan-500/20',
        shadowHover: 'hover:shadow-cyan-500/30',
        blob: 'bg-cyan-400/20',
        blobHover: 'group-hover:bg-cyan-500/30',
        iconWrapper: 'bg-gradient-to-br from-cyan-50 to-cyan-100 border-cyan-300/50',
        iconWrapperHover: 'group-hover:from-cyan-100 group-hover:to-cyan-200 group-hover:border-cyan-400',
        icon: 'text-cyan-600',
        title: 'text-cyan-700',
        titleHover: 'group-hover:text-cyan-800',
        link: 'text-cyan-600',
        linkHover: 'hover:text-cyan-700',
        gradient: 'from-cyan-500/10 via-cyan-400/5 to-transparent',
        accent: 'bg-cyan-500'
    },
    rose: {
        border: 'border-rose-400/40',
        borderHover: 'hover:border-rose-500',
        shadow: 'shadow-rose-500/20',
        shadowHover: 'hover:shadow-rose-500/30',
        blob: 'bg-rose-400/20',
        blobHover: 'group-hover:bg-rose-500/30',
        iconWrapper: 'bg-gradient-to-br from-rose-50 to-rose-100 border-rose-300/50',
        iconWrapperHover: 'group-hover:from-rose-100 group-hover:to-rose-200 group-hover:border-rose-400',
        icon: 'text-rose-600',
        title: 'text-rose-700',
        titleHover: 'group-hover:text-rose-800',
        link: 'text-rose-600',
        linkHover: 'hover:text-rose-700',
        gradient: 'from-rose-500/10 via-rose-400/5 to-transparent',
        accent: 'bg-rose-500'
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
        accent: 'bg-lusofonia-primary'
    }
};

const LibraryCard = ({ name, description, link, archived = false, color = 'default', index = 0 }) => {
    const Icon = getIcon(name);
    const theme = colorVariants[color] || colorVariants.default;

    return (
        <div
            className={`group relative flex flex-col h-full rounded-3xl border-2 ${theme.border} ${theme.borderHover} transition-all duration-500 ${archived ? 'opacity-50 grayscale hover:grayscale-0' : ''}`}
        >
            <div className="relative flex flex-col h-full bg-white/80 backdrop-blur-sm rounded-[20px] overflow-hidden z-10">
                {/* Color accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${theme.accent} opacity-60 group-hover:opacity-100 transition-opacity rounded-t-[20px]`} />
                
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

                    <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${theme.title} ${theme.titleHover}`}>
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
                            className={`inline-flex items-center text-sm font-bold transition-all duration-300 ${theme.link} ${theme.linkHover} group/link`}
                        >
                            Acessar Documentação
                            <ArrowRight className={`ml-2 w-4 h-4 transition-transform duration-300 ${theme.link} group-hover/link:translate-x-2`} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LibraryCard;
