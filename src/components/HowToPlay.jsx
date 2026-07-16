export default function HowToPlay({ show, onClose }) {
  if (!show) return null;

  const colors = [
    { name: 'Fácil', class: 'bg-[#F9DF6D]' },
    { name: 'Media', class: 'bg-[#A0C35A]' },
    { name: 'Difícil', class: 'bg-[#B0C4EF]' },
    { name: 'Súper difícil', class: 'bg-[#BA81C5]' },
  ];

  return (
    <div className="modal-overlay fixed inset-0 bg-black/40 flex items-start justify-center z-50 p-4 overflow-y-auto" onClick={onClose}>
      <div
        className="modal-content bg-white w-full max-w-sm p-6 sm:p-8 my-4 sm:my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-bold uppercase tracking-wider">Cómo jugar</h2>
          <button
            onClick={onClose}
            className="w-7 h-7 flex items-center justify-center rounded hover:bg-[var(--color-tile-default)] transition-colors cursor-pointer text-sm"
          >
            ✕
          </button>
        </div>

        <div className="space-y-5 text-sm leading-relaxed">
          <div>
            <p className="font-semibold mb-1">Encuentra las conexiones</p>
            <p className="text-[var(--color-text-subtle)]">
              Hay <strong>16 palabras</strong> divididas en 4 grupos ocultos de 4 palabras
              que comparten un tema en común, más <strong>4 palabras señuelo</strong> que
              no pertenecen a ningún grupo.
            </p>
          </div>

          <div>
            <p className="font-semibold mb-1">Selecciona y envía</p>
            <p className="text-[var(--color-text-subtle)]">
              Toca 4 palabras y presiona <strong>"Enviar"</strong>. Si pertenecen al mismo grupo,
              la categoría será revelada.
            </p>
          </div>

          <div>
            <p className="font-semibold mb-1">Dificultad</p>
            <p className="text-[var(--color-text-subtle)] mb-2">
              Los grupos están ordenados por dificultad:
            </p>
            <div className="space-y-1">
              {colors.map((c) => (
                <div key={c.name} className="flex items-center gap-2">
                  <div className={`w-5 h-5 rounded ${c.class}`} />
                  <span className="text-sm text-[var(--color-text-subtle)]">{c.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold mb-1">Cuidado con los errores</p>
            <p className="text-[var(--color-text-subtle)]">
              Solo tienes <strong>3 errores</strong> permitidos. Cada intento incorrecto
              consume uno. ¡Agótalos y perderás!
            </p>
          </div>

          <div>
            <p className="font-semibold mb-1">Modo Difícil</p>
            <p className="text-[var(--color-text-subtle)]">
              Añade <strong>8 palabras señuelo</strong> en lugar de 4 (total 24 palabras) y usa puzzles más elaborados. Solo para valientes.
            </p>
          </div>

          <div>
            <p className="font-semibold mb-1">Un desafío diario</p>
            <p className="text-[var(--color-text-subtle)]">
              Un puzzle nuevo todos los días a las 00:00. Todos ven la misma combinación.
            </p>
          </div>

          <div className="pt-2">
            <button onClick={onClose} className="nyt-btn nyt-btn-primary w-full">
              Entendido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}