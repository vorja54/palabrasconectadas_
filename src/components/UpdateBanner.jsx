import { useRegisterSW } from 'virtual:pwa-register/react';

export default function UpdateBanner() {
  const {
    needRefresh: [needRefresh],
    updateServiceWorker,
  } = useRegisterSW();

  if (!needRefresh) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
      <div className="mx-auto max-w-md bg-[#1e1e3a] text-white rounded-xl shadow-2xl p-4 flex items-center justify-between gap-3 border border-[#F9DF6D]/30">
        <p className="text-sm font-semibold">
          🆕 Nueva versión disponible
        </p>
        <button
          onClick={() => updateServiceWorker(true)}
          className="bg-[#F9DF6D] hover:bg-[#f5d34a] text-[#1a1a2e] font-bold text-sm px-4 py-2 rounded-lg shadow-lg shadow-[#F9DF6D]/20 transition-all cursor-pointer shrink-0"
        >
          Actualizar
        </button>
      </div>
    </div>
  );
}