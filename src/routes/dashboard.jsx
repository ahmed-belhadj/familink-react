import Dashboard from "views/Dashboard/Dashboard.jsx";
import Notifications from "views/Notifications/Notifications.jsx";
import Icons from "views/Icons/Icons.jsx";
import Typography from "views/Typography/Typography.jsx";
import TableList from "views/TableList/TableList.jsx";
import Maps from "views/Maps/Maps.jsx";
import UserPage from "views/UserPage/UserPage.jsx";

import DoctorDemo from "views/DoctorDemo/DoctorDemo";
import PatientDemo from "views/PatientDemo/PatientDemo";


var dashRoutes = [
    {
        path: "/dashboard/user-page",
        name: "Profile",
        icon: "nc-icon nc-single-02",
        component: UserPage
    },
    {
        path: "/dashboard/notifications",
        name: "Notifications",
        icon: "nc-icon nc-bell-55",
        component: Notifications
    },
    {
        path: "/dashboard/patient-demo",
        name: "Patient Demo",
        icon: "nc-icon nc-alert-circle-i",
        component: PatientDemo
    },
    {
        path: "/dashboard/doctor-demo",
        name: "Doctor Demo",
        icon: "nc-icon nc-ambulance",
        component: DoctorDemo
    },

    // {
    //   path: "/dashboard/dashboard",
    //   name: "Dashboard",
    //   icon: "nc-icon nc-bank",
    //   component: Dashboard
    // },
    {
        path: "/dashboard/icons",
        name: "Icons",
        icon: "nc-icon nc-diamond",
        component: Icons
    },
    // { path: "/dashboard/maps", name: "Maps", icon: "nc-icon nc-pin-3", component: Maps },
    // {
    //   path: "/dashboard/notifications",
    //   name: "Notifications",
    //   icon: "nc-icon nc-bell-55",
    //   component: Notifications
    // },
    // {
    //   path: "/dashboard/user-page",
    //   name: "User Profile",
    //   icon: "nc-icon nc-single-02",
    //   component: UserPage
    // },
    {
        path: "/dashboard/tables",
        name: "Table List",
        icon: "nc-icon nc-tile-56",
        component: TableList
    },
    // {
    //   path: "/dashboard/typography",
    //   name: "Typography",
    //   icon: "nc-icon nc-caps-small",
    //   component: Typography
    // },
];
export default dashRoutes;
