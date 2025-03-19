import { cx } from '@lib/utils';
import type { PropsWithChildren } from 'react';

export function InfiniteSlider({
  children,
  className,
  pauseOnHover,
}: PropsWithChildren & { className?: string; pauseOnHover?: boolean }) {
  return (
    <div
      data-id="slider"
      className={cx('group relative flex gap-10 overflow-hidden', className)}
    >
      <div className="absolute left-0 z-10 h-full w-1/12 bg-gradient-to-r from-neutral-100 to-transparent dark:from-[#101010]" />
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className={cx(
            'flex shrink-0 animate-infinite-slider justify-around gap-10 [--gap:1rem]',
            pauseOnHover && 'group-hover:[animation-play-state:paused]'
          )}
          data-id={`slide-${i + 1}`}
        >
          {children}
        </div>
      ))}
      <div className="absolute right-0 z-10 h-full w-1/12 bg-gradient-to-l from-neutral-100 to-transparent dark:from-[#101010]" />
    </div>
  );
}
