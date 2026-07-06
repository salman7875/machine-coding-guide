import NodeSection from "./node";
import type { TreeSectionProps } from "../types";

const TreeSection = ({ node, depth = 0 }: TreeSectionProps) => (
  <>
    {node.map((n) => (
      <NodeSection key={n.id} node={n} depth={depth} />
    ))}
  </>
);
export default TreeSection;
