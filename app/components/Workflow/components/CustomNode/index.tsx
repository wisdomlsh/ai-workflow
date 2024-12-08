import React, {useMemo} from 'react';
import {BaseNode} from "../";
import {NodeComponentMap} from '@/app/utils/constants';
import {NodeData} from "@/app/utils/typing";

interface IProps {
    data: NodeData
}

function CustomNode(props: IProps) {
    const {data} = props
    const NodeComponent = NodeComponentMap[data.nodeMeta.nodeType]
    return useMemo(() => {
        return (
            <BaseNode data={data}><NodeComponent/></BaseNode>
        );
    }, [NodeComponent, data])
}

export default CustomNode;
