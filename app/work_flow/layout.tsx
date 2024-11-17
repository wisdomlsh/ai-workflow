'use client'
import React from "react";
import type {ReactNode} from "react";
import {Layout as SemiLayoyt, Button} from '@douyinfe/semi-ui';
import Image from "next/image";

import {IconChevronLeft, IconPlus} from "@douyinfe/semi-icons";
import avatar from "./assets/avatar.png";
import {LLM, Knowledge, Condition, Intent, Api} from "./assets";
import {useAddNode} from "@/app/work_flow/hooks";
import {ReactFlowProvider} from "@xyflow/react";
import {BlockEnum} from "@/app/utils/typing";


const {Header, Sider, Content} = SemiLayoyt;

const list = [
    {
        title: 'LLM',
        subTitle: 'LLM',
        nodeType: 'llm',
        description: '文本类AI大模型，根据要求来命令AI为你服务',
        icon: LLM,
    },
    {
        title: '知识库',
        subTitle: '知识库',
        nodeType: 'Knowledge',
        description: '向知识库查询',
        icon: Knowledge,
    },
    {
        title: '选择器',
        subTitle: '选择器',
        nodeType: 'Conditions',
        description: '设计条件逻辑分支，根据设定条件走向不同的路径',
        icon: Condition,
    },
    {
        title: '意图识别',
        subTitle: '意图识别',
        nodeType: 'Intention',
        description: '对用户问题进行意图识别和分类',
        icon: Intent
    },
    {
        title: 'API',
        subTitle: 'API',
        nodeType: 'API',
        description: '支持外部API调用',
        icon: Api
    },
];

function Layout({children}: { children: ReactNode }) {

    const {handleDragStart} = useAddNode()

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
                                       key={v.nodeType}
                                       onDragStart={(e) => {
                                           handleDragStart(e, v.nodeType, v);
                                       }}
                            >
                                <div className='flex gap-2 items-center'>
                                    <Image src={v.icon} alt="avatar" width={28} height={28}/>
                                    <span className='font-semibold text-base'>{v.title}</span>
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

const WorkFlowLayOut = ({children}: { children: ReactNode }) => {
    return <ReactFlowProvider>
        <Layout>{children}</Layout>
    </ReactFlowProvider>
}

export default WorkFlowLayOut

