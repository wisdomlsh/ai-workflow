'use client'
import React, {useCallback, useState} from "react";
import type {ReactNode} from "react";
import {Button, Space, Popover, Modal, Layout as SemiLayoyt} from "@douyinfe/semi-ui";
import {useRouter} from 'next/navigation'
import Image, {type StaticImageData} from "next/image";
import {Setting} from "@/app/components";

import LoginIcon from "./assets/logo.svg";
import HouseIcon from "./assets/house.svg";
import KnowledgeIcon from "./assets/knowledge.svg";
import user from "./assets/user.jpg";

const items = [
    {itemKey: 'setting', text: '设置', icon: false},
    {itemKey: 'relation', text: '联系我们', icon: false},
    {itemKey: 'logout', text: '退出登陆', icon: false}
]

const {Sider} = SemiLayoyt;


const Layout = ({children}: { children: ReactNode }) => {

    const router = useRouter()
    const [visible, setVisible] = useState(false);

    const handleKnowledgeClick = () => {
        router.push('/home/library')
    }

    const handlePopoverClick = useCallback(() => {
        setVisible(true)
    }, [])

    const handleInfoClick = useCallback((key: string) => {
        if (key !== 'setting') return
        setVisible(false)
        Modal.info({
            width: 1000,
            height: 600,
            icon: false,
            centered: true,
            title: '设置',
            content: <Setting/>,
            cancelButtonProps: {theme: 'borderless'},
            okButtonProps: {theme: 'solid'},
        });
    }, [])

    const renderUserContent = useCallback(() => {
        return <div className='flex flex-col w-[180px] p-2'>
            {items.map((v) => {
                return <Button className='justify-start font-normal' key={v.itemKey} type='tertiary' theme='borderless'
                               onClick={() => handleInfoClick(v.itemKey)}>{v.text}</Button>
            })}
        </div>
    }, [])

    return (
        <>
            <div className='flex flex-row items-stretch w-full h-full '>
                <Sider className='pl-2 py-2 h-full w-64 bg-[var(--semi-color-nav-bg)]'>
                    <div
                        className='relative h-full border-[1px] border-solid  border-[var(--semi-color-border)] rounded-[14px]  flex flex-row items-stretch'>
                        <div
                            className='px-[6px] py-[16px] flex flex-col justify-between h-full items-center border-0 border-r-[1px] border-solid border-[var(--semi-color-border)]  '>
                            <div className='flex flex-col items-center'>
                                <LoginIcon className="mb-[16px]"/>
                                <div
                                    className='w-[60px] h-[48px] font-[500] flex flex-col justify-center items-center cursor-pointer rounded-[6px] transition-all text-[var(--semi-color-text-0)] hover:bg-[var(--semi-color-fill-0)]'>
                                    <HouseIcon className='text-[20px] leading-none'/>
                                    <div
                                        className='mt-[2px] h-[14px] font-[500] flex items-center justify-center leading-none overflow-hidden w-full'>
                                        <span className='text-[20px] scale-50 whitespace-nowrap'>工作空间</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Popover
                                    visible={visible}
                                    trigger="custom"
                                    position='right'
                                    autoAdjustOverflow
                                    content={renderUserContent()}
                                >
                                    <Button theme='borderless'
                                            className='h-[48px]  leading-none overflow-hidden w-full rounded-lg'
                                            onClick={handlePopoverClick}>
                                        <Image src={user as StaticImageData} width={32} height={32} alt='user-icon'
                                               className='rounded-lg'/>
                                    </Button>
                                </Popover>
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
                                    <Button onClick={handleKnowledgeClick} icon={<KnowledgeIcon/>}
                                            className='rounded-[8px] w-full'
                                            theme='light'
                                            type='tertiary'>资源库</Button>
                                </Space>
                            </Space>
                        </div>
                    </div>
                </Sider>
                {children}
            </div>

        </>
    );
};


export default Layout;
