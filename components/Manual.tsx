import React from 'react';
import { View } from '../App';

interface ManualProps {
  onNavigate: (view: View) => void;
}

const Manual: React.FC<ManualProps> = ({ onNavigate }) => {
  const StepNum: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="bg-[#f97316] text-white w-7 h-7 inline-flex items-center justify-center font-black text-sm mr-2.5 [clip-path:polygon(20%_0%,100%_0,100%_80%,80%_100%,0_100%,0%_20%)]">
      {children}
    </span>
  );

  const TacticalCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
    <div className={`bg-white/[0.02] border border-white/[0.08] p-6 relative overflow-hidden ${className}`}>
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0e0a07] text-[#e5e7eb] p-6 md:p-12 max-w-5xl mx-auto grid-bg selection:bg-orange-500/30">
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
        {/* 01 Identificación */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <StepNum>01</StepNum>
            <h2 className="text-2xl font-black uppercase text-white tracking-tighter">Identificación</h2>
          </div>
          <TacticalCard>
            <p className="text-xs text-gray-400 mb-4">
              Al iniciar, ingrese su <span className="text-white font-bold">Callsign (Indicativo)</span>. Este nombre será su identificador único en el mapa y en el registro de audio.
            </p>
            <div className="bg-black/40 p-3 border border-white/5 font-mono text-[10px] text-orange-500">
              RECOMENDACIÓN: Use nombres cortos y claros.<br />Ej: "MOVIL-1", "BASE-TUC", "BRIGADA-B".
            </div>
          </TacticalCard>
        </section>

        {/* 02 Canales */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <StepNum>02</StepNum>
            <h2 className="text-2xl font-black uppercase text-white tracking-tighter">Frecuencias</h2>
          </div>
          <TacticalCard>
            <p className="text-xs text-gray-400 mb-4">Seleccione su canal de operación en el <span className="text-white font-bold">Selector de Frecuencias</span>.</p>
            <ul className="text-[10px] space-y-2 font-mono uppercase">
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-emerald-500 rounded-full"></span> Canales Públicos: Acceso libre.</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-red-500 rounded-full"></span> Canales Seguros: Requieren llave (PIN).</li>
            </ul>
          </TacticalCard>
        </section>
      </div>

      {/* 03 PTT */}
      <section className="mb-16 space-y-6">
        <div className="flex items-center gap-3">
          <StepNum>03</StepNum>
          <h2 className="text-3xl font-black uppercase text-white tracking-tighter leading-[0.9]">Comunicaciones de Voz (PTT)</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <TacticalCard className="border-l-orange-500 border-l-4">
            <h4 className="font-black text-orange-500 uppercase text-[11px] mb-3">TX: Transmitir</h4>
            <p className="text-[11px] text-gray-400">Presione y <span className="text-white font-bold">mantenga</span> el botón central. Espere el sonido de entrada y hable a 15cm del micrófono.</p>
          </TacticalCard>
          <TacticalCard className="border-l-emerald-500 border-l-4">
            <h4 className="font-black text-emerald-500 uppercase text-[11px] mb-3">RX: Recibir</h4>
            <p className="text-[11px] text-gray-400">El audio se reproduce en tiempo real. Un aro naranja en pantalla indica quién está modulando.</p>
          </TacticalCard>
          <TacticalCard className="border-l-gray-500 border-l-4">
            <h4 className="font-black text-gray-400 uppercase text-[11px] mb-3">Simplex</h4>
            <p className="text-[11px] text-gray-500">El sistema es de una vía. No puede transmitir mientras otra unidad está hablando.</p>
          </TacticalCard>
        </div>
      </section>

      {/* 04 Geolocalización */}
      <section className="mb-16 space-y-6">
        <div className="flex items-center gap-3">
          <StepNum>04</StepNum>
          <h2 className="text-3xl font-black uppercase text-white tracking-tighter leading-[0.9]">Geolocalización</h2>
        </div>
        <TacticalCard>
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
        </TacticalCard>
      </section>

      {/* 05 SOS */}
      <section className="mb-16 space-y-6">
        <div className="flex items-center gap-3">
          <StepNum>05</StepNum>
          <h2 className="text-3xl font-black uppercase text-red-500 tracking-tighter leading-[0.9]">Emergencia SOS</h2>
        </div>
        <TacticalCard className="border-red-600 bg-red-600/5">
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
              <span className="text-white font-bold">Funciona incluso sin datos (Internet).</span>
            </div>
          </div>
        </TacticalCard>
      </section>

      {/* 06 Store & Forward */}
      <section className="mb-16 space-y-6">
        <div className="flex items-center gap-3">
          <StepNum>06</StepNum>
          <h2 className="text-3xl font-black uppercase text-white tracking-tighter leading-[0.9]">Modo Store & Forward</h2>
        </div>
        <TacticalCard>
          <div className="flex items-start gap-4">
            <div className="bg-blue-500/10 p-3 border border-blue-500/30 rounded flex-shrink-0">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/></svg>
            </div>
            <div>
              <h4 className="font-black text-white uppercase text-sm mb-2">Gestión de falta de señal</h4>
              <p className="text-xs text-gray-400 mb-3">Si transmite y el sistema detecta <span className="text-red-500 font-bold">OFFLINE</span>, el mensaje no se pierde. Se guarda en la <span className="text-white">Bandeja de Salida Táctica (Outbox)</span>.</p>
              <div className="flex flex-wrap gap-4">
                <div className="text-[9px] font-mono text-gray-500 uppercase">
                  <span className="text-orange-500 font-bold">STATUS_PENDING:</span> Esperando conexión.
                </div>
                <div className="text-[9px] font-mono text-gray-500 uppercase">
                  <span className="text-emerald-500 font-bold">AUTO_RETRY:</span> Reintento automático cada 5s.
                </div>
              </div>
            </div>
          </div>
        </TacticalCard>
      </section>

      {/* 07 Log Auditoria */}
      <section className="mb-24 space-y-4">
        <div className="flex items-center gap-3">
          <StepNum>07</StepNum>
          <h2 className="text-2xl font-black uppercase text-white tracking-tighter leading-[0.9]">Log de Auditoría</h2>
        </div>
        <TacticalCard>
          <p className="text-xs text-gray-400">Acceda al panel <span className="text-white font-bold">"Log Audio"</span> para ver el historial de transmisiones. Cada registro incluye:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 font-mono text-[9px] text-orange-500">
            <div className="border border-white/5 p-2 bg-black/20 text-center uppercase tracking-tight">HORA EXACTA</div>
            <div className="border border-white/5 p-2 bg-black/20 text-center uppercase tracking-tight">COORDENADAS</div>
            <div className="border border-white/5 p-2 bg-black/20 text-center uppercase tracking-tight">AUDIO ORIGINAL</div>
            <div className="border border-white/5 p-2 bg-black/20 text-center uppercase tracking-tight">DESCARGA .WAV</div>
          </div>
        </TacticalCard>
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
