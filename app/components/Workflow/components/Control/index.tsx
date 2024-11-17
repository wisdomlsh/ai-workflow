import React from 'react';
import {Button} from "@douyinfe/semi-ui";
import {TipPopup} from "@/app/components/base";
import {IconHelpCircleStroked} from "@douyinfe/semi-icons";

import {CursorIcon, HandIcon, LayoutIcon, ViewIcon} from "@/app/assets";

function Control() {

    const operatorList = [
        // {
        //     id: 1,
        //     description: '撤销',
        //     icon: <IconUndo className='text-gray-500'/>,
        //
        // }, {
        //     id: 2,
        //     description: '重做',
        //     icon: <CursorIcon className='text-gray-500'/>,
        //
        // },
        {
            id: 3,
            description: '指针模式',
            icon: <CursorIcon className='text-gray-500'/>,

        },
        {
            id: 4,
            description: '手模式',
            icon: <HandIcon className='text-gray-500'/>,

        },
        {
            id: 5,
            description: '自适应视图',
            icon: <ViewIcon className='text-gray-500'/>,

        },
        {
            id: 6,
            description: '整理布局',
            icon: <LayoutIcon className='text-gray-500'/>,

        },
    ]
    return (
        <div className='flex items-center'>
            <div className='bg-white mr-4  rounded-lg h-9 p-0.5 shadow-lg'>
                <ul className='flex'>
                    {
                        operatorList.map(((v) => {
                            return <li key={v.id}>
                                <TipPopup title={v.description}>
                                    <Button theme='borderless' className='!p-1 !rounded-lg !w-[28px] !h-[28px] text-gray-500'
                                            icon={v.icon}/>
                                </TipPopup>

                            </li>
                        }))
                    }
                </ul>

            </div>
               <div className='leading-none'>
                   <TipPopup title='快捷键' >
                       <IconHelpCircleStroked className='text-gray-500'/>
                   </TipPopup>
               </div>
        </div>
    );
}

export default Control;
