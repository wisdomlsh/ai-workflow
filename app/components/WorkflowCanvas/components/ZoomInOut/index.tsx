import React from 'react';
import {useViewport, useReactFlow} from "@xyflow/react";
import {IconPlusCircleStroked, IconMinusCircleStroked} from "@douyinfe/semi-icons";
import {Button} from "@douyinfe/semi-ui";
import {TipPopup} from "@/app/components/base";


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
        <div className='flex items-center justify-evenly w-[102px] bg-white rounded-lg shadow-lg h-9 p-0.5'>
            <TipPopup title='缩小'>
                <Button theme='borderless' onClick={handleMinClick} className='!p-1 !rounded-lg !w-[28px] !h-[28px]'
                        icon={<IconMinusCircleStroked className='text-[14px] text-gray-500'/>}/>
            </TipPopup>

            {<span className='w-[34px]'>{parseFloat(`${zoom * 100}`).toFixed(0)}%</span>}

            <TipPopup title='放大'>
                <Button theme='borderless' onClick={handlePlusClick} className='!p-1 !rounded-lg !w-[28px] !h-[28px]'
                        icon={<IconPlusCircleStroked className='text-[14px] text-gray-500'/>}/>
            </TipPopup>
        </div>
    );
}

export default ZoomInOut;
