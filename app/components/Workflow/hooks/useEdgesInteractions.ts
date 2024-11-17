import {useCallback} from 'react'
import produce from 'immer'
import {
    addEdge,
    Connection,
    EdgeMouseHandler,
    OnEdgesChange,
    MarkerType,
    reconnectEdge,
    useStoreApi,
    Edge
} from '@xyflow/react'

export default function useEdgesInteractions() {
    const store = useStoreApi()
    const {setEdges, nodes} = store.getState()

    const handleEdgeEnter = useCallback<EdgeMouseHandler>((_, edge) => {
        const {edges, setEdges} = store.getState()
        const newEdges = produce(edges, (draft) => {
            const currentEdge = draft.find(e => e.id === edge.id)!
            currentEdge.data!._hovering = true
            currentEdge.markerEnd = {type: MarkerType.ArrowClosed, color: '#37d0ff'}
        })
        setEdges(newEdges)
    }, [store])

    const handleEdgeLeave = useCallback<EdgeMouseHandler>((_, edge) => {
        const {edges, setEdges} = store.getState()
        const newEdges = produce(edges, (draft) => {
            const currentEdge = draft.find(e => e.id === edge.id)!

            currentEdge.data!._hovering = false
            if (!currentEdge.data?._selected) {
                currentEdge.markerEnd = {type: MarkerType.ArrowClosed, color: '#4d53e8'}
            }
        })
        setEdges(newEdges)
    }, [store])

    const handleEdgeChange = useCallback<OnEdgesChange>((change) => {
        const {edges, setEdges} = store.getState()
        const newEdges = produce(edges, (draft) => {
            change.forEach((change) => {
                if (change.type === 'select') {
                    const currentEdge = draft.find(e => e.id === change.id)!
                    currentEdge.data!._selected = change.selected
                    currentEdge.markerEnd = {type: MarkerType.ArrowClosed, color: '#37d0ff'}
                }

            })
        })
        setEdges(newEdges)
    }, [store])

    const handlePaneClick = useCallback(() => {
        const {edges, setEdges, nodes, setNodes} = store.getState()
        const newEdges = produce(edges, (draft) => {
            draft.forEach((e) => {
                if (e.data) {
                    e.data._hovering = false;
                    e.data._selected = false;
                    e.markerEnd = {type: MarkerType.ArrowClosed, color: '#4d53e8'}
                }
            });

        })

        const newNodes = produce(nodes, (draft) => {
            draft.forEach((e) => {
                if (e.data) {
                    e.data._selected = false;

                }
            });

        })
        setNodes(newNodes)
        setEdges(newEdges)

    }, []);

    const onReconnect = useCallback(
        (oldEdge: Edge, newConnection: Connection) => {

            const {edges, setEdges} = store.getState()
            setEdges(reconnectEdge(oldEdge, newConnection, edges));
        },
        [],
    );

    const onConnect = useCallback(
        (params: Connection) => {
            const {edges, setEdges} = store.getState()
            const payload = {
                ...params,
                type: 'custom',
                data: {_hovering: false, _selected: false},
                markerEnd: {type: MarkerType.ArrowClosed, color: '#4d53e8'},
            }
            setEdges(addEdge(payload, edges))
        },
        [setEdges],
    );

    return {
        handleEdgeEnter,
        handleEdgeLeave,
        handleEdgeChange,
        handlePaneClick,
        onReconnect,
        onConnect
    }
}
