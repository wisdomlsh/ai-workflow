'use client'
import React from "react";
import type {ReactNode} from "react";
import {Button, Space} from "@douyinfe/semi-ui";
import { useRouter } from 'next/navigation'


import LoginIcon from "./assets/logo.svg";
import HouseIcon from "./assets/house.svg";
import KnowledgeIcon from "./assets/knowledge.svg";


const Layout = ({children}: { children: ReactNode }) => {

    const router = useRouter()

    const handleKnowledgeClick = () => {
        router.push('/home/library')
    }

    return (
        <>
            <div className='flex flex-row items-stretch w-full h-full '>
                <div className='pl-2 py-2 h-full w-64'>
                    <div
                        className='relative h-full border-[1px] border-solid  border-[rgba(6,7,9,0.100)] rounded-[14px]  flex flex-row items-stretch bg-white'>
                        <div
                            className='px-[6px] py-[16px] flex flex-col h-full items-center border-0 border-r-[1px] border-solid border-[rgba(6,7,9,0.1)] '>
                            <LoginIcon className="mb-[16px]"/>
                            <div
                                className='w-[60px] h-[48px] font-[500] flex flex-col justify-center items-center cursor-pointer rounded-[6px] transition-all hover:bg-[rgba(6,7,9,0.12)]'>
                                <HouseIcon className='text-[20px] leading-none'/>
                                <div
                                    className='mt-[2px] h-[14px] font-[500] flex items-center justify-center leading-none overflow-hidden w-full'>
                                    <span className='text-[20px] scale-50 whitespace-nowrap'>工作空间</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex-1 flex flex-col items-center px-1.5 py-3'>
                            <Space vertical className='w-full'>
                                <Space className='w-full'>
                                    {/*<Dropdown*/}
                                    {/*    trigger={'click'}*/}
                                    {/*    position={'bottomLeft'}*/}
                                    {/*    render={*/}
                                    {/*        <Dropdown.Menu>*/}
                                    {/*            <Dropdown.Item>Menu Item 1</Dropdown.Item>*/}
                                    {/*            <Dropdown.Item>Menu Item 2</Dropdown.Item>*/}
                                    {/*            <Dropdown.Item>Menu Item 3</Dropdown.Item>*/}
                                    {/*        </Dropdown.Menu>*/}
                                    {/*    }*/}
                                    {/*>*/}
                                    {/*    <Button className='w-full !h-[48px]' theme='borderless'>工作空间</Button>*/}
                                    {/*</Dropdown>*/}
                                </Space>
                                <Space className='w-full'>
                                    <Button  onClick={handleKnowledgeClick} icon={<KnowledgeIcon/>} className='rounded-[8px] w-full' theme='light'
                                            type='tertiary'>资源库</Button>
                                </Space>
                            </Space>
                        </div>
                    </div>
                </div>
                {children}
            </div>

        </>
    );
};


export default Layout;
