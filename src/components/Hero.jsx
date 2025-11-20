import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Github } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative pt-28 pb-20 md:pt-40 md:pb-40 overflow-hidden bg-lusofonia-bg">
            {/* Modern Gradient Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-30 pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-lusofonia-primary rounded-full blur-[120px] mix-blend-screen" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-lusofonia-secondary rounded-full blur-[120px] mix-blend-screen" />
                </div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-lusofonia-text mb-8 backdrop-blur-md shadow-xl shadow-purple-900/10">
                            <Sparkles className="w-4 h-4 text-lusofonia-secondary mr-2" />
                            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                Revolucionando o desenvolvimento em Português
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-tight mb-6 md:mb-8 leading-tight text-white">
                            Código que fala <br />
                            <span className="bg-gradient-to-r from-lusofonia-primary via-lusofonia-secondary to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
                                a sua língua.
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl lg:text-2xl text-lusofonia-muted mb-8 md:mb-12 leading-relaxed max-w-2xl mx-auto font-light">
                            Um conjunto de ferramentas <span className="text-white font-medium">open source</span> robustas para processamento natural e manipulação da língua portuguesa.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <a
                                href="#libraries"
                                className="group relative px-8 py-4 bg-white text-black rounded-xl font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                <span className="relative flex items-center">
                                    Explorar Bibliotecas
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </a>

                            <a
                                href="https://github.com/lusofonia"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-white/5 text-white rounded-xl font-bold text-lg hover:bg-white/10 backdrop-blur-md border border-white/10 transition-all hover:scale-105 flex items-center justify-center"
                            >
                                <Github className="mr-2 w-5 h-5" />
                                GitHub
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
