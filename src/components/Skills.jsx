import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Terminal } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            icon: <Layout className="w-6 h-6 text-primary" />,
            skills: ["React", "Tailwind CSS", "HTML5/CSS3", "JavaScript"]
        },
        {
            title: "Backend",
            icon: <Database className="w-6 h-6 text-secondary" />,
            skills: [".NET C#", "Node.js", "SQL Server", "Express", "API REST"]
        },
        {
            title: "Desktop",
            icon: <Code2 className="w-6 h-6 text-warning" />,
            skills: ["Visual FoxPro", ".NET Windows Forms", "C# Desktop"]
        },
        {
            title: "Ferramentas",
            icon: <Terminal className="w-6 h-6 text-accent" />,
            skills: ["Git/GitHub", "VS Code", "Visual Studio", "Figma", "Vercel"]
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
        <section id="skills" className="py-12 md:py-20 bg-base-100">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Minhas Habilidades</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Um conjunto de tecnologias e ferramentas que utilizo para transformar ideias em realidade.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            variants={item}
                            className="card bg-base-200 border border-white/5 hover:border-primary/30 transition-colors"
                        >
                            <div className="card-body">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-base-300 rounded-lg">
                                        {category.icon}
                                    </div>
                                    <h3 className="card-title text-white">{category.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map(skill => (
                                        <span key={skill} className="badge badge-neutral badge-lg text-gray-300 hover:text-white transition-colors">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
