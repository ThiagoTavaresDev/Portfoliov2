import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-12 md:py-20 bg-base-200">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-left"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 relative inline-block">
                            Sobre Mim
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full"></span>
                        </h2>
                        <div className="text-base md:text-lg text-gray-400 leading-relaxed space-y-6">
                            <p>
                                Sou um Desenvolvedor Web com uma trajetória que une a solidez de tecnologias clássicas
                                como Visual FoxPro e SQL Server com a agilidade do desenvolvimento moderno em React, C# e Node.js.
                            </p>
                            <p>
                                Tenho experiência acadêmica em .NET C# e banco de dados, o que me permite ter uma visão completa
                                do desenvolvimento de software, desde a manutenção de sistemas legados até a criação
                                de novas aplicações web performáticas.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-base-100 max-w-md mx-auto">
                            <img
                                src="/images/foto_pessoal.jpg"
                                alt="Thiago Tavares"
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        {/* Decorative background element */}
                        <div className="absolute top-4 -right-4 w-full h-full bg-primary/20 rounded-2xl -z-0 transform rotate-3"></div>
                        <div className="absolute -bottom-4 -left-4 w-full h-full bg-secondary/20 rounded-2xl -z-0 transform -rotate-3"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
