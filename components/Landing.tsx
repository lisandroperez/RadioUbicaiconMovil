
import React from 'react';
import { View } from '../App';

interface LandingProps {
  onNavigate: (view: View) => void;
}

const Landing: React.FC<LandingProps> = ({ onNavigate }) => {
  return (
    <div className="relative min-h-screen bg-[#0e0a07] text-white overflow-hidden selection:bg-orange-500/30">
      <div className="scanline"></div>
      
      {/* Navigation */}
      <nav className="fixed w-full z-[60] bg-[#0e0a07]/90 backdrop-blur-md border-b border-white/5 no-print">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-orange-600 rounded-sm flex items-center justify-center font-black text-white text-[10px]">R</div>
            <span className="font-bold tracking-tighter text-sm uppercase">RADIO_UBICACIÓN</span>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <button 
              onClick={() => onNavigate(View.GUIDE)}
              className="hidden md:block text-[10px] text-orange-500 hover:underline font-bold uppercase tracking-widest transition-all"
            >
              GUÍA_IMPRESIÓN
            </button>
            <button 
              onClick={() => onNavigate(View.MANUAL)}
              className="hidden md:block text-[10px] text-gray-500 hover:text-white font-bold uppercase tracking-widest transition-all"
            >
              MANUAL_TÉCNICO
            </button>
            <a 
              href="https://tacticalradioyb.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] font-bold text-orange-500 border border-orange-500/30 px-4 py-1.5 hover:bg-orange-600 hover:text-white transition-all"
            >
              ENTRAR_APP &gt;
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 grid-bg">
        <div className="max-w-5xl mx-auto text-center z-10 animate__animated animate__fadeIn">
          <span className="text-[#f97316] text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-10 block opacity-90">
            INFRAESTRUCTURA DE RESPUESTA RÁPIDA
          </span>
          <h1 className="text-7xl md:text-9xl lg:text-[150px] font-black tracking-tighter leading-[0.82] text-white uppercase mb-12">
            RADIO<br />UBICACIÓN<br />MÓVIL
          </h1>
          <p className="text-white text-xl md:text-3xl font-bold tracking-tight uppercase mb-16 opacity-90">
            VOZ Y GPS CUANDO LOS DATOS FALLAN.
          </p>
          <div className="flex justify-center">
            <a 
              href="https://tacticalradioyb.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-orange-600 hover:bg-orange-700 transition-colors px-16 py-6 rounded-sm font-black text-sm md:text-lg tracking-[0.15em] uppercase text-white shadow-2xl"
            >
              ENTRAR EN SERVICIO
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-[#0e0a07] text-center border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-center gap-8 mb-12">
            <button 
              onClick={() => onNavigate(View.MANUAL)}
              className="text-gray-500 hover:text-white uppercase font-bold text-[10px] tracking-widest transition-all"
            >
              Manual Operativo
            </button>
            <button 
              onClick={() => onNavigate(View.GUIDE)}
              className="text-gray-500 hover:text-white uppercase font-bold text-[10px] tracking-widest transition-all"
            >
              Guía Rápida
            </button>
          </div>
          <p className="text-[10px] text-gray-400 uppercase tracking-[0.4em] font-bold">
            RADIO_UBICACION_MOVIL // v3.2
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
