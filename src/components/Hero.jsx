import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';

const Hero = () => {
    return (
        <div id="hero" className="hero min-h-screen bg-base-100 relative overflow-hidden flex items-center">
            {/* Tech Grid Background */}
            <div className="absolute inset-0 z-0 opacity-20"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}
            />

            {/* Radial Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-base-100/50 to-base-100 z-0 pointer-events-none" />

            <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-12 items-center pt-20">
                {/* Left Column: Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-left"
                >
                    <div className="inline-block px-3 py-1 mb-4 border border-primary/30 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        Web Developer
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        Criando experiências <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">digitais únicas.</span>
                    </h1>
                    <p className="py-6 text-base md:text-xl text-gray-400 max-w-lg">
                        Olá, sou Thiago Tavares. Desenvolvedor Web com experiência em tecnologias modernas e legadas, unindo o melhor dos dois mundos.
                    </p>

                    <div className="flex gap-4 mb-8">
                        <a href="#projects" className="btn btn-primary text-white px-8">Ver Projetos</a>
                        <a href="https://wa.me/5521964415954?text=Olá%2C%20Tudo%20bem%20com%20você%20?" target="_blank" className="btn btn-outline btn-secondary px-8">Fale Comigo</a>
                    </div>

                    <div className="flex gap-6 text-gray-400">
                        <a href="https://github.com/ThiagoTavaresDev" target='_blank' className="hover:text-white transition-colors"><Github className="w-6 h-6" /></a>
                        <a href="https://linkedin.com/in/thiagotavaresdev" target='_blank' className="hover:text-white transition-colors"><Linkedin className="w-6 h-6" /></a>
                        <a href="mailto:contato.thiago.tavares.dev@gmail.com" target='_blank' className="hover:text-white transition-colors"><Mail className="w-6 h-6" /></a>
                    </div>
                </motion.div>

                {/* Right Column: Visual */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hidden lg:block relative"
                >
                    {/* Floating Code Card */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="bg-[#1e1e1e] rounded-xl shadow-2xl border border-white/10 overflow-hidden max-w-md mx-auto transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500"
                    >
                        <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-white/5">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                            <div className="ml-4 text-xs text-gray-400 font-mono">portfolio.cs</div>
                        </div>
                        <div className="p-6 font-mono text-sm">
                            <div className="text-gray-400">
                                <span className="text-pink-400">public class</span> <span className="text-blue-400">Developer</span>
                            </div>
                            <div className="text-gray-400">
                                <span className="text-yellow-400">{'{'}</span>
                            </div>
                            <div className="pl-4 text-gray-300">
                                <span className="text-pink-400">public string</span> Name = <span className="text-green-400">"Thiago Tavares"</span>;
                            </div>
                            <div className="pl-4 text-gray-300">
                                <span className="text-pink-400">public string</span> Role = <span className="text-green-400">"Web Developer"</span>;
                            </div>
                            <div className="pl-4 text-gray-300">
                                <span className="text-pink-400">public string[]</span> Skills = <span className="text-yellow-400">{'{'}</span>
                            </div>
                            <div className="pl-8 text-green-400">
                                "React", "Node.js", ".NET C#", "SQL Server"
                            </div>
                            <div className="pl-4 text-gray-400">
                                <span className="text-yellow-400">{'}'}</span>;
                            </div>
                            <div className="text-gray-400">
                                <span className="text-yellow-400">{'}'}</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Decorative Elements behind card */}
                    <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10" />
                    <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl -z-10" />
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
