import { addSoftHyphens } from '../utils/hyphenate';

const MAX_STAGGER_MS = 2000;

export default function WordGrid({ words, selectedIds, solvedCategories, onSelectWord, mistakeShake, animatingIds, allSolved, staggerKey }) {
  if (allSolved) return null;

  const solvedCategoryIndexes = new Set(solvedCategories.map((sc) => sc.categoryIndex));
  const visibleWords = words.filter((item) => !solvedCategoryIndexes.has(item.categoryIndex));

  return (
    <div
      key={staggerKey}
      className={`grid grid-cols-4 gap-1.5 sm:gap-3 max-w-[360px] sm:max-w-xl mx-auto ${mistakeShake ? 'animate-liquid-wobble' : ''}`}
    >
      {words.map((item, idx) => {
        if (solvedCategoryIndexes.has(item.categoryIndex)) return null;

        const isSelected = selectedIds.has(item.id);
        const isAnimating = animatingIds.has(item.id);
        const visualIdx = visibleWords.indexOf(item);
        const t = visualIdx / Math.max(visibleWords.length - 1, 1);
        const delay = visualIdx >= 0 ? t * t * MAX_STAGGER_MS : 0;

        return (
          <button
            key={item.id}
            onClick={() => onSelectWord(item.id)}
            disabled={allSolved}
            className={`
              nyt-tile
              aspect-[4/3] sm:aspect-[1.9/1] flex items-center justify-center
              text-xs sm:text-base font-semibold
              select-none
              transition-all duration-150
              ${isAnimating ? 'animate-morph-merge' : ''}
              ${!isAnimating && !isSelected ? 'animate-tile-enter' : ''}
              ${isSelected
                ? 'nyt-tile-selected animate-selected-pulse'
                : 'nyt-tile-default'}
            `}
            style={{
              animationDelay: isAnimating
                ? `${idx * 60}ms`
                : !isSelected ? `${delay}ms` : '0ms',
              animationDuration: isAnimating ? '0.5s' : '0.5s',
            }}
          >
            <span className="word-tile-text text-center leading-tight tracking-tighter px-0.5" style={{ hyphens: 'manual' }}>
              {addSoftHyphens(item.word)}
            </span>
          </button>
        );
      })}
    </div>
  );
}