import { PropsWithChildren } from "react";
import { cx } from "@lib/utils";


export function InfiniteSlider({children,className, pauseOnHover}: PropsWithChildren & {className?: string, pauseOnHover?: boolean}) { 
    return <div data-id="slider" className={cx("group relative flex overflow-hidden gap-10", className)}>
        <div className="absolute left-0 z-10 h-full w-1/12 bg-gradient-to-r from-neutral-100 to-transparent dark:from-[#101010]" />
        {Array.from({ length: 10 }).map((_, i) => <div key={i} className={cx("animate-infinite-slider  flex shrink-0 justify-around [--gap:1rem] gap-10",  pauseOnHover && "group-hover:[animation-play-state:paused]")} data-id={`slide-${i+1}`}>
          {children}  
        </div>)}
 <div className="absolute right-0 z-10 h-full w-1/12 bg-gradient-to-l from-neutral-100 to-transparent dark:from-[#101010]" />
    </div>
}
