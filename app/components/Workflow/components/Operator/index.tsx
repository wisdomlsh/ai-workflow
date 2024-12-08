import React from 'react';
import {MiniMap} from "@xyflow/react";
import {ZoomInOut, Control} from "../";


function Operator() {

    return (
        <>
            <MiniMap
                style={{
                    width: 102,
                    height: 72,
                }}
                className='!bg-[var(--semi-color-bg-0)] !absolute !left-4 !bottom-14 z-[9] !m-0 !w-[102px] !h-[72px] !border-[0.5px] !border-black/[0.08] !rounded-lg !shadow-lg'
            />
            <div className='absolute left-4 bottom-4 right-auto flex gap-2 z-10 mt-1'>
                <ZoomInOut />
                <Control />
            </div>
        </>

    );
}

export default Operator;
