'use client'
import React from "react";
import type {ReactNode} from "react";
import {Layout as SemiLayoyt, Button} from '@douyinfe/semi-ui';
import Image from "next/image";

import {IconChevronLeft, IconPlus} from "@douyinfe/semi-icons";
import avatar from "./assets/avatar.png";
import {LLM, Knowledge, Condition, Intent, Api} from "./assets";


const {Header, Sider, Content} = SemiLayoyt;

const list = [
    {
        type: 1,
        nodeName: 'LLM',
        nodeType: 'LLM',
        nodeDesc: '文本类AI大模型，根据要求来命令AI为你服务',
        nodeIcon: LLM,
    },
    {
        type: 2,
        nodeName: '知识库',
        nodeType: 'Knowledge',
        nodeDesc: '向知识库查询',
        nodeIcon: Knowledge,
    },
    {
        type: 3,
        nodeName: '选择器',
        nodeType: 'Conditions',
        nodeDesc: '设计条件逻辑分支，根据设定条件走向不同的路径',
        nodeIcon: Condition,
    },
    {
        type: 4,
        nodeName: '意图识别',
        nodeType: 'Intention',
        nodeDesc: '对用户问题进行意图识别和分类',
        nodeIcon: Intent
    },
    {
        type: 5,
        nodeName: 'API',
        nodeType: 'API',
        nodeDesc: '支持外部API调用',
        nodeIcon: Api
    },
];

export default function Layout({children}: { children: ReactNode }) {


    return <SemiLayoyt className="h-full">

        <Header
            className='py-4 px-6  border-b border-[#1d1c2314] border-solid flex items-center justify-between bg-[#f7f7fa]'>
            <div className='flex items-center'>
                <Button theme='borderless' className='!rounded-lg mr-5'
                        icon={<IconChevronLeft className='text-[#1D1C23]'/>}/>
                <div className='flex items-center'>
                    <Image src={avatar} alt="avatar" width={32} height={32}/>
                    <div className='ml-3'>
                        <div>
                            <span>李硕</span>
                        </div>
                        <span className='text-xs px-[6px] rounded-[4px] bg-[#F0F0F5] text-[#1D1C2399] space-x-1'>已自动保存 11-13 17:35:08</span>
                    </div>
                </div>
            </div>
            <div className='flex gap-3'>
                <Button theme='outline' type='tertiary' className='!rounded-lg'>显示上次运行结果</Button>
                <Button theme='outline' type='primary' className='!rounded-lg'>试运行</Button>
                <Button type='primary' theme='solid' className='!rounded-lg'>发布</Button>
            </div>
        </Header>

        <SemiLayoyt>
            <Sider className='w-64 py-4 border-r border-[#1d1c2314] border-solid bg-[#f7f7fa]'>
                <h5 className='p-[16px] pt-0 text-[18px] font-[600] flex justify-between'>
                    <span>选择节点</span>
                    <Button theme='borderless' className='!rounded-lg'
                            icon={<IconChevronLeft/>}/>
                </h5>
                <ul className='w-full flex flex-col gap-2'>
                    {

                        list.map((v) => {
                            return <li draggable
                                       className='flex items-center  justify-between  w-56 mx-auto px-4 py-3 bg-white rounded-[8px] cursor-grab hover:shadow-lg active:cursor-grabbing  transition-shadow duration-300'
                                       key={v.type}>
                                <div className='flex gap-2 items-center'>
                                    <Image src={v.nodeIcon} alt="avatar" width={28} height={28}/>
                                    <span className='font-semibold text-base'>{v.nodeName}</span>
                                </div>
                                <IconPlus/>
                            </li>
                        })

                    }
                </ul>
            </Sider>

            <Content className='h-full'>{children}</Content>
        </SemiLayoyt>
    </SemiLayoyt>
}

