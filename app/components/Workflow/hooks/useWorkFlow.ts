import {useEdgesState, useNodesState} from "@xyflow/react";
import {End, Start} from "../../../work_flow/assets";


export default function useWorkFlow() {
    const initialNodes = [
        {
            id: "100001",
            type: 'custom',
            position: {
                x: 400,
                y: 0
            },
            data: {
                _selected: false,
                nodeMeta: {
                    description: "工作流的起始节点，用于设定启动工作流需要的信息",
                    icon: Start,
                    subTitle: "",
                    title: "开始",
                    nodeType: 'start'
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
                x: 800,
                y: 0
            },
            data: {
                _selected: false,
                nodeMeta: {
                    description: "工作流的最终节点，用于返回工作流运行后的结果信息",
                    icon: End,
                    subTitle: "",
                    title: "结束",
                    nodeType: 'end',
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
        },
    ];



    const [nodes, setNodes] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);


    return {nodes,edges, setNodes, setEdges,onEdgesChange }
}
