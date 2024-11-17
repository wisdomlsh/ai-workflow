import React, {useEffect} from 'react';
import {
    ReactFlow,
    Background,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css'
import {Operator, CustomEdge, CustomNode, CustomLineConnect} from "./components";
import {useWorkFlow, useEdgesInteractions} from "./hooks";
import {useAddNode} from "@/app/work_flow/hooks";
import useNodesInteractions from "./hooks/useNodesInteractions";


function Workflow() {

    const {nodes, edges} = useWorkFlow()
    const {handleDrop, handleDragOver} = useAddNode()

    const {handleEdgeEnter, handleEdgeLeave, handleEdgeChange, handlePaneClick,onReconnect, onConnect} = useEdgesInteractions()
    const {handleNodeClick, handleNodesChange} = useNodesInteractions()

    const edgeTypes = {
        custom: CustomEdge,
    };
    const nodeTypes = {
        custom: CustomNode,
    };



    return (
        <div className='h-full relative'>
            <Operator/>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                edgeTypes={edgeTypes}
                nodeTypes={nodeTypes}
                onEdgeMouseEnter={handleEdgeEnter}
                onEdgeMouseLeave={handleEdgeLeave}
                onPaneClick={handlePaneClick}
                fitView
                connectionLineComponent={CustomLineConnect}
                minZoom={0.25}
                onNodesChange={handleNodesChange}
                onEdgesChange={handleEdgeChange}
                onReconnect={onReconnect}
                onConnect={onConnect}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onNodeClick={handleNodeClick}
            >


                <Background
                    gap={[14, 14]}
                    size={2}
                    color='#E4E5E7'
                />
            </ReactFlow>


        </div>
    );
}


export default Workflow;
