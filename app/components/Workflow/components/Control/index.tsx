import React from 'react';
import {Button, Tooltip} from "@douyinfe/semi-ui";
import {IconHelpCircleStroked, IconPlusCircleStroked} from "@douyinfe/semi-icons";

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
            icon: <CursorIcon/>,

        },
        {
            id: 4,
            description: '手模式',
            icon: <HandIcon/>,

        },
        {
            id: 5,
            description: '自适应视图',
            icon: <ViewIcon/>,

        },
        {
            id: 6,
            description: '整理布局',
            icon: <LayoutIcon/>,

        },
    ]
    return (
        <div className='flex items-center'>
            <div className='bg-[var(--semi-color-bg-1)] mr-4  rounded-lg h-9 p-0.5 shadow-lg'>
                <ul className='flex'>
                    {
                        operatorList.map(((v) => {
                            return <li key={v.id}>
                                <Tooltip content={v.description} showArrow={false}>
                                    <Button theme='borderless' type='tertiary'
                                            className='!p-1 !rounded-lg !w-[28px] !h-[28px]'
                                            icon={v.icon}/>
                                </Tooltip>

                            </li>
                        }))
                    }
                </ul>

            </div>
            <div className='leading-none'>
                <Tooltip content='快捷键' showArrow={false}>
                    <Button theme='borderless' type='tertiary' className='!p-1 !rounded-lg !w-[28px] !h-[28px]'
                            icon={<IconHelpCircleStroked className='text-[14px]'/>}/>
                </Tooltip>
            </div>
        </div>
    );
}

export default Control;
