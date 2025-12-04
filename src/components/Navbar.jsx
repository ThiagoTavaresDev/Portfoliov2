import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="navbar fixed top-0 z-50 bg-base-100/80 backdrop-blur-lg border-b border-white/10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <Menu className="h-5 w-5" />
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a href="#about">Sobre</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experiência</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </div>
        <a href="#hero" className="btn btn-ghost text-xl font-bold text-white">Thiago Tavares</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium text-gray-300">
          <li><a href="#about" className="hover:text-primary">Sobre</a></li>
          <li><a href="#skills" className="hover:text-primary">Skills</a></li>
          <li><a href="#experience" className="hover:text-primary">Experiência</a></li>
          <li><a href="#projects" className="hover:text-primary">Projetos</a></li>
          <li><a href="#contact" className="hover:text-primary">Contato</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a href="#contact" className="btn btn-primary btn-sm text-white">Fale Comigo</a>
      </div>
    </div>
  );
};

export default Navbar;
