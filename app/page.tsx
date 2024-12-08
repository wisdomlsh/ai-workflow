'use client';
import {useCallback} from "react";
import {Select, Button} from '@douyinfe/semi-ui';
import {getGithubLogin} from "@/app/api";
import {usePathname} from "next/navigation";


import {IconGithubLogo} from '@douyinfe/semi-icons';
import LogoIcon from "@/app/assets/logo.svg";
import GoogleIcon from "@/app/assets/google.svg";

export default function Page() {
    const pathname = usePathname();

    const fetchPostGithubLogin = useCallback(async () => {
        const {data} = await getGithubLogin({path: `http://localhost:3000${pathname}`})
        console.log(data)
        window.location.href = data
    }, [])


    return <div className='flex w-full min-h-screen sm:p-4 lg:p-8 gap-x-20 justify-center lg:justify-start'>
        <div className='flex w-full flex-col bg-[var(--semi-color-bg-2)] shadow rounded-2xl shrink-0 space-between'>
            <header className='flex justify-between w-full p-6'>
                <LogoIcon/>
                <Select
                    defaultValue='简体中文'
                    filter
                ></Select>
            </header>
            <main className='flex-1 px-6 flex flex-col justify-center items-center'>
                <div className='w-[400px]'>
                    <div>
                        <div className='font-semibold text-[24px]'>嗨，你好</div>
                        <div className='mt-2 text-[#676f83] text-[14px]'>👋 欢迎来到NEUR，登陆以继续</div>
                    </div>
                    <div className='flex flex-col gap-3 mt-6'>
                        <Button className='!rounded-lg' icon={<IconGithubLogo/>} theme='outline' type='tertiary'
                                onClick={fetchPostGithubLogin}>使用github登陆</Button>
                        <Button className='!rounded-lg' icon={<GoogleIcon/>} theme='outline'
                                type='tertiary'>使用google登陆</Button>
                    </div>
                </div>
            </main>
            <footer className='px-8 py-6'>
                © 2024 NEUR, Inc. All rights reserved.
            </footer>
        </div>
    </div>;
}
