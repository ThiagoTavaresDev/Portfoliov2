import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Palette, Rocket } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Code className="w-8 h-8 text-primary" />,
            title: "Desenvolvimento Web",
            description: "Sites e aplicações web modernos, rápidos e responsivos utilizando as tecnologias mais recentes do mercado."
        },
        {
            icon: <Smartphone className="w-8 h-8 text-secondary" />,
            title: "Mobile First",
            description: "Interfaces otimizadas para todos os dispositivos, garantindo a melhor experiência em smartphones e tablets."
        },
        {
            icon: <Palette className="w-8 h-8 text-accent" />,
            title: "UI/UX Design",
            description: "Design focado no usuário, criando interfaces intuitivas e visualmente impactantes."
        },
        {
            icon: <Rocket className="w-8 h-8 text-success" />,
            title: "Otimização & SEO",
            description: "Melhoria de performance e otimização para motores de busca para aumentar a visibilidade do seu projeto."
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="services" className="py-12 md:py-20 bg-base-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meus Serviços</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Soluções completas para o seu negócio digital.
                    </p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            variants={item}
                            className="card bg-base-200 hover:bg-base-300 transition-colors border border-white/5"
                        >
                            <div className="card-body items-center text-center">
                                <div className="p-4 bg-base-100 rounded-full mb-4 shadow-inner">
                                    {service.icon}
                                </div>
                                <h3 className="card-title text-white mb-2">{service.title}</h3>
                                <p className="text-gray-500 text-sm">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
