// assets
import { IconBrandChrome, IconHelp, IconSitemap } from '@tabler/icons';

// constant
const icons = {
  IconBrandChrome,
  IconHelp,
  IconSitemap,
};

// ===========================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||=========================== //

const other = {
  id: 'sample-docs-roadmap',
  type: 'group',
  children: [
    {
      id: 'documentation',
      title: 'Documentation',
      type: 'item',
      url: 'https://codedthemes.gitbook.io/berry/',
      icon: icons.IconHelp,
      external: true,
      target: true,
    },
  ],
};

export default other;
