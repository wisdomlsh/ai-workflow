import React, {memo} from 'react';
import {Handle, Position} from '@xyflow/react';
import Image from "next/image";


interface IProps {
    data: any
}

function CustomNode({data}: IProps) {
    const {nodeMeta} = data
    console.log(data)
    return (
        <div className="w-[360px] border border-gray-900/10 shadow-custom rounded-[8px] bg-white">
                <div className="w-full py-2 px-3 flex gap-2">
                    <Image src={nodeMeta.icon} alt="icon" width={24} height={24} />
                    <span>{nodeMeta.title}</span>
                </div>
                <div className="ml-2">
                    <div className="text-lg font-bold">{data.name}</div>
                    <div className="text-gray-500">{data.job}</div>
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

export default memo(CustomNode);
