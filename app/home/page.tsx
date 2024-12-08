'use client'
import React from 'react';
import {Layout, Button, Input, Table, Typography} from "@douyinfe/semi-ui";
import {IconSearch, IconMore} from "@douyinfe/semi-icons";
import {useRouter} from 'next/navigation'
import {Path} from "@/app/utils/constants";

import PlusIcon from "./assets/plus.svg";

import styles from "./index.module.scss";

const {Header, Content} = Layout;
const {Text} = Typography;

function Page() {
    const router = useRouter()

    const columns = [
        {
            title: '资源',
            dataIndex: 'name',
            render: (text: string) => {
                return (
                    <Text link onClick={() => router.push(Path.WorkFlow)}>
                        {text}
                    </Text>
                );
            },

        },
        {
            title: '类型',
            dataIndex: 'type',
        },
        {
            title: '编辑时间',
            dataIndex: 'time',

        },

        {
            title: '',
            dataIndex: 'operate',
            render: () => {
                return <IconMore/>;
            },
        },
    ];
    const data = [
        {
            key: '1',
            name: 'Semi Design 设计稿.fig',
            type: 'workflow',
            time: '2020-02-02 05:13',
            avatarBg: 'grey',
        },


    ];

    return (
        <Layout>
            <Header className='p-6 pb-4'>
                <div className='w-full'>
                    <div className='w-full flex items-center justify-between mb-4'>
                        <span className='font-[500] text-[20px]  text-[var(--semi-color-text-0)]'>资源库</span>
                        <Button icon={<PlusIcon/>} theme='solid' type='primary'>资源</Button>
                    </div>
                    <div className='w-full flex justify-end'>
                        <Input className='!w-52' prefix={<IconSearch/>} placeholder='搜索资源' showClear></Input>
                    </div>
                </div>
            </Header>
            <Content className='p-6 pt-0'>
                <Table className={styles['library-table']} columns={columns} dataSource={data}/>
            </Content>

        </Layout>
    );
}

export default Page;
