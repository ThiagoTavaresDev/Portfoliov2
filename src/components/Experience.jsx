import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: "Trainee em Desenvolvimento",
            company: "Sofis Tecnologia",
            sector: "Health Tech",
            period: "Set 2024 - Presente",
            description: "Atuação no projeto Hemote Plus, um sistema de gestão para hemoterapia. Desenvolvimento e manutenção utilizando Visual FoxPro e SQL Server, garantindo a integridade e eficiência no ciclo do sangue."
        },
        {
            id: 2,
            role: "Estagiário em Desenvolvimento",
            company: "Sofis Tecnologia",
            sector: "Health Tech",
            period: "Fev 2024 - Set 2024",
            description: "Início da jornada no setor de saúde, aprendendo as regras de negócio de hemoterapia e contribuindo com correções e melhorias no sistema desktop legado."
        },
        {
            id: 3,
            role: "Estudante de Análise e Des. de Sistemas",
            company: "Universidade Veiga de Almeida",
            sector: "Educação",
            period: "2023 - 2025",
            description: "Formação acadêmica focada em desenvolvimento de aplicações, algoritmos e desenvolvimento web/mobile. Base teórica sólida aplicada diariamente na prática profissional."
        }
    ];

    return (
        <section id="experience" className="py-20 bg-base-200 relative overflow-hidden">
            {/* Tech Grid Background */}
            <div className="absolute inset-0 z-0 opacity-10"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Experiência</h2>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent md:-translate-x-1/2"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-[-4px] md:left-1/2 top-0 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)] md:-translate-x-1/2 mt-6 z-20">
                                    <div className="absolute inset-0 animate-ping bg-primary rounded-full opacity-75"></div>
                                </div>

                                {/* Content Card */}
                                <div className="ml-8 md:ml-0 md:w-1/2">
                                    <div className={`p-6 rounded-2xl border border-white/5 bg-base-100/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 group ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                                        }`}>
                                        <div className={`flex items-center gap-2 mb-2 text-primary text-sm font-mono ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                                            }`}>
                                            <Calendar className="w-4 h-4" />
                                            {exp.period}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{exp.role}</h3>
                                        <div className="text-gray-400 font-medium">{exp.company}</div>
                                        {exp.sector && (
                                            <div className="text-primary/70 text-xs font-medium mb-4 mt-1 tracking-wide uppercase">{exp.sector}</div>
                                        )}
                                        <p className={`text-gray-500 text-sm leading-relaxed ${!exp.sector ? 'mt-4' : ''}`}>
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Empty space for the other side on desktop */}
                                <div className="hidden md:block md:w-1/2"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
