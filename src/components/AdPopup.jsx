import React, { useState, useEffect } from 'react';
import { X, ArrowUpRight, Instagram, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AdPopup = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="hidden md:block fixed bottom-6 right-6 z-50 max-w-sm w-full md:w-[360px]"
                >
                    <div className="bg-gradient-to-br from-[#1a1025] to-[#0f0718] rounded-[32px] p-6 shadow-2xl border border-lusofonia-primary/30 relative overflow-hidden backdrop-blur-xl">
                        {/* Close Button */}
                        <button 
                            onClick={handleClose}
                            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white"
                            aria-label="Fechar anúncio"
                        >
                            <X className="w-4 h-4" />
                        </button>

                        {/* Header Badge */}
                        <div className="mb-6">
                            <span className="text-[10px] font-bold tracking-widest uppercase text-lusofonia-muted/80">
                                ANÚNCIO
                            </span>
                        </div>

                        {/* Content */}
                        <div className="flex gap-4 items-start mb-6">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-lusofonia-primary/20 flex items-center justify-center border border-lusofonia-primary/30">
                                <Rocket className="w-6 h-6 text-lusofonia-primary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white leading-tight mb-1">
                                    Fidalgo IT Solutions,
                                </h3>
                                <p className="text-lg font-medium text-lusofonia-text/90 leading-tight">
                                    sua consultoria especializada em DevOps.
                                </p>
                            </div>
                        </div>

                        {/* Action Button */}
                        <a 
                            href="https://fidalgoitsolutions.com.br" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full bg-lusofonia-primary hover:bg-violet-700 text-white font-bold text-center py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-lusofonia-primary/25 mb-4"
                        >
                            Falar agora
                        </a>

                        {/* Footer */}
                        <a 
                            href="https://instagram.com/fidalgoitsolutions"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 text-sm text-lusofonia-muted hover:text-white transition-colors"
                        >
                            <Instagram className="w-4 h-4" />
                            <span>Siga-nos no Instagram</span>
                        </a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AdPopup;

