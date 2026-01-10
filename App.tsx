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

// --- COMPONENTE MANUAL TÉCNICO (REPLICA FIEL) ---
const Manual: React.FC<{ onNavigate: (view: View) => void }> = ({ onNavigate }) => {
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
        {/* 01 REGISTRO */}
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

        {/* 02 CANALES */}
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

      {/* 03 COMUNICACIÓN DE VOZ */}
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

      {/* 04 GPS Y MODO FIJO */}
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

      {/* 05 EMERGENCIAS */}
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

      {/* 06 STORE & FORWARD */}
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

      {/* 07 LOG Y AUDITORIA */}
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

// --- COMPONENTE GUÍA RÁPIDA ---
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
    <div className="min-h-screen bg-white text-black p-8 max-w-4xl mx-auto font-mono selection:bg-black selection:text-white">
      {/* CABECERA DE IMPRESIÓN */}
      <div className="border-[4px] border-black p-4 mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold uppercase leading-none">GUÍA RÁPIDA DE OPERACIÓN</h1>
          <p className="text-sm font-bold mt-1 uppercase">SISTEMA: RADIO UBICACIÓN MÓVIL (v3.2)</p>
        </div>
        <div className="text-right font-bold text-[10px] hidden md:block">
          CONFIDENCIALIDAD: USO INTERNO<br />
          DOCUMENTO: OP-01-B/W
        </div>
      </div>

      {/* CUERPO DE LA GUÍA */}
      <div className="space-y-0">
        {instructions.map((item) => (
          <div key={item.id} className="border-b border-black py-4 flex gap-6 items-start last:border-b-0">
            <div className="w-12 h-12 border-2 border-black flex items-center justify-center flex-shrink-0">
              {item.icon}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg uppercase leading-none mb-1">{item.title}</h3>
              <p className="text-sm leading-snug">{item.desc}</p>
              <p className="text-[11px] font-bold italic mt-1">{item.tip}</p>
            </div>
          </div>
        ))}
      </div>

      {/* PIE DE PÁGINA */}
      <div className="mt-8 pt-4 border-t-[4px] border-black text-center font-bold text-sm uppercase">
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
