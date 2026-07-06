import { useState } from "react";
import type React from "react";
import type { NodeSectionProps } from "../types";
import TreeSection from "./tree";
import { styles } from "./styles";

const NodeSection = ({ node, depth }: NodeSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div style={{ ...styles.nodeContainer, marginLeft: `${depth * 20}px` }}>
      <button
        style={styles.btn}
        onClick={() => hasChildren && setIsOpen(!isOpen)}
        onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) =>
          (e.currentTarget.style.backgroundColor = "#e9ecef")
        }
        onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) =>
          (e.currentTarget.style.backgroundColor = "#f8f9fa")
        }
      >
        <span>{hasChildren ? (isOpen ? "📂" : "📁") : "📄"}</span>
        {node.label}
      </button>

      {isOpen && hasChildren && (
        <TreeSection node={node.children} depth={depth + 1} />
      )}
    </div>
  );
};

export default NodeSection;
