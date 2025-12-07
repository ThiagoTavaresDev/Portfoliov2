import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "Foodcom",
            description: "Sistema de restaurante com gerenciamento de pedidos, clientes e produtos.",
            image: "/images/foodcom.png",
            tags: ["HTML5", "Bootstrap", "C#", "Javascript", "Sql Server"],
            demoUrl: "#",
            repoUrl: "https://github.com/ThiagoTavaresDev/FoodCom",
            details: "Desenvolvido com ASP.NET Core seguindo a arquitetura MVC (Model-View-Controller). O sistema utiliza Entity Framework para ORM e SQL Server como banco de dados. Possui estrutura completa de Controllers, Models e Views, gerenciando todo o fluxo de pedidos e cadastro de produtos com validações robustas no backend."
        },
        {
            id: 2,
            title: "Barbearia Fila",
            description: "Sistema de barbearia em produção com gerenciamento de agendamentos e filas em tempo real além de diversas funcionalidades para auxiliar no dia a dia do barbeiro.",
            image: "/images/barber-panel.png",
            tags: ["React", "Tailwind CSS", "Lucide Icons", "Firebase"],
            demoUrl: "https://barberia-fila.vercel.app/barber",
            repoUrl: "https://github.com/ThiagoTavaresDev/Barberia-fila",
            details: "Aplicação Single Page Application (SPA) moderna construída com React 19 e TailwindCSS. Utiliza Firebase Firestore para atualização de dados em tempo real via listeners, permitindo sincronização instantânea da fila entre dispositivos. Integração com APIs externas como WhatsApp Web para notificações."
        },
        {
            id: 3,
            title: "Portfolio V1",
            description: "Primeira versão do meu portfólio pessoal.",
            image: "/images/v1portfolio.png",
            tags: ["HTML5", "CSS3", "JavaScript"],
            demoUrl: "https://portfolio-thiagotavaresdevs-projects.vercel.app",
            repoUrl: "https://github.com/ThiagoTavaresDev/Portfolio",
            details: "Projeto desenvolvido com tecnologias web fundamentais (HTML5, CSS3 e JavaScript Vanilla) para consolidar conhecimentos em frontend. Foco em responsividade, animações CSS puras e manipulação direta do DOM sem uso de frameworks."
        }
    ];

    return (
        <section id="projects" className="py-12 md:py-20 bg-base-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Meus Projetos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/5 cursor-pointer group"
                            onClick={() => setSelectedProject(project)}
                        >
                            <figure className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white font-semibold px-4 py-2 border border-white rounded-full">Ver Detalhes</span>
                                </div>
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-white">
                                    {project.title}
                                </h2>
                                <p className="text-gray-400 line-clamp-2">{project.description}</p>
                                <div className="card-actions justify-end mt-4">
                                    {project.tags.map(tag => (
                                        <div key={tag} className="badge badge-outline text-primary">{tag}</div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
};

export default Projects;
