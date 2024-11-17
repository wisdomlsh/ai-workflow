import {useCallback} from "react";
import {applyNodeChanges, MarkerType, NodeChange, NodeMouseHandler, useStoreApi} from "@xyflow/react";
import produce from "immer";

export default function useNodesInteractions() {
    const store = useStoreApi()

    const handleNodeSelect = useCallback((nodeId: string, cancelSelection?: boolean) => {
        const {
            nodes,
            setNodes,
        } = store.getState()

        const selectedNode = nodes.find(node => node.data.selected)

        if (selectedNode?.id === nodeId)
            return

        const newNodes = produce(nodes, (draft) => {
            draft.forEach((node) => {
                if (node.id === nodeId)
                    node.data._selected = true
                else
                    node.data._selected = false
            })
        })
        setNodes(newNodes)
    }, [store])

    const handleNodeClick = useCallback<NodeMouseHandler>((_, node) => {
        handleNodeSelect(node.id)

    }, [])


    const handleNodesChange = useCallback((changes: NodeChange[]) => {
        const {
            nodes,
            setNodes,
        } = store.getState()

        setNodes(applyNodeChanges(changes, nodes));
    }, [store]);





    return {handleNodeClick, handleNodesChange}
}
