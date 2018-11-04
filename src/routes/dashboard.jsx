// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import MachineUnitProfile from "views/MachineUnit/MachineUnitProfile(new).jsx";
import MachineUnitsTableList from "views/MachineUnitsTableList/MachineUnitsTableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import ExperimentalClass from "../views/Experimental/ExperimentalClass";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Статистика",
    navbarName: "Статистика",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/machine-unit-profile",
    sidebarName: "Картотека",
    navbarName: "Картотека",
    icon: Person,
    component: MachineUnitProfile
  },
  {
    path: "/machine-units-table",
    sidebarName: "Оборудование",
    navbarName: "Оборудование",
    icon: "content_paste",
    component: MachineUnitsTableList
  },
  {
    path: "/exp",
    sidebarName: "experimental",
    navbarName: "experimental",
    icon: "voice_over_off",
    component: ExperimentalClass
  },
  {
    path: "/typography",
    sidebarName: "Typography",
    navbarName: "Typography",
    icon: LibraryBooks,
    component: Typography
  },
  {
    path: "/icons",
    sidebarName: "Icons",
    navbarName: "Icons",
    icon: BubbleChart,
    component: Icons
  },
  {
    path: "/notifications",
    sidebarName: "Notifications",
    navbarName: "Notifications",
    icon: Notifications,
    component: NotificationsPage
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
