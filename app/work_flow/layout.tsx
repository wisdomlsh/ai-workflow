'use client'
import React, {useCallback, useState} from "react";
import type {ReactNode} from "react";
import {Layout as SemiLayoyt, Button, Tag} from '@douyinfe/semi-ui';
import Image from "next/image";
import {useRouter} from "next/navigation";
import {Path} from "@/app/utils/constants";
import {IconChevronLeft, IconChevronRight, IconPlus} from "@douyinfe/semi-icons";
import {useAddNode} from "@/app/work_flow/hooks";
import {ReactFlowProvider} from "@xyflow/react";

import avatar from "./assets/avatar.png";
import {LLM, Knowledge, Condition, Intent, Api} from "./assets";


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
        nodeType: 'knowledge',
        description: '向知识库查询',
        icon: Knowledge,
    },
    {
        title: '选择器',
        subTitle: '选择器',
        nodeType: 'conditions',
        description: '设计条件逻辑分支，根据设定条件走向不同的路径',
        icon: Condition,
    },
    {
        title: '意图识别',
        subTitle: '意图识别',
        nodeType: 'intention',
        description: '对用户问题进行意图识别和分类',
        icon: Intent
    },
    {
        title: 'API',
        subTitle: 'API',
        nodeType: 'api',
        description: '支持外部API调用',
        icon: Api
    },
];


function Layout({children}: { children: ReactNode }) {

    const router = useRouter()
    const {handleDragStart} = useAddNode()

    const [isShowSider, setIsShowSider] = useState<boolean>(true)


    const handleBackClick = useCallback(() => {
        router.push(Path.Home)
    }, [])

    const handleShowClick = useCallback(() => {
        setIsShowSider((pre) => !pre)
    }, [])

    return <SemiLayoyt className="h-full ">
        <Header
            className='py-4 px-6  border-b border-[var(--semi-color-border)] bg-[var(--semi-color-fill-0)]  border-solid flex items-center justify-between'>
            <div className='flex items-center'>
                <Button theme='borderless' className='!rounded-lg mr-5'
                        icon={<IconChevronLeft/>} onClick={handleBackClick}/>
                <div className='flex items-center'>
                    <Image src={avatar} alt="avatar" width={32} height={32}/>
                    <div className='ml-3'>
                        <div>
                            <span>李硕</span>
                        </div>
                        <Tag className='text-xs px-[6px] rounded-[4px] space-x-1' size="small">已自动保存 11-13
                            17:35:08 </Tag>
                    </div>
                </div>
            </div>
            <div className='flex gap-3'>
                <Button theme='outline' type='tertiary' className='!rounded-lg'>显示上次运行结果</Button>
                <Button theme='outline' type='primary' className='!rounded-lg'>试运行</Button>
                <Button type='primary' theme='solid' className='!rounded-lg'>发布</Button>
            </div>
        </Header>

        <SemiLayoyt className='relative'>
            <Button theme='solid'  className={`transition-all !rounded-r-[12px] absolute top-6 z-[1] hover:w-11 hover:!bg-[var(--semi-color-primary)] ${isShowSider ? '!hidden' : '!block'}`}
                    icon={<IconChevronRight/>} onClick={handleShowClick}/>
            <Sider
                className={`transition-all overflow-hidden py-4 border-r border-[var(--semi-color-border)] border-solid bg-[var(--semi-color-nav-bg)] ${isShowSider ? 'w-64' : 'w-0'}`}>
                <h5 className='p-[16px] pt-0 text-[18px] font-[600] flex justify-between whitespace-nowrap'>
                    <span>选择节点</span>
                    <Button theme='borderless' className='!rounded-lg'
                            icon={<IconChevronLeft/>} onClick={handleShowClick}/>
                </h5>
                <ul className='w-full flex flex-col gap-2'>
                    {
                        list.map((v) => {
                            return <li draggable
                                       className='flex items-center border border-solid border-[var(--semi-color-border)]  justify-between  w-56 mx-auto px-4 py-3 bg-[var(--semi-color-bg-1)] rounded-[8px] cursor-grab hover:shadow-lg active:cursor-grabbing  transition-shadow duration-300'
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

            <Content className='h-full relative'>{children}</Content>
        </SemiLayoyt>
    </SemiLayoyt>
}

const WorkFlowLayOut = ({children}: { children: ReactNode }) => {
    return <ReactFlowProvider>
        <Layout>{children}</Layout>
    </ReactFlowProvider>
}

export default WorkFlowLayOut

