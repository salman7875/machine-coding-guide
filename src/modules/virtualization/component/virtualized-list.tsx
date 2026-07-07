import { useState, type UIEvent } from "react";
import type { VirtualizedProps } from "../types";

const VirtualizedList = ({
  list,
  height,
  width,
  itemHeight,
}: VirtualizedProps) => {
  const [indices, setIndices] = useState([0, Math.floor(height / itemHeight)]);
  const visibleList = list.slice(indices[0], indices[1] + 1);

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const { scrollTop } = e.target as HTMLDivElement;
    const newStartIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - 10);
    const newEndIndex = newStartIndex + Math.floor(height / itemHeight) + 10;
    if (indices[0] !== newStartIndex) {
      setIndices([newStartIndex, newEndIndex]);
    }
  };

  return (
    <div
      className="container"
      onScroll={handleScroll}
      style={{ height, width, backgroundColor: "grey", overflow: "auto" }}
    >
      <div
        style={{
          height: `${list.length * itemHeight}px`,
        }}
      >
        <div style={{ transform: `translateY(${indices[0] * itemHeight}px` }}>
          {visibleList.map((item) => {
            return (
              <div
                style={{
                  height: itemHeight + "px",
                  backgroundColor: "coral",
                  borderTop: "2px solid black",
                }}
                key={item}
                className="item"
              >
                Item {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VirtualizedList;
