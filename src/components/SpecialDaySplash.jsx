import { useState } from 'react';

const SPECIAL_DAYS = {
  '0704': {
    icon: '🎆',
    title: '4 de Julio — Día de la Independencia de EE.UU.',
    subtitle: 'Hoy el puzzle tiene temática americana',
    description: 'Celebramos el 4 de julio con un puzzle especial sobre la independencia, símbolos, ciudades e inventos de Estados Unidos.',
  },
  '0101': {
    icon: '🎉',
    title: '¡Feliz Año Nuevo!',
    subtitle: 'Estrenamos el año con un puzzle especial',
    description: 'Propósitos, tradiciones y todo lo que trae el nuevo año. ¡Que tengas un excelente año!',
  },
  '1225': {
    icon: '🎄',
    title: '¡Feliz Navidad!',
    subtitle: 'Hoy el puzzle es navideño',
    description: 'Villancicos, adornos, postres y personajes navideños. ¡Disfruta del puzzle especial de Navidad!',
  },
  '1031': {
    icon: '🎃',
    title: '¡Feliz Halloween!',
    subtitle: 'Hoy el puzzle da miedo',
    description: 'Calabazas, disfraces, monstruos y películas de terror. ¿Te atreves a resolverlo?',
  },
  '0214': {
    icon: '💕',
    title: '14 de Febrero — Día del Amor',
    subtitle: 'Hoy el puzzle es todo corazón',
    description: 'Amor, amistad, palabras dulces y canciones de amor. Un puzzle especial para celebrar el cariño.',
  },
  '0916': {
    icon: '🇲🇽',
    title: '16 de Septiembre — Independencia de México',
    subtitle: 'Hoy el puzzle es mexicano',
    description: 'El Grito, los símbolos patrios, la comida y el arte de México en un puzzle muy especial.',
  },
  '1206': {
    icon: '🇪🇸',
    title: '6 de Diciembre — Día de la Constitución Española',
    subtitle: 'Hoy el puzzle es español',
    description: 'La Constitución, los símbolos de España, la Casa Real y las comunidades autónomas.',
  },
  '0520': {
    icon: '🌺',
    title: '20 de Mayo — Día de la Independencia',
    subtitle: 'Hoy el puzzle celebra la libertad',
    description: 'Independencia, primavera, jardín y superación personal en un puzzle temático.',
  },
  '0601': {
    icon: '☀️',
    title: '¡Llegó el Verano!',
    subtitle: 'Hoy el puzzle huele a vacaciones',
    description: 'Playa, sol, calor, deportes acuáticos, frutas de temporada y ropa veraniega.',
  },
};

function getSpecialDayKey() {
  const now = new Date();
  return String(now.getMonth() + 1).padStart(2, '0') + String(now.getDate()).padStart(2, '0');
}

export default function SpecialDaySplash() {
  const [dismissed, setDismissed] = useState(() => {
    try {
      const today = getSpecialDayKey();
      return localStorage.getItem('pc-special-splash-dismissed') === today;
    } catch { return false; }
  });

  const specialDay = SPECIAL_DAYS[getSpecialDayKey()];
  if (!specialDay || dismissed) return null;

  const handleDismiss = () => {
    try {
      localStorage.setItem('pc-special-splash-dismissed', getSpecialDayKey());
    } catch {}
    setDismissed(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#1a1a2e] border border-gray-700 rounded-2xl shadow-2xl max-w-sm w-full mx-4 p-6 text-center">
        <div className="text-5xl mb-4">{specialDay.icon}</div>
        <h2 className="text-xl font-bold text-white mb-2">{specialDay.title}</h2>
        <p className="text-[#e94560] font-semibold text-sm mb-3">{specialDay.subtitle}</p>
        <p className="text-gray-400 text-sm mb-6 leading-relaxed">{specialDay.description}</p>
        <button
          onClick={handleDismiss}
          className="bg-[#e94560] hover:bg-[#d63851] text-white font-bold px-8 py-3 rounded-xl transition-colors w-full"
        >
          ¡A jugar!
        </button>
      </div>
    </div>
  );
}