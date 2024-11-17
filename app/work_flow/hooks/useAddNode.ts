import {useReactFlow} from "@xyflow/react";
import {useCallback} from "react";

function useAddNode() {
    const {screenToFlowPosition, setNodes} = useReactFlow();

    const handleDragStart = useCallback((event: React.DragEvent<HTMLLIElement>, nodeType: string, customData = {}) => {
        event.dataTransfer.setData(
            'application/reactflow',
            JSON.stringify({
                customData,
                nodeType,
            }),
        );

    }, [])

    const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    }, []);

    const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const {customData} = JSON.parse(
            event.dataTransfer.getData('application/reactflow'),
        );
        const params = {
            customData,
            position: screenToFlowPosition({
                x: event.clientX,
                y: event.clientY,
            }),
        };


            const newNode = {
                id: crypto.randomUUID(),
                type: 'custom',
                data: {nodeMeta: params.customData, _selected: false},
                position: params.position,
            };
        setNodes((nodes) => [...nodes, newNode]);

    }, [setNodes])


    return {handleDragStart, handleDragOver, handleDrop}
}

export default useAddNode
