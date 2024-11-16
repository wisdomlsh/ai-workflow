import React from 'react';
import {
    ReactFlow,
    ReactFlowProvider,
    Background,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css'
import {Operator, CustomEdge, CustomNode, CustomLineConnect} from "./components";
import {useWorkFlow, useEdgesInteractions} from "./hooks";


function WorkflowCanvas() {

    const {nodes, edges, setEdges, setNodes} = useWorkFlow()
    const {handleEdgeEnter, handleEdgeLeave, handleEdgeClick, handlePaneClick} = useEdgesInteractions()


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
                onEdgeClick={handleEdgeClick}
                onPaneClick={handlePaneClick}
                fitView
                connectionLineComponent={CustomLineConnect}
                minZoom={0.25}
                // onNodesChange={onNodesChange}
                // onEdgesChange={onEdgesChange}
                // onConnect={onConnect}
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

function Workflow() {
    return <ReactFlowProvider><WorkflowCanvas/></ReactFlowProvider>
}

export default Workflow;
