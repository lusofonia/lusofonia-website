import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket, CheckCircle2 } from 'lucide-react';
import fidalgoLogo from '../assets/fidalgo-logo-white.png';

const FidalgoPromo = () => {
    return (
        <section className="py-20 md:py-32 relative overflow-hidden bg-[#05020a]">
            {/* Full width background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-[#05020a] to-[#05020a]" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

                    <div className="flex-1 text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-8 border border-blue-500/20">
                                <Rocket className="w-4 h-4 mr-2" />
                                Impulsionado por Fidalgo IT Solutions
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
                                Transformamos código em <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                                    Resultados de Negócio
                                </span>
                            </h2>

                            <p className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
                                Não somos apenas mantenedores de open source. Somos parceiros estratégicos para empresas que buscam excelência em software, escalabilidade e inovação.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="https://fidalgoitsolutions.com.br"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex justify-center items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.5)]"
                                >
                                    Agendar Consultoria
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </a>
                                <a
                                    href="https://fidalgoitsolutions.com.br/portfolio"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex justify-center items-center px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold text-lg transition-all border border-white/10"
                                >
                                    Ver Portfolio
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex-1 w-full max-w-lg lg:max-w-none">
                        <div className="relative">
                            {/* Abstract decorative elements */}
                            <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-600/20 rounded-full blur-[80px]" />
                            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-indigo-600/20 rounded-full blur-[80px]" />

                            {/* Glass card */}
                            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
                                <div className="flex items-center gap-5 mb-8">
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center p-2 border border-white/10">
                                        <img src={fidalgoLogo} alt="Fidalgo IT Solutions" className="w-full h-full object-contain" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">Fidalgo IT Solutions</h3>
                                        <p className="text-blue-400 font-medium">Transforme seu negócio com tecnologia</p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    {[
                                        "Desenvolvimento Web & Mobile High-End",
                                        "Arquitetura de Software Escalável",
                                        "Consultoria em Transformação Digital",
                                        "Integração de IA e Machine Learning"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 group">
                                            <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                                                <CheckCircle2 className="w-5 h-5 text-blue-400" />
                                            </div>
                                            <span className="text-gray-300 text-lg group-hover:text-white transition-colors">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-10 pt-8 border-t border-white/10">
                                    <div className="grid grid-cols-3 gap-6 text-center">
                                        <div>
                                            <p className="text-3xl font-bold text-white mb-1">98%</p>
                                            <p className="text-xs text-gray-400">Satisfação</p>
                                        </div>
                                        <div>
                                            <p className="text-3xl font-bold text-white mb-1">150+</p>
                                            <p className="text-xs text-gray-400">Projetos</p>
                                        </div>
                                        <div>
                                            <p className="text-3xl font-bold text-white mb-1">10+</p>
                                            <p className="text-xs text-gray-400">Anos de Experiência</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FidalgoPromo;
