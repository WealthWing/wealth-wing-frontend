import * as React from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ReactFlow, Handle, Position } from '@xyflow/react';
import type { NodeProps } from '@xyflow/react';

import type { FlowNode, FlowEdge, ArchitectureTrack } from './services.definitions';
import { servicesStyles } from './services.styles';

const smoothEase = [0.16, 1, 0.3, 1] as const;

const SideHandles = () => (
	<>
		<Handle
			id="left-target"
			type="target"
			position={Position.Left}
			style={servicesStyles.architectureCanvasHiddenHandle}
		/>
		<Handle
			id="right-target"
			type="target"
			position={Position.Right}
			style={servicesStyles.architectureCanvasHiddenHandle}
		/>
		<Handle
			id="left-source"
			type="source"
			position={Position.Left}
			style={servicesStyles.architectureCanvasHiddenHandle}
		/>
		<Handle
			id="right-source"
			type="source"
			position={Position.Right}
			style={servicesStyles.architectureCanvasHiddenHandle}
		/>
	</>
);

const SourceNode = ({ data }: NodeProps<FlowNode>) => (
	<div
		css={[
			servicesStyles.architectureCanvasNodeBase,
			servicesStyles.architectureCanvasSourceNode
		]}
	>
		<Handle
			type="target"
			position={Position.Top}
			style={servicesStyles.architectureCanvasHiddenHandle}
		/>
		<SideHandles />
		{data.label}
		<Handle
			type="source"
			position={Position.Bottom}
			style={servicesStyles.architectureCanvasHiddenHandle}
		/>
	</div>
);

const ProcessNode = ({ data }: NodeProps<FlowNode>) => (
	<div
		css={[
			servicesStyles.architectureCanvasNodeBase,
			servicesStyles.architectureCanvasProcessNode
		]}
	>
		<Handle
			type="target"
			position={Position.Top}
			style={servicesStyles.architectureCanvasHiddenHandle}
		/>
		<SideHandles />
		{data.label}
		<Handle
			type="source"
			position={Position.Bottom}
			style={servicesStyles.architectureCanvasHiddenHandle}
		/>
	</div>
);

const OutputNode = ({ data }: NodeProps<FlowNode>) => (
	<div
		css={[
			servicesStyles.architectureCanvasNodeBase,
			servicesStyles.architectureCanvasOutputNode
		]}
	>
		<Handle
			type="target"
			position={Position.Top}
			style={servicesStyles.architectureCanvasHiddenHandle}
		/>
		<SideHandles />
		{data.label}
		<Handle
			type="source"
			position={Position.Bottom}
			style={servicesStyles.architectureCanvasHiddenHandle}
		/>
	</div>
);

const DatabaseNode = ({ data }: NodeProps<FlowNode>) => (
	<div
		css={[
			servicesStyles.architectureCanvasNodeBase,
			servicesStyles.architectureCanvasDatabaseNode
		]}
	>
		<Handle
			type="target"
			position={Position.Top}
			style={servicesStyles.architectureCanvasHiddenHandle}
		/>
		<SideHandles />
		{data.label}
		<Handle
			type="source"
			position={Position.Bottom}
			style={servicesStyles.architectureCanvasHiddenHandle}
		/>
	</div>
);

const RealmLabelNode = ({ data }: NodeProps<FlowNode>) => (
	<div css={servicesStyles.architectureCanvasRealmLabelNode}>{data.label}</div>
);

const nodeTypes = {
	sourceNode: SourceNode,
	processNode: ProcessNode,
	outputNode: OutputNode,
	databaseNode: DatabaseNode,
	realmLabelNode: RealmLabelNode
};

export type ArchitectureCanvasProps = {
	nodes: FlowNode[];
	edges: FlowEdge[];
	trackId: ArchitectureTrack['id'];
	coreFocus: string;
};

export const ArchitectureCanvas = ({
	nodes,
	edges,
	trackId,
	coreFocus
}: ArchitectureCanvasProps) => {
	const shouldReduceMotion = useReducedMotion() ?? false;

	const canvas = (
		<div
			css={servicesStyles.architectureCanvasRoot}
			role="img"
			aria-label={`Architecture flow diagram: ${coreFocus}`}
		>
			<ReactFlow
				nodes={nodes}
				edges={edges}
				nodeTypes={nodeTypes}
				defaultEdgeOptions={{ style: servicesStyles.architectureCanvasEdge }}
				fitView
				fitViewOptions={{ padding: 0.25 }}
				nodesDraggable={false}
				nodesConnectable={false}
				nodesFocusable={false}
				edgesFocusable={false}
				elementsSelectable={false}
				panOnDrag={false}
				panOnScroll={false}
				zoomOnScroll={false}
				zoomOnPinch={false}
				zoomOnDoubleClick={false}
				preventScrolling={false}
				proOptions={{ hideAttribution: true }}
			/>
		</div>
	);

	if (shouldReduceMotion) {
		return canvas;
	}

	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={trackId}
				css={servicesStyles.architectureCanvasFrame}
				initial={{ opacity: 0, scale: 0.97 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0, scale: 0.97 }}
				transition={{ duration: 0.22, ease: smoothEase }}
			>
				{canvas}
			</motion.div>
		</AnimatePresence>
	);
};
