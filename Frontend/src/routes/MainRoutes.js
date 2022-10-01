import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsPatient = Loadable(lazy(() => import('views/utilities/Patient')));
const UtilsscheduleAppointment = Loadable(lazy(() => import('views/utilities/ScheduleAppointment')));
const UtilsViewAppointment = Loadable(lazy(() => import('views/utilities/ViewAppointment')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));
const Schedule = Loadable(lazy(() => import('views/utilities/Schedule')));
const ViewCalender = Loadable(lazy(() => import('views/utilities/ViewCalender')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'module',
            children: [
                {
                    path: 'module-Patient',
                    element: <UtilsPatient/>
                }
            ]
        },
        {
            path: 'module',
            children: [
                {
                    path: 'module-scheduleAppointment',
                    element: <UtilsscheduleAppointment />
                }
            ]
        },
        {
            path: 'module',
            children: [
                {
                    path: 'module-viewAppointment',
                    element: <UtilsViewAppointment />
                }
            ]
        },
        {
            path: 'module',
            children: [
                {
                    path: 'module-appointmentcalender',
                    element: <Schedule />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'tabler-icons',
                    element: <Schedule />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'material-icons',
                    element: <UtilsMaterialIcons />
                }
            ]
        },
        
        {
            path: 'labwork',
            element: <SamplePage />
        },
        {
            path: 'Communication',
            element: <SamplePage />
        },
       
        {
            path: 'report',
            element: <SamplePage />
        },
        {
            path: 'administrator',
            element: <SamplePage />
        },
        {
            path: 'inventory',
            element: <SamplePage />
        },
        {
            path: 'help',
            element: <SamplePage />
        }
    ]
};

export default MainRoutes;
