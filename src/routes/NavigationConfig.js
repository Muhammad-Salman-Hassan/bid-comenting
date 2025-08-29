import { FaCalendar, FaChartSimple, FaGlasses, FaTeamspeak } from "react-icons/fa6";
import { FiSettings, FiHelpCircle } from "react-icons/fi";

const APP_PREFIX_PATH = '/app';

/** -------------------------------
 *  Main Navigation 
 *  ------------------------------- */
const mainNavigation = [
    {
        key: 'dashboard',
        path: `${APP_PREFIX_PATH}/dashboard`,
        title: 'Dashboard',
        icon: FaChartSimple,
        submenu: [],
    },
    {
        key: 'task-track',
        path: `${APP_PREFIX_PATH}/task-track`,
        title: 'Task Track',
        icon: FaTeamspeak,
        submenu: [],
    },
    {
        key: 'rfp-review',
        path: `${APP_PREFIX_PATH}/rfp-review`,
        title: 'Rview RFP',
        icon: FaGlasses,
        submenu: [],
    },
    {
        key: 'bid-invitation',
        path: `${APP_PREFIX_PATH}/bid-invitation`,
        title: 'Bid Inviatation',
        icon: FaCalendar,
        submenu: [],
    },
];

const marketingNavigation = [
    {
        key: 'marketing',
        path: `${APP_PREFIX_PATH}/marketing`,
        title: 'Marketing',
        icon: FaChartSimple,
        submenu: [
            
        ],
    },
];

/** -------------------------------
 *  Support Navigation 
 *  ------------------------------- */
const settingsNavigation = [
    {
        key: 'settings',
        path: `${APP_PREFIX_PATH}/settings`,
        title: 'Settings',
        icon: FiSettings,
        submenu: [],
    },
];

const helpNavigation = [
    {
        key: 'faqs',
        path: `${APP_PREFIX_PATH}/faqs`,
        title: 'FAQs',
        icon: FiHelpCircle,
        submenu: [],
    },
];

export const NAVIGATION_CONFIG = () => {
    const baseNavigation = [
        ...mainNavigation,
        ...marketingNavigation,
    ];

    return baseNavigation;
};

export const SUPPORT_CONFIG = () => {
    const supportNavigation = [
        ...settingsNavigation,
        ...helpNavigation,
    ];

    return supportNavigation;
};