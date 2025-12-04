import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
    if (!isOpen || !project) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-base-100 w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden relative border border-white/10"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 btn btn-circle btn-sm btn-ghost bg-black/20 hover:bg-black/40 text-white z-10"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <div className="grid md:grid-cols-2 h-full max-h-[80vh] overflow-y-auto">
                        <div className="h-64 md:h-auto bg-base-300 relative">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="p-8 flex flex-col">
                            <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map(tag => (
                                    <span key={tag} className="badge badge-primary badge-outline">{tag}</span>
                                ))}
                            </div>

                            <div className="prose prose-invert mb-8 flex-grow">
                                <p className="text-gray-300 leading-relaxed">
                                    {project.description}
                                </p>
                                <p className="text-gray-400 mt-4 text-sm">
                                    Aqui você pode adicionar mais detalhes técnicos sobre o projeto, desafios enfrentados e soluções implementadas.
                                </p>
                            </div>

                            <div className="flex gap-4 mt-auto pt-6 border-t border-white/10">
                                <a href="#" className="btn btn-primary flex-1 text-white gap-2">
                                    <ExternalLink className="w-4 h-4" />
                                    Ver Demo
                                </a>
                                <a href="#" className="btn btn-outline flex-1 gap-2">
                                    <Github className="w-4 h-4" />
                                    Código
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default ProjectModal;
