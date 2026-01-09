import React from 'react';
import { View } from '../App.tsx';

interface QuickGuideProps {
  onNavigate: (view: View) => void;
}

const QuickGuide: React.FC<QuickGuideProps> = ({ onNavigate }) => {
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
              <p className="text-sm leadin g-snug">{item.desc}</p>
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

export default QuickGuide;
