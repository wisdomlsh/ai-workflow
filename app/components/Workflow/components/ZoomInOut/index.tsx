import React from 'react';
import {useViewport, useReactFlow} from "@xyflow/react";
import {IconPlusCircleStroked, IconMinusCircleStroked} from "@douyinfe/semi-icons";
import {Button, Tooltip} from "@douyinfe/semi-ui";


function ZoomInOut() {
    const {zoom} = useViewport();
    const { zoomIn, zoomOut } = useReactFlow();

    const handleMinClick = () => {
        zoomOut({ duration: 300 })
    }

    const handlePlusClick = () => {
        zoomIn({ duration: 300 });
    }

    return (
        <div className='flex items-center bg-[var(--semi-color-bg-1)] justify-evenly w-[102px]  rounded-lg shadow-lg h-9 p-0.5'>
            <Tooltip content='缩小' showArrow={false}>
                <Button theme='borderless' onClick={handleMinClick} type='tertiary' className='!p-1 !rounded-lg !w-[28px] !h-[28px]'
                        icon={<IconMinusCircleStroked className='text-[14px]'/>}/>
            </Tooltip>

            {<span className='w-[34px]'>{parseFloat(`${zoom * 100}`).toFixed(0)}%</span>}

            <Tooltip content='放大' showArrow={false}>
                <Button theme='borderless' onClick={handlePlusClick} type='tertiary' className='!p-1 !rounded-lg !w-[28px] !h-[28px]'
                        icon={<IconPlusCircleStroked className='text-[14px]'/>}/>
            </Tooltip>
        </div>
    );
}

export default ZoomInOut;
