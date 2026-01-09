import React, { useState, useEffect } from 'react';

// --- ENUMS PARA NAVEGACIÓN ---
export enum View {
  HOME = 'home',
  MANUAL = 'manual',
  GUIDE = 'guide'
}

// --- COMPONENTE LANDING (PÁGINA PRINCIPAL) ---
const Landing: React.FC<{ onNavigate: (view: View) => void }> = ({ onNavigate }) => (
  <div className="relative min-h-screen bg-[#0e0a07] text-white overflow-hidden selection:bg-orange-500/30">
    <div className="scanline"></div>
    
    <nav className="fixed w-full z-[60] bg-[#0e0a07]/90 backdrop-blur-md border-b border-white/5 no-print">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-orange-600 rounded-sm flex items-center justify-center font-black text-white text-[10px]">R</div>
          <span className="font-bold tracking-tighter text-sm uppercase">RADIO_UBICACIÓN</span>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <button onClick={() => onNavigate(View.GUIDE)} className="hidden md:block text-[10px] text-orange-500 hover:underline font-bold uppercase tracking-widest transition-all">
            GUÍA_IMPRESIÓN
          </button>
          <button onClick={() => onNavigate(View.MANUAL)} className="hidden md:block text-[10px] text-gray-500 hover:text-white font-bold uppercase tracking-widest transition-all">
            MANUAL_TÉCNICO
          </button>
          <a href="https://tacticalradioyb.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold text-orange-500 border border-orange-500/30 px-4 py-1.5 hover:bg-orange-600 hover:text-white transition-all">
            ENTRAR_APP &gt;
          </a>
        </div>
      </div>
    </nav>

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
          <a href="https://tacticalradioyb.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-orange-600 hover:bg-orange-700 transition-colors px-16 py-6 rounded-sm font-black text-sm md:text-lg tracking-[0.15em] uppercase text-white shadow-2xl">
            ENTRAR EN SERVICIO
          </a>
        </div>
      </div>
    </section>

    <footer className="py-24 bg-[#0e0a07] text-center border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex justify-center gap-8 mb-12">
          <button onClick={() => onNavigate(View.MANUAL)} className="text-gray-500 hover:text-white uppercase font-bold text-[10px] tracking-widest transition-all">
            Manual Operativo
          </button>
          <button onClick={() => onNavigate(View.GUIDE)} className="text-gray-500 hover:text-white uppercase font-bold text-[10px] tracking-widest transition-all">
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

// --- COMPONENTE MANUAL TÉCNICO ---
const Manual: React.FC<{ onNavigate: (view: View) => void }> = ({ onNavigate }) => (
  <div className="min-h-screen bg-[#0e0a07] text-[#e5e7eb] p-6 md:p-12 max-w-5xl mx-auto grid-bg">
    <div className="no-print fixed bottom-6 right-6 flex gap-3 z-50">
      <button onClick={() => window.print()} className="bg-white text-black px-5 py-2.5 font-black text-[10px] uppercase tracking-widest hover:bg-orange-600 hover:text-white transition-all shadow-2xl border border-black/10">
        IMPRIMIR_PDF
      </button>
      <button onClick={() => onNavigate(View.HOME)} className="bg-gray-800 text-white px-5 py-2.5 font-black text-[10px] uppercase tracking-widest hover:bg-gray-700 transition-all border border-white/10">
        VOLVER
      </button>
    </div>

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
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="bg-orange-500 text-white w-7 h-7 flex items-center justify-center font-black text-sm">01</span>
          <h2 className="text-2xl font-black uppercase text-white tracking-tighter">Identificación</h2>
        </div>
        <div className="bg-white/5 border border-white/10 p-6">
          <p className="text-xs text-gray-400 mb-4">
            Al iniciar, ingrese su <span className="text-white font-bold">Callsign</span>. Ej: "MOVIL-1". Este nombre será su identificador único.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="bg-orange-500 text-white w-7 h-7 flex items-center justify-center font-black text-sm">02</span>
          <h2 className="text-2xl font-black uppercase text-white tracking-tighter">PTT (VOZ)</h2>
        </div>
        <div className="bg-white/5 border border-white/10 p-6">
          <p className="text-xs text-gray-400 mb-4">
            Mantenga presionado el botón central para hablar. El aro naranja indica que está transmitiendo.
          </p>
        </div>
      </section>
    </div>

    <section className="mb-16 space-y-6 text-center md:text-left">
      <h2 className="text-3xl font-black uppercase text-red-500 tracking-tighter">Emergencia SOS</h2>
      <div className="bg-red-600/5 border border-red-600 p-6">
        <p className="text-xs text-gray-400">
          El botón SOS genera una alerta que prepara un SMS con coordenadas exactas. <span className="text-white font-bold">Funciona sin internet vía red celular.</span>
        </p>
      </div>
    </section>

    <footer className="pt-12 border-t border-white/5 opacity-30">
      <p className="mono text-[9px] uppercase font-bold tracking-widest text-white">RADIO_UBICACION_MOVIL // DOC_ID: 001-OP-TECH</p>
    </footer>
  </div>
);

// --- COMPONENTE GUÍA RÁPIDA (FIDELIDAD TOTAL AL HTML) ---
const QuickGuide: React.FC<{ onNavigate: (view: View) => void }> = ({ onNavigate }) => {
  const instructions = [
    {
      id: '01',
      title: '01. IDENTIFICACIÓN (CALLSIGN)',
      desc: 'Ingrese su indicativo de radio. Es el nombre que verán los demás en el mapa. Sea breve y use mayúsculas.',
      tip: 'Ejemplo: MOVIL-01, BASE-01, RESCATE-A.',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="square"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    },
    {
      id: '02',
      title: '02. SELECCIÓN DE CANAL',
      desc: 'Toque el canal deseado para entrar. Los canales con candado requieren PIN.',
      tip: 'Si no ve su canal, use el botón (+) para crear una nueva frecuencia.',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="square"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg>
    },
    {
      id: '03',
      title: '03. TRANSMISIÓN (PTT)',
      desc: 'Mantenga presionado el círculo central para hablar. Suelte para escuchar.',
      tip: 'La barra de estado dirá "TX_TRANSMITIENDO" durante la modulación.',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="square"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
    },
    {
      id: '04',
      title: '04. GPS FIJO (BASE / PC)',
      desc: 'Para unidades estáticas: Toque el icono de la MIRA, luego toque el mapa donde está ubicado.',
      tip: 'Esto anula el GPS dinámico y fija su unidad en una coordenada exacta.',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="square"><circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/></svg>
    },
    {
      id: '05',
      title: '05. ALERTA SOS (PRIORIDAD)',
      desc: 'Presione el triángulo rojo en emergencias. Seleccione el tipo de incidente y envíe el SMS.',
      tip: 'Funciona sin datos de internet. Envía sus coordenadas vía red celular tradicional.',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="square"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
    },
    {
      id: '06',
      title: '06. RESILIENCIA DE SEÑAL',
      desc: 'Si no hay red, la app guarda sus mensajes y alertas en una cola local (Outbox).',
      tip: 'Al recuperar señal, el sistema reintenta el envío automáticamente.',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="square"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m16 16-4-4-4 4"/></svg>
    },
    {
      id: '07',
      title: '07. HISTORIAL Y AUDITORÍA',
      desc: 'Toque el panel "LOG AUDIO" para revisar transmisiones pasadas.',
      tip: 'Puede reproducir el audio o descargarlo en formato .WAV como evidencia.',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="square"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black p-8 md:p-12 max-w-4xl mx-auto font-mono selection:bg-black selection:text-white">
      {/* CABECERA DE IMPRESIÓN */}
      <div className="border-[4px] border-black p-4 mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tighter">GUÍA RÁPIDA DE OPERACIÓN</h1>
          <p className="text-sm font-bold uppercase">SISTEMA: RADIO UBICACIÓN MÓVIL (v3.2)</p>
        </div>
        <div className="text-right font-bold text-[10px] uppercase">
          CONFIDENCIALIDAD: USO INTERNO<br />
          DOCUMENTO: OP-01-B/W
        </div>
      </div>

      {/* CUERPO DE LA GUÍA */}
      <div className="space-y-2">
        {instructions.map((item) => (
          <div key={item.id} className="border-b border-black py-4 flex gap-6 items-start last:border-b-0">
            <div className="w-12 h-12 border-2 border-black flex items-center justify-center flex-shrink-0">
              {item.icon}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg uppercase tracking-tight">{item.title}</h3>
              <p className="text-sm leading-snug">{item.desc}</p>
              <p className="text-[11px] font-bold italic mt-1 opacity-80">{item.tip}</p>
            </div>
          </div>
        ))}
      </div>

      {/* PIE DE PÁGINA */}
      <div className="mt-8 pt-4 border-t-[4px] border-black text-center font-bold text-sm uppercase tracking-tight">
        EN CASO DE FALLA TOTAL: UTILICE FRECUENCIAS ANALÓGICAS VÍA RADIO VHF/UHF
        <div className="no-print mt-8 space-x-4 flex justify-center">
          <button 
            onClick={() => window.print()} 
            className="bg-black text-white px-8 py-3 font-bold text-xs uppercase hover:bg-gray-800 transition-colors"
          >
            IMPRIMIR PDF
          </button>
          <button 
            onClick={() => onNavigate(View.HOME)} 
            className="border-2 border-black px-8 py-3 font-bold text-xs uppercase hover:bg-black hover:text-white transition-all"
          >
            VOLVER AL HUB
          </button>
        </div>
      </div>
    </div>
  );
};

// --- APP PRINCIPAL ---
const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (Object.values(View).includes(hash as View)) {
        setCurrentView(hash as View);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (view: View) => {
    window.location.hash = view;
    setCurrentView(view);
  };

  return (
    <div className="min-h-screen">
      {currentView === View.HOME && <Landing onNavigate={navigate} />}
      {currentView === View.MANUAL && <Manual onNavigate={navigate} />}
      {currentView === View.GUIDE && <QuickGuide onNavigate={navigate} />}
    </div>
  );
};

export default App;
