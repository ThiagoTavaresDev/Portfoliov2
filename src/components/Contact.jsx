import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-12 md:py-20 bg-base-200">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Entre em Contato</h2>
                <p className="text-base md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                    Tem um projeto em mente ou quer apenas dar um oi? Sinta-se à vontade para me mandar uma mensagem!
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-6">
                    <a href="mailto:contato.thiago.tavares.dev@gmail.com" target='_blank' className="btn btn-primary btn-lg text-white gap-2">
                        <Mail className="w-5 h-5" />
                        Enviar Email
                    </a>
                    <a href="https://linkedin.com/in/thiagotavaresdev" target='_blank' className="btn btn-outline btn-lg gap-2">
                        <Linkedin className="w-5 h-5" />
                        LinkedIn
                    </a>
                    <a href="https://github.com/ThiagoTavaresDev" target='_blank' className="btn btn-outline btn-lg gap-2">
                        <Github className="w-5 h-5" />
                        GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
