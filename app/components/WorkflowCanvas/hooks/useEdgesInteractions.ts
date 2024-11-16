import { useCallback } from 'react'
import produce from 'immer'
import {EdgeMouseHandler, MarkerType} from '@xyflow/react'
import {useStoreApi} from '@xyflow/react'



export default function useEdgesInteractions  ()  {
    const store = useStoreApi()

    const handleEdgeEnter = useCallback<EdgeMouseHandler>((_, edge) => {
        const {edges, setEdges} = store.getState()
        const newEdges = produce(edges, (draft) => {
            const currentEdge = draft.find(e => e.id === edge.id)!
            currentEdge.data!._hovering = true
            currentEdge.markerEnd = { type: MarkerType.ArrowClosed, color: '#37d0ff' }
        })
        setEdges(newEdges)
    }, [store])

    const handleEdgeLeave = useCallback<EdgeMouseHandler>((_, edge) => {
        const {
            edges,
            setEdges,
        } = store.getState()
        const newEdges = produce(edges, (draft) => {
            const currentEdge = draft.find(e => e.id === edge.id)!

            currentEdge.data!._hovering = false
            if(!currentEdge.data?._selected) {
                currentEdge.markerEnd = { type: MarkerType.ArrowClosed, color: '#4d53e8' }
            }
        })
        setEdges(newEdges)
    }, [store])

    const handleEdgeClick  =useCallback<EdgeMouseHandler>((_, edge) => {
        const {
            edges,
            setEdges,
        } = store.getState()
        const newEdges = produce(edges, (draft) => {
            const currentEdge = draft.find(e => e.id === edge.id)!

            currentEdge.data!._selected = true
            currentEdge.markerEnd = { type: MarkerType.ArrowClosed, color: '#37d0ff' }
        })
        setEdges(newEdges)
    }, [store])

    // 点击画布空白区域时触发
    const handlePaneClick = useCallback(() => {
        const {
            edges,
            setEdges,
        } = store.getState()

        const newEdges = produce(edges, (draft) => {
            draft.forEach((e) => {
                if (e.data) {
                    e.data._hover = false;
                    e.data._selected = false;
                    e.markerEnd = { type: MarkerType.ArrowClosed, color: '#4d53e8' }
                }
            });

        })
        setEdges(newEdges)

    }, []);


    return {
        handleEdgeEnter,
        handleEdgeLeave,
        handleEdgeClick,
        handlePaneClick
    }
}
