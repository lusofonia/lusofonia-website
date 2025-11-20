import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Cpu, Users, Zap, FileText, Check } from 'lucide-react';

const features = [
    {
        icon: Globe,
        title: "Foco na Língua Portuguesa",
        description: "Algoritmos otimizados especificamente para as nuances, regras e exceções do nosso idioma."
    },
    {
        icon: Cpu,
        title: "Alta Performance",
        description: "Bibliotecas leves e rápidas, sem dependências desnecessárias, prontas para produção."
    },
    {
        icon: Users,
        title: "Comunidade Ativa",
        description: "Mantido por desenvolvedores apaixonados e aberto para contribuições de toda a comunidade lusófona."
    },
    {
        icon: Zap,
        title: "Fácil Integração",
        description: "APIs intuitivas e bem documentadas, compatíveis com Node.js e navegadores modernos."
    }
];

const About = () => {
    return (
        <section id="about" className="py-16 md:py-32 relative bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 md:mb-24">
                    <div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight text-slate-900">
                            Por que criamos o <br />
                            <span className="text-lusofonia-primary">Projeto Lusofonia?</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            O desenvolvimento de software em países de língua portuguesa muitas vezes esbarra na falta de ferramentas específicas para o nosso idioma.
                        </p>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            Enquanto existem inúmeras bibliotecas para inglês, o suporte ao português é frequentemente deixado em segundo plano.
                        </p>
                        <p className="text-lg text-slate-900 font-medium leading-relaxed">
                            Nossa missão é preencher essa lacuna, fornecendo um ecossistema robusto, moderno e gratuito para que desenvolvedores possam criar aplicações mais naturais e inteligentes.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-lusofonia-primary/10 to-lusofonia-secondary/10 rounded-3xl blur-2xl" />

                        {/* Realistic Use Case Card: Invoice/Contract */}
                        <div className="relative bg-white border border-slate-200 rounded-3xl shadow-2xl shadow-slate-200/50 overflow-hidden">
                            <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <FileText className="w-5 h-5 text-lusofonia-primary" />
                                    <span className="font-semibold text-slate-700">Fatura #2024-001</span>
                                </div>
                                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold uppercase rounded-full">Paga</span>
                            </div>

                            <div className="p-8 space-y-6">
                                <div className="flex justify-between items-end border-b border-slate-100 pb-6">
                                    <div>
                                        <p className="text-sm text-slate-500 mb-1">Valor Total</p>
                                        <p className="text-3xl font-bold text-slate-900">R$ 4.250,00</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm text-slate-500 mb-1">Vencimento</p>
                                        <p className="font-medium text-slate-700">25 Nov 2025</p>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-sm text-slate-500 mb-2">Valor por extenso (Gerado automaticamente)</p>
                                    <div className="bg-lusofonia-primary/5 border border-lusofonia-primary/20 rounded-xl p-4">
                                        <p className="text-lg font-medium text-lusofonia-primary">
                                            Quatro mil, duzentos e cinquenta reais
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 text-sm text-slate-500 pt-2">
                                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                                        <Check className="w-3 h-3 text-green-600" />
                                    </div>
                                    <span>Validado pelo <strong>extenso.js</strong></span>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 animate-bounce-slow hidden sm:block">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                    <Zap className="w-5 h-5 text-purple-600" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500">Tempo de processamento</p>
                                    <p className="font-bold text-slate-900">0.02ms</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                            <feature.icon className="w-10 h-10 text-lusofonia-primary mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                            <p className="text-slate-600 text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
