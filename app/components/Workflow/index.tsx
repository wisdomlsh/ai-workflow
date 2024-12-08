import React from 'react';
import {
    ReactFlow,
    Background,
} from '@xyflow/react';
import {Operator, CustomEdge, CustomNode, CustomLineConnect} from "./components";
import {useWorkFlow, useEdgesInteractions} from "./hooks";
import {useAddNode} from "@/app/work_flow/hooks";
import useNodesInteractions from "./hooks/useNodesInteractions";
import {useConfigStore} from "@/app/store";

import '@xyflow/react/dist/style.css'

function Workflow() {

    const {nodes, edges} = useWorkFlow()
    const {handleDrop, handleDragOver} = useAddNode()
    const config = useConfigStore()

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
                colorMode={config.theme}
            >


                <Background />
            </ReactFlow>


        </div>
    );
}


export default Workflow;
