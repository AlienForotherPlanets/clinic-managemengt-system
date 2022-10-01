// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill ,IconUser,IconUsers,IconAddressBook,IconBook} from '@tabler/icons';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill,
    IconUser,
    IconUsers,
    IconAddressBook,
    IconBook
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
    id: 'module',
   
    type: 'group',
    children: [
        {
            id: 'module-patient',
            title: 'Patient',
            type: 'item',
            url: '/module/module-patient',
            icon: icons.IconUser,
            breadcrumbs: false
        },
        {
            id: 'module-scheduleAppointment',
            title: 'Schedule Appointment',
            type: 'item',
            url: '/module/module-scheduleAppointment',
            icon: icons.IconAddressBook,
            breadcrumbs: false
        },
        {
            id: 'module-viewAppointment',
            title: 'View Appointment',
            type: 'item',
            url: '/module/module-viewAppointment',
            icon: icons.IconBook,
            breadcrumbs: false
        },
        {
            id: 'module-appointmentcalender',
            title: 'View Calender',
            type: 'item',
            url: '/module/module-appointmentcalender',
            icon: icons.IconBook,
            breadcrumbs: false
        },
        {
            id: 'account',
            title: 'Accounts',
            type: 'collapse',
            icon: icons.IconUsers,
            children: [
                {
                    id: 'account1',
                    title: 'Account1',
                    type: 'item',
                    url: '/icons/tabler-icons',
                    breadcrumbs: false
                },
                {
                    id: 'account2',
                    title: 'Account2',
                    type: 'item',
                    url: '/icons/material-icons',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default utilities;
