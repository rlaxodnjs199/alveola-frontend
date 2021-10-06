// assets
import {
  IconKey,
  IconReceipt2,
  IconBug,
  IconBellRinging,
  IconPhoneCall,
  IconCircle0,
  IconCircle1,
  IconCircle2,
} from '@tabler/icons';

// constant
const icons = {
  IconKey,
  IconReceipt2,
  IconBug,
  IconBellRinging,
  IconPhoneCall,
  IconCircle0,
  IconCircle1,
  IconCircle2,
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
      type: 'item',
      url: '/ct-scan',
      icon: icons.IconCircle0,
      breadcrumbs: false,
    },
    {
      id: 'deidentified',
      title: 'De-identified',
      type: 'item',
      url: '/ct-scan',
      icon: icons.IconCircle1,
      breadcrumbs: false,
    },
    {
      id: 'vidaprocessed',
      title: 'VIDA Processed',
      type: 'collapse',
      icon: icons.IconCircle2,
      children: [
        {
          id: 'login3',
          title: 'Login',
          type: 'item',
          url: '/pages/login/login3',
          target: true,
        },
        {
          id: 'register3',
          title: 'Register',
          type: 'item',
          url: '/pages/register/register3',
          target: true,
        },
      ],
    },
  ],
};

export default ctscan;
