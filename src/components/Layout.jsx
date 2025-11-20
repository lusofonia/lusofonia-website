import React from 'react';
import Logo from './Logo';
import { Github, Twitter, Linkedin, Heart } from 'lucide-react';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-lusofonia-primary selection:text-white overflow-x-hidden">
            <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex items-center">
                            <Logo darkText={true} />
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-center space-x-8">
                                <a href="#about" className="text-sm font-medium text-slate-600 hover:text-lusofonia-primary transition-colors">
                                    Sobre o Projeto
                                </a>
                                <a href="#libraries" className="text-sm font-medium text-slate-600 hover:text-lusofonia-primary transition-colors">
                                    Bibliotecas
                                </a>
                                <a href="#community" className="text-sm font-medium text-slate-600 hover:text-lusofonia-primary transition-colors">
                                    Comunidade
                                </a>
                                <a
                                    href="https://fidalgoitsolutions.com.br"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative px-5 py-2.5 rounded-xl text-sm font-medium text-white transition-all hover:scale-105 border-none"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-tr from-lusofonia-primary to-lusofonia-secondary rounded-xl opacity-80 blur-[2px]"></div>
                                    <div className="absolute inset-0 bg-black/40 rounded-xl"></div>
                                    <span className="relative z-10">Fidalgo IT Solutions</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="pt-0">
                {children}
            </main>

            <footer className="bg-black border-t border-white/10 pt-20 pb-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                        <div className="col-span-1 md:col-span-1">
                            <Logo darkText={false} />
                            <p className="text-gray-500 text-sm mt-6 leading-relaxed">
                                Fortalecendo a comunidade de desenvolvimento em língua portuguesa com ferramentas open source de alta qualidade.
                            </p>
                            <div className="flex space-x-4 mt-6">
                                <a href="#" className="text-gray-500 hover:text-white transition-colors"><Github size={20} /></a>
                                <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter size={20} /></a>
                                <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-6">Ecossistema</h4>
                            <ul className="space-y-4 text-sm text-gray-500">
                                <li><a href="#" className="hover:text-lusofonia-primary transition-colors">Extenso.js</a></li>
                                <li><a href="#" className="hover:text-lusofonia-primary transition-colors">Conjugador</a></li>
                                <li><a href="#" className="hover:text-lusofonia-primary transition-colors">Pluralizador</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-6">Recursos</h4>
                            <ul className="space-y-4 text-sm text-gray-500">
                                <li><a href="#" className="hover:text-lusofonia-primary transition-colors">Documentação</a></li>
                                <li><a href="#" className="hover:text-lusofonia-primary transition-colors">Guia de Contribuição</a></li>
                                <li><a href="#" className="hover:text-lusofonia-primary transition-colors">Reportar Bug</a></li>
                                <li><a href="#" className="hover:text-lusofonia-primary transition-colors">Changelog</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-6">Legal</h4>
                            <ul className="space-y-4 text-sm text-gray-500">
                                <li><a href="#" className="hover:text-lusofonia-primary transition-colors">Termos de Uso</a></li>
                                <li><a href="#" className="hover:text-lusofonia-primary transition-colors">Privacidade</a></li>
                                <li><a href="#" className="hover:text-lusofonia-primary transition-colors">Licença MIT</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-gray-600">
                            &copy; {new Date().getFullYear()} Lusofonia. Todos os direitos reservados.
                        </p>
                        <p className="text-sm text-gray-600 flex items-center mt-4 md:mt-0">
                            Feito com <Heart size={14} className="mx-1 text-red-500 fill-red-500" /> por
                            <a href="https://fidalgoitsolutions.com.br" className="text-white ml-1 font-medium hover:underline">
                                Fidalgo IT Solutions
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
