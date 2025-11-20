import React from 'react';
import { Globe } from 'lucide-react';

const Logo = ({ darkText = false }) => {
    return (
        <div className="flex items-center gap-2 group cursor-pointer">
            <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-lusofonia-primary to-lusofonia-secondary rounded-xl transition-transform duration-300 opacity-80 blur-[2px]"></div>
                <div className="absolute inset-0 bg-black/40 rounded-xl transition-transform duration-300"></div>
                <Globe className="relative z-10 w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
                <span className={`text-xl font-bold tracking-tight leading-none ${darkText ? 'text-slate-900' : 'text-white'}`}>
                    Lusofonia
                </span>
                <span className="text-[0.65rem] uppercase tracking-widest text-lusofonia-primary font-semibold">
                    Open Source
                </span>
            </div>
        </div>
    );
};

export default Logo;
