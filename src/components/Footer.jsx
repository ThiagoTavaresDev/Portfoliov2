import React from 'react';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-100 text-base-content border-t border-white/5">
            <aside>
                <p className="font-bold text-lg text-white">
                    Thiago Tavares
                </p>
                <p className="text-gray-500">Copyright © {new Date().getFullYear()} - Todos os direitos reservados</p>
            </aside>
        </footer>
    );
};

export default Footer;
