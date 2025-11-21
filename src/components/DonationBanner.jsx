import React from 'react';
import { Heart, Github, Coffee, QrCode } from 'lucide-react';

const DonationBanner = () => {
    return (
        <section className="bg-yellow-50 border-y border-yellow-100 py-8 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
                    
                    {/* Text Content */}
                    <div className="flex-1">
                        <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                            <Heart className="w-5 h-5 text-rose-500 fill-rose-500 animate-pulse" />
                            <span className="font-semibold text-slate-900">Apoie o projeto</span>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed max-w-2xl pb-2">
                            O Lusofonia é criado e mantido por <a href="https://matheusalves.xyz" target="_blank" rel="noopener noreferrer" className="text-lusofonia-primary hover:underline font-medium">Matheus Alves</a> e utilizado como vitrine para a <a href="https://fidalgoitsolutions.com.br" target="_blank" rel="noopener noreferrer" className="text-lusofonia-primary hover:underline font-medium">Fidalgo IT Solutions</a>. 
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
                            Como os projetos são open source e não geram lucro direto, sua doação ajuda a manter o foco e a evolução das ferramentas. Qualquer valor é bem-vindo!
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap justify-center gap-3">
                        <a 
                            href="https://nubank.com.br/cobrar/193y02/67a7cf95-b24c-4a98-95b2-9ce5daf03e2c" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 text-sm font-medium hover:border-lusofonia-primary hover:text-lusofonia-primary transition-colors shadow-sm"
                        >
                            <QrCode className="w-4 h-4" />
                            Pix
                        </a>
                        
                        <a 
                            href="https://www.paypal.com/donate/?hosted_button_id=3TPLED2TF5874" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#0070BA] text-white rounded-lg text-sm font-medium hover:bg-[#005ea6] transition-colors shadow-sm"
                        >
                            <Coffee className="w-4 h-4" />
                            PayPal
                        </a>

                        <a 
                            href="https://github.com/sponsors/theuves" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#24292e] text-white rounded-lg text-sm font-medium hover:bg-[#2f363d] transition-colors shadow-sm"
                        >
                            <Github className="w-4 h-4" />
                            GitHub Sponsor
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DonationBanner;

