import React, {cloneElement, memo} from 'react';
import {Handle, Position} from '@xyflow/react';
import Image from "next/image";
import {NodeData} from "@/app/utils/typing";

interface IProps {
    data: NodeData;
    children: React.ReactElement;
}

function BaseNode(props: IProps) {
    const { data, children} = props
    const {nodeMeta, _selected} = data

    console.log(_selected, nodeMeta.nodeType)
    return (
        <div className={`w-[360px] border-2 border-gray-900/10 shadow-custom rounded-[8px] bg-white ${_selected ? 'border-[#4d53e8]' : ''}`}>
            <div className="w-full py-2 px-3 flex gap-2">
                <Image src={nodeMeta.icon as string} alt="icon" width={24} height={24}/>
                <span>{nodeMeta.title}</span>
            </div>
            <div className="pb-2 px-3">
                {cloneElement(children, {data})}
            </div>

            <Handle
                type="target"
                isConnectableStart={false}
                position={Position.Left}
            />
            <Handle
                type="source"
                isConnectableEnd={false}
                position={Position.Right}
            />
        </div>
    );
}

export default memo(BaseNode);
