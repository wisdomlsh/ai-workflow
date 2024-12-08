import React, {useState} from 'react';
import {Notification} from "@douyinfe/semi-ui";


interface Options {
    onOk?: () => Promise<void> | void;
    okText?: string;
    cancelText?: string;
    destroyOnClose?: boolean;
    centered?: boolean;
}

export default (options: Options) => {
    const [open, setOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [title, setTitle] = useState<string | React.ReactNode>('');

    function openModal(modalTitle?: string) {
        setOpen(true);
        if (modalTitle) setTitle(modalTitle);
    }

    function closeModal() {
        setTitle('');
        setOpen(false);
    }

    async function onOk() {
        if (!options.onOk) return;
        setLoading(true);
        try {
            await options.onOk();
            closeModal();
        } catch (error: any) {
            if (error.data === 'string') {
                Notification.error({
                    content: error.data,
                    duration: 3,
                })
            }
        }
        setLoading(false);
    }

    return {
        modalProps: {
            title,
            open,
            loading,
            onCancel: closeModal,
            onOk,
            maskClosable: false,
            okText: options.okText,
            cancelText: options.cancelText,
            destroyOnClose: options.destroyOnClose,
            centered: options.centered,
        },
        openModal,
        closeModal,
    };
};
