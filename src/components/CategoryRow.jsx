const colorMap = {
  yellow: { bg: '#F9DF6D', text: '#000000' },
  green: { bg: '#A0C35A', text: '#000000' },
  blue: { bg: '#B0C4EF', text: '#000000' },
  purple: { bg: '#BA81C5', text: '#000000' },
};

const fmt = (s) => {
  if (s === undefined || s === null) return '';
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${String(sec).padStart(2, '0')}`;
};

export default function CategoryRow({ category }) {
  const c = colorMap[category.color] || colorMap.yellow;
  const hasTime = category.solvedAt !== undefined && category.solvedAt !== null;

  return (
    <div
      className="nyt-category w-full px-4 py-3 animate-category-reveal"
      style={{
        backgroundColor: c.bg,
        color: c.text,
        borderRadius: '10px',
        boxShadow: `
          0 2px 8px rgba(0,0,0,0.06),
          0 4px 12px rgba(0,0,0,0.04),
          inset 0 1px 0 rgba(255,255,255,0.5)
        `,
      }}
    >
      <div className="flex items-center justify-center gap-2 mb-0.5">
        <p className="text-center font-bold text-sm uppercase tracking-wider">
          {category.name}
        </p>
        {hasTime && (
          <span className="text-[11px] font-mono tabular-nums opacity-70">
            {fmt(category.solvedAt)}
          </span>
        )}
      </div>
      <p className="text-center text-sm">
        {category.words.join(' · ')}
      </p>
    </div>
  );
}