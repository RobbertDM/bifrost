"use client";
import { useCallback } from "react";
import ReactFlow, {
  Node,
  addEdge,
  Background,
  Edge,
  Connection,
  useNodesState,
  useEdgesState,
} from "reactflow";

import "reactflow/dist/style.css";

const initialNodes: Node[] = [
  {
    id: "mdm",
    type: "input",
    data: { label: "mdm" },
    position: { x: 250, y: 5 },
  },
  { id: "wind", data: { label: "wind" }, position: { x: 100, y: 100 } },
  { id: "audit", data: { label: "audit" }, position: { x: 400, y: 100 } },
  {
    id: "customer",
    data: { label: "customer" },
    position: { x: 400, y: 200 },
  },
];

const initialEdges: Edge[] = [
  { id: "e1-2", source: "mdm", target: "audit", animated: true },
  { id: "e1-3", source: "mdm", target: "wind", animated: true },
  { id: "e1-4", source: "audit", target: "customer", animated: true },
  { id: "e1-5", source: "mdm", target: "customer", animated: true },
];

export default function BasicFlow() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((els) => addEdge(params, els)),
    [setEdges],
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
    >
      <Background />
    </ReactFlow>
  );
}
