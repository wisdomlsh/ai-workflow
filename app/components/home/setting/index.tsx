import React, {useCallback} from 'react';
import {Tabs, TabPane, Space, Divider, Select} from "@douyinfe/semi-ui";
import {Theme} from "@/app/utils/typing";

import {themeoptions} from "@/app/utils/constants";
import {useConfigStore} from "@/app/store";

function SettingModal() {

    const config = useConfigStore()

    const handleThemeChange = useCallback((value: Theme) => {
        config.update((config) => config.theme = value)
    }, [])

    const renderCommonContent = useCallback(() => {
        return <Space vertical className='w-full px-4'>
            <div className='w-full flex justify-between items-center'>
                <span>主题</span>
                <Select defaultValue={config.theme} optionList={themeoptions} onChange={handleThemeChange}/>
            </div>
            <Divider margin='12px'/>
        </Space>
    }, [])

    return (
        <>
            <Tabs tabPosition="left" type='line' className='pt-2'>
                <TabPane tab="账号" itemKey="0">
                    账号
                </TabPane>
                <TabPane tab="通用设置" itemKey="1">
                    {renderCommonContent()}
                </TabPane>
                <TabPane tab="快速起步" itemKey="2">
                    快速起步
                </TabPane>
                <TabPane tab="帮助" itemKey="3">
                    帮助
                </TabPane>
            </Tabs>


        </>
    );
}

export default SettingModal;
