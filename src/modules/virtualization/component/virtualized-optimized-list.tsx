import { useEffect, useRef, useState } from "react";
import type { VirtualizedProps } from "../types";
const BUFFER = 5;

const VirtualizedOptimizedList = ({
  list,
  height,
  width,
  itemHeight,
}: VirtualizedProps) => {
  console.log({ list, height, width, itemHeight });
  const containerRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const itemsPerView = Math.ceil(height / itemHeight);
  const [indices, setIndices] = useState([0, itemsPerView + BUFFER]);
  const [startIndex, endIndex] = indices;

  const topContainerPadding = startIndex * itemHeight;
  const endContainerPadding = Math.max(
    0,
    (list.length - endIndex - 1) * itemHeight,
  );

  const visibleList = list.slice(startIndex, endIndex + 1);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const scrollTop = container.scrollTop;
          console.log(scrollTop);

          const computedStart = Math.max(
            0,
            Math.floor(scrollTop / itemHeight) - BUFFER,
          );
          const computedEnd = Math.min(
            list.length - 1,
            computedStart + itemsPerView + 2 * BUFFER,
          );

          if (computedStart !== startIndex || computedEnd !== endIndex) {
            setIndices([computedStart, computedEnd]);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      root: container,
      threshold: 0,
      rootMargin: `${itemHeight * 2}px 0px`,
    });

    if (topRef.current) observer.observe(topRef.current);
    if (bottomRef.current) observer.observe(bottomRef.current);

    return () => {
      observer.disconnect();
    };
  }, [startIndex, endIndex, itemHeight, list.length, itemsPerView]);

  return (
    <div
      ref={containerRef}
      style={{ width, height, overflow: "auto", position: "relative" }}
    >
      <div ref={topRef} style={{ height: `${topContainerPadding}px` }} />
      {visibleList.map((item) => {
        return (
          <div
            key={item}
            style={{
              height: `${itemHeight}px`,
              backgroundColor: "coral",
              borderTop: "2px solid black",
              boxSizing: "border-box",
            }}
          >
            {item}
          </div>
        );
      })}
      <div ref={bottomRef} style={{ height: `${endContainerPadding}px` }} />
    </div>
  );
};

export default VirtualizedOptimizedList;
