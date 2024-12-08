import React, {useCallback} from 'react';
import {Button, Popover} from "@douyinfe/semi-ui";

import RunIcon from "@/app/work_flow/assets/icons/run.svg";
import SettingIcon from "@/app/work_flow/assets/icons/setting.svg";


function Panel() {


    const renderPopoverContent = useCallback(() => {
        return <div className='flex flex-col bg-[rgb(46,50,56,.05)]'>
            <Button className='!rounded-none' type='tertiary'>重命名</Button>
            <Button className='!rounded-none' type='tertiary'>创建副本</Button>
            <Button className='!rounded-none' type='tertiary'>删除</Button>
        </div>
    }, [])


    return (
        <div className='absolute bottom-2 right-2 bg-white m-2 rounded-lg'
             style={{width: 520, height: 'calc(100% - 16px)'}}>
            <div className='px-4 pb-4 h-full flex-none overflow-auto'>
                <header className='pt-4 flex items-center justify-between'>
                    <div className='flex  items-center'>
                        <img style={{width: 24, height: 24, marginRight: 8}}
                             src="https://lf3-static.bytednsdoc.com/obj/eden-cn/dvsmryvd_avi_dvsm/ljhwZthlaukjlkulzlp/icon/LTM-icon.png"
                             alt="logo"/>
                        <span>开始</span>
                    </div>
                    <div>
                        <Button theme='borderless' type='tertiary' className='!rounded-lg'
                                icon={<RunIcon/>} aria-label="运行"/>
                        <Popover
                            showArrow={false}
                            content={renderPopoverContent()}
                            position='bottomLeft'
                        >
                            <Button theme='borderless' type='tertiary' className='!rounded-lg'
                                    icon={<SettingIcon/>} aria-label="menu"/>
                        </Popover>

                    </div>
                </header>
            </div>
        </div>
    );
}

export default Panel;
