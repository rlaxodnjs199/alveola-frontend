// assets
import { IconKey, IconReceipt2, IconBug, IconBellRinging, IconPhoneCall } from '@tabler/icons';

// constant
const icons = {
    IconKey,
    IconReceipt2,
    IconBug,
    IconBellRinging,
    IconPhoneCall
};

// ===========================|| EXTRA PAGES MENU ITEMS ||=========================== //

const ctscan = {
    id: 'ctscan',
    title: 'CT Scans',
    type: 'group',
    children: [
        {
            id: 'raw',
            title: 'Raw',
            type: 'collapse',
            icon: icons.IconKey,
            children: [
            ]
        },
        {
            id: 'deidentified',
            title: 'De-identified',
            type: 'collapse',
            icon: icons.IconKey,
            children: [
            ]
        },
        {
            id: 'vidaprocessed',
            title: 'VIDA Processed',
            type: 'collapse',
            icon: icons.IconKey,
            children: [
                {
                    id: 'login3',
                    title: 'Login',
                    type: 'item',
                    url: '/pages/login/login3',
                    target: true
                },
                {
                    id: 'register3',
                    title: 'Register',
                    type: 'item',
                    url: '/pages/register/register3',
                    target: true
                }
            ]
        }
    ]
};

export default ctscan;
