import { useEffect, useState } from 'react';

const COLORS = ['#C75B39', '#E8B84B', '#6B8F71', '#1A3A4A', '#E07A56', '#F4D483'];

export default function Confetti({ active }) {
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    if (!active) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPieces([]);
      return;
    }

    const newPieces = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      delay: `${Math.random() * 0.5}s`,
      size: `${Math.random() * 8 + 6}px`,
      rotation: `${Math.random() * 360}deg`,
      borderRadius: Math.random() > 0.5 ? '50%' : '2px',
    }));

    setPieces(newPieces);

    const timer = setTimeout(() => {
      setPieces([]);
    }, 3500);

    return () => clearTimeout(timer);
  }, [active]);

  if (pieces.length === 0) return null;

  return (
    <>
      {pieces.map((p) => (
        <div
          key={p.id}
          className="confetti-piece"
          style={{
            left: p.left,
            backgroundColor: p.color,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            transform: `rotate(${p.rotation})`,
            borderRadius: p.borderRadius,
          }}
        />
      ))}
    </>
  );
}