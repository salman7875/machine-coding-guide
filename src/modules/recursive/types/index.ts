export type TreeSectionProps = {
  node: NodeType[];
  depth: number;
};

export type NodeSectionProps = {
  node: NodeType;
  depth: number;
};

export type NodeType = {
  id: string;
  label: string;
  children: NodeType[];
};
