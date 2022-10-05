// assets
import { IconBrandChrome, IconHelp,IconClipboardCheck,IconHeadset ,IconChartBar,IconUserCircle,IconBuildingWarehouse} from '@tabler/icons';

// constant
const icons = { IconBrandChrome, IconHelp,IconClipboardCheck ,IconHeadset,IconChartBar,IconUserCircle,IconBuildingWarehouse};

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
    id: 'sample-docs-roadmap',
    type: 'group',
    children: [
        {
            id: 'availablity',
            title: 'Availability',
            type: 'item',
            url: '/Availability',
            icon: icons.IconClipboardCheck,
            breadcrumbs: false
        },
        {
            id: 'services',
            title: 'Services',
            type: 'item',
            url: '/Services',
            icon: icons.IconClipboardCheck,
            breadcrumbs: false
        },
        {
            id: 'lab-work',
            title: 'Lab Work',
            type: 'item',
            url: '/labwork',
            icon: icons.IconClipboardCheck,
            breadcrumbs: false
        },
        {
            id: 'Communication',
            title: 'Communication',
            type: 'item',
            url: '/Communication',
            icon: icons.IconHeadset,
            breadcrumbs: false
        },
        {
            id: 'report',
            title: 'Report',
            type: 'item',
            url: '/report',
            icon: icons.IconChartBar,
            breadcrumbs: false
        },
        {
            id: 'administrator',
            title: 'Administrator',
            type: 'item',
            url: '/administrator',
            icon: icons.IconUserCircle,
            breadcrumbs: false
        },
        {
            id: 'inventory',
            title: 'Inventory',
            type: 'item',
            url: '/inventory',
            icon: icons.IconBuildingWarehouse,
            breadcrumbs: false
        },
        {
            id: 'help',
            title: 'Help',
            type: 'item',
            url: '/help',
            icon: icons.IconHelp,
            breadcrumbs: false
        },
        
    ]
};

export default other;
