import { APP_PREFIX_PATH } from "@/config/app-config";

// import Dashboard from "@/pages/Dashboard";
// import Marketing from "@/pages/Marketing";
// import CampaignManager from "@/pages/CampaignManager";
// import Settings from "@/pages/Settings";
// import FAQs from "@/pages/FAQs";
import Login from "@/pages/Autth/Login";
import Dashboard from "@/pages/Dashboard";
import BidInvitation from "@/pages/InnerPages/BidInvitation/BidInvitation";
import RFPReview from "@/pages/InnerPages/RFPReview/RFPReview";
import TaskTrack from "@/pages/InnerPages/TaskTrack/TaskTrack";
import Marketing from "@/pages/Marketing";

export const PUBLIC_ROUTES = [
    {
        key: 'login',
        path: '/auth/login',
        Component: Login,
    },
];

export const PROTECTED_ROUTES = [
    {
        key: 'dashboard',
        path: `${APP_PREFIX_PATH}/dashboard`,
        Component: Dashboard
    },
    {
        key: 'task-track',
        path: `${APP_PREFIX_PATH}/task-track`,
        Component: TaskTrack
    },
    {
        key: 'rfp-review',
        path: `${APP_PREFIX_PATH}/rfp-review`,
        Component: RFPReview
    },
    {
        key: 'bid-invitation',
        path: `${APP_PREFIX_PATH}/bid-invitation`,
        Component: BidInvitation
    },
    {
        key: 'campaign',
        path: `${APP_PREFIX_PATH}/campaign`,
        // Component: <h1>Campaig</h1>
    },
    {
        key: 'settings',
        path: `${APP_PREFIX_PATH}/settings`,
        // Component:<h1>Settings</h1>
    },
    {
        key: 'faqs',
        path: `${APP_PREFIX_PATH}/faqs`,
        // Component: <h1>FAQS</h1>
    },
];