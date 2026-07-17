import WordGrid from './WordGrid';
import CategoryRow from './CategoryRow';
import AdBanner from './AdBanner';

export default function GamePlayArea({
  solvedCategories, shuffledWords, selectedIds, mistakeShake, animatingIds,
  onSelectWord, timerStarted, elapsed, mistakes, MAX_MISTAKES, gameOver,
  handleSubmit, handleShuffle, handleDeselectAll, fontSize, staggerKey,
  }) {
  return (
    <>

      <div className="space-y-2 mb-4">
        {solvedCategories.map((cat) => (
          <CategoryRow key={cat.categoryIndex} category={cat} />
        ))}
      </div>

      <div className={`flex-1 flex flex-col items-center justify-center ${fontSize !== 'normal' ? 'font-size-' + fontSize : ''}`}>
        <WordGrid
          words={shuffledWords}
          selectedIds={selectedIds}
          solvedCategories={solvedCategories}
          onSelectWord={onSelectWord}
          mistakeShake={mistakeShake}
          animatingIds={animatingIds}
          allSolved={solvedCategories.length >= 4}
          staggerKey={staggerKey}
          />
      </div>

      <div className="flex items-center justify-center gap-3 mt-4 mb-2">
        <div className="flex items-center gap-1 bg-[var(--color-tile-default)] px-2.5 py-1 rounded-lg shadow-sm border border-[var(--color-border)]/50">
          <span className="text-xs font-semibold text-[var(--color-text)]">Vidas</span>
          {Array.from({ length: MAX_MISTAKES }).map((_, i) => {
            const justLost = !gameOver && i === MAX_MISTAKES - mistakes && mistakes > 0;
            const isActive = i < MAX_MISTAKES - mistakes;
            const isWarning = isActive && mistakes === MAX_MISTAKES - 1 && i === 0;
            return (
              <span
                key={i}
                className={`mistake-heart ${justLost ? 'animate-mistake-flash' : ''} ${
                  isWarning ? 'mistake-heart-warning' : isActive ? 'mistake-heart-active' : 'mistake-heart-lost'
                }`}
              >
                ♥
              </span>
            );
          })}
        </div>
        {timerStarted && (
          <span className="text-sm font-mono tabular-nums text-[var(--color-text-subtle)]">
            {String(Math.floor(elapsed / 60)).padStart(2, '0')}:{String(elapsed % 60).padStart(2, '0')}
          </span>
        )}
      </div>

      <AdBanner className="my-3" />

      <div className="flex justify-center gap-2 mt-5 mb-4">
        <button onClick={handleShuffle} disabled={gameOver} className="nyt-btn nyt-btn-secondary">
          ↻ Mezclar
        </button>
        <button
          onClick={handleDeselectAll}
          disabled={selectedIds.size === 0 || gameOver}
          className="nyt-btn nyt-btn-secondary"
        >
          ✕ Deseleccionar
        </button>
                <button
          onClick={handleSubmit}
          disabled={selectedIds.size !== 4 || gameOver}
          className={`nyt-btn ${selectedIds.size === 4 && !gameOver ? 'nyt-btn-primary' : 'nyt-btn-secondary'}`}
        >
          Enviar
        </button>
      </div>
    </>
  );
}