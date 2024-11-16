import {useEdgesState, useNodesState, MarkerType} from "@xyflow/react";
import {End, Start} from "@/app/work_flow/assets";


export default function useWorkFlow() {
    const initialNodes = [
        {
            id: "100001",
            type: 'custom',
            position: {
                x: 200,
                y: 200
            },
            data: {
                nodeMeta: {
                    description: "工作流的起始节点，用于设定启动工作流需要的信息",
                    icon: Start,
                    subTitle: "",
                    title: "开始"
                },
                outputs: [
                    {
                        type: "string",
                        name: "BOT_USER_INPUT",
                        required: false,
                        description: "用户本轮对话输入内容"
                    },
                    {
                        type: "string",
                        name: "",
                        required: true
                    }
                ]
            }
        },
        {
            id: "900001",
            type: 'custom',
            position: {
                x: 1000,
                y: 0
            },
            data: {
                nodeMeta: {
                    description: "工作流的最终节点，用于返回工作流运行后的结果信息",
                    icon: End,
                    subTitle: "",
                    title: "结束"
                },
                inputs: {
                    terminatePlan: "returnVariables",
                    inputParameters: [
                        {
                            name: "output",
                            input: {
                                type: "string",
                                value: {
                                    type: "ref",
                                    content: {
                                        source: "block-output",
                                        blockID: "",
                                        name: ""
                                    }
                                }
                            }
                        }
                    ]
                }
            }
        }
    ];


    const initialEdges = [
        {
            id: '1',
            source: '100001',
            target: '900001',
            type: 'custom',
            data: {_hovering: false, _selected: false},
            markerEnd: { type: MarkerType.ArrowClosed, color: '#4d53e8' },
        },
    ]

    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    return {nodes, edges, setNodes, setEdges}
}
