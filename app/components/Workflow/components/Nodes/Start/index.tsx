import React from 'react';
import {Tooltip, Button} from "@douyinfe/semi-ui";
import {NodePropsType} from "@/app/utils/typing";


interface IProps {
    data: NodePropsType
}

function StartNode(props: IProps) {
    const {data: {outputs}} = props

    return (<div className='flex gap-4'>
            <div>输入</div>
            {
                outputs.map((v, index) => {
                    return <Tooltip content={v.type} key={index}>
                        <div >
                            <span>{v.type}</span>
                            <span>{v.name}</span>
                        </div>
                    </Tooltip>
                })
            }


        </div>

    );
}

export default StartNode;
