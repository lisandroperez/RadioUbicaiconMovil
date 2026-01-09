
import React from 'react';
import { View } from '../App';

interface ManualProps {
  onNavigate: (view: View) => void;
}

const Manual: React.FC<ManualProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#0e0a07] text-[#e5e7eb] p-6 md:p-12 max-w-5xl mx-auto grid-bg">
      <div className="no-print fixed bottom-6 right-6 flex gap-3 z-50">
        <button 
          onClick={() => window.print()} 
          className="bg-white text-black px-5 py-2.5 font-black text-[10px] uppercase tracking-widest hover:bg-orange-600 hover:text-white transition-all shadow-2xl border border-black/10"
        >
          IMPRIMIR_PDF
        </button>
        <button 
          onClick={() => onNavigate(View.HOME)} 
          className="bg-gray-800 text-white px-5 py-2.5 font-black text-[10px] uppercase tracking-widest hover:bg-gray-700 transition-all border border-white/10"
        >
          VOLVER
        </button>
      </div>

      {/* CABECERA */}
      <header className="mb-16 animate__animated animate__fadeIn">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-1 bg-orange-500"></div>
          <p className="mono text-orange-500 font-bold tracking-[0.4em] text-[9px] uppercase">OPERATIONAL_MANUAL_v3.2</p>
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6 uppercase text-white">
          GUÍA DE<br />USUARIO
        </h1>
        <p className="text-gray-500 font-mono text-[10px] uppercase tracking-widest border-t border-white/10 pt-4">
          Protocolo de Comunicaciones Resilientes para Brigadas
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* 01 REGISTRO */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="bg-orange-500 text-white w-7 h-7 flex items-center justify-center font-black text-sm [clip-path:polygon(20%_0%,100%_0,100%_80%,80%_100%,0_100%,0%_20%)]">01</span>
            <h2 className="text-2xl font-black uppercase text-white tracking-tighter">Identificación</h2>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 relative overflow-hidden">
            <p className="text-xs text-gray-400 mb-4">
              Al iniciar, ingrese su <span className="text-white font-bold">Callsign (Indicativo)</span>. Este nombre será su identificador único en el mapa y en el registro de audio.
            </p>
            <div className="bg-black/40 p-3 border border-white/5 font-mono text-[10px] text-orange-500">
              RECOMENDACIÓN: Use nombres cortos y claros.<br />Ej: "MOVIL-1", "BASE-TUC", "BRIGADA-B".
            </div>
          </div>
        </section>

        {/* 02 CANALES */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="bg-orange-500 text-white w-7 h-7 flex items-center justify-center font-black text-sm [clip-path:polygon(20%_0%,100%_0,100%_80%,80%_100%,0_100%,0%_20%)]">02</span>
            <h2 className="text-2xl font-black uppercase text-white tracking-tighter">Frecuencias</h2>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 relative overflow-hidden">
            <p className="text-xs text-gray-400 mb-4">Seleccione su canal de operación en el <span className="text-white font-bold">Selector de Frecuencias</span>.</p>
            <ul className="text-[10px] space-y-2 font-mono uppercase">
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-emerald-500 rounded-full"></span> Canales Públicos: Acceso libre.</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-red-500 rounded-full"></span> Canales Seguros: Requieren llave (PIN).</li>
            </ul>
          </div>
        </section>
      </div>

      {/* 03 COMUNICACIÓN DE VOZ */}
      <section className="mb-16 space-y-6">
        <div className="flex items-center gap-3">
          <span className="bg-orange-500 text-white w-7 h-7 flex items-center justify-center font-black text-sm [clip-path:polygon(20%_0%,100%_0,100%_80%,80%_100%,0_100%,0%_20%)]">03</span>
          <h2 className="text-3xl font-black uppercase text-white tracking-tighter">Comunicaciones de Voz (PTT)</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-white/10 p-6 border-l-orange-500 border-l-4">
            <h4 className="font-black text-orange-500 uppercase text-[11px] mb-3">TX: Transmitir</h4>
            <p className="text-[11px] text-gray-400">Presione y <span className="text-white font-bold">mantenga</span> el botón central. Espere el sonido de entrada y hable a 15cm del micrófono.</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 border-l-emerald-500 border-l-4">
            <h4 className="font-black text-emerald-500 uppercase text-[11px] mb-3">RX: Recibir</h4>
            <p className="text-[11px] text-gray-400">El audio se reproduce en tiempo real. Un aro naranja en pantalla indica quién está modulando.</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 border-l-gray-500 border-l-4">
            <h4 className="font-black text-gray-400 uppercase text-[11px] mb-3">Simplex</h4>
            <p className="text-[11px] text-gray-500">El sistema es de una vía. No puede transmitir mientras otra unidad está hablando.</p>
          </div>
        </div>
      </section>

      {/* 04 GPS Y MODO FIJO */}
      <section className="mb-16 space-y-6">
        <div className="flex items-center gap-3">
          <span className="bg-orange-500 text-white w-7 h-7 flex items-center justify-center font-black text-sm [clip-path:polygon(20%_0%,100%_0,100%_80%,80%_100%,0_100%,0%_20%)]">04</span>
          <h2 className="text-3xl font-black uppercase text-white tracking-tighter">Geolocalización</h2>
        </div>
        <div className="bg-white/5 border border-white/10 p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-black text-white uppercase text-sm mb-2">GPS Automático</h4>
              <p className="text-xs text-gray-400">Su ubicación se actualiza cada vez que modula o detecta movimiento. El radio de precisión (círculo) indica la confiabilidad de la señal.</p>
            </div>
            <div className="bg-orange-500/5 p-4 border border-orange-500/20">
              <h4 className="font-black text-orange-500 uppercase text-xs mb-2">Modo Táctico Fijo (Target)</h4>
              <p className="text-[11px] text-gray-300">Si establece un Puesto de Comando o Base, use el icono de <span className="font-bold">MIRA</span> para tocar el mapa y fijar su posición manualmente, ignorando el rebote del GPS.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 05 EMERGENCIAS */}
      <section className="mb-16 space-y-6">
        <div className="flex items-center gap-3">
          <span className="bg-red-600 text-white w-7 h-7 flex items-center justify-center font-black text-sm [clip-path:polygon(20%_0%,100%_0,100%_80%,80%_100%,0_100%,0%_20%)]">05</span>
          <h2 className="text-3xl font-black uppercase text-red-500 tracking-tighter">Emergencia SOS</h2>
        </div>
        <div className="bg-red-600/5 border border-red-600 p-6 relative overflow-hidden">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-4">
              <p className="text-sm text-white font-bold italic">"Diseñado para que nadie se quede atrás."</p>
              <p className="text-xs text-gray-400">El botón de SOS (Triángulo Rojo) genera una alerta que se envía por <span className="text-white">Broadcast</span> a toda la red y prepara un <span className="text-white">SMS de Rescate</span> con sus coordenadas exactas.</p>
            </div>
            <div className="w-full md:w-64 bg-black/60 p-4 border border-red-600/30 font-mono text-[9px] text-red-400">
              <p className="font-bold border-b border-red-600/20 pb-1 mb-2 uppercase">Protocolo SOS SMS:</p>
              1. Tocar icono SOS.<br />
              2. Elegir tipo de incidente.<br />
              3. Se abrirá su app de SMS.<br />
              4. Presione ENVIAR.<br />
              <span className="text-white">Funciona incluso sin datos (Internet).</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Manual */}
      <footer className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center opacity-30 gap-4 mb-12">
        <p className="mono text-[9px] uppercase font-bold tracking-widest text-white">RADIO_UBICACION_MOVIL // DOC_ID: 001-OP-TECH</p>
        <p className="mono text-[9px] uppercase font-bold text-orange-500">FIN DEL PROTOCOLO</p>
      </footer>
    </div>
  );
};

export default Manual;
