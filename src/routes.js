// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Data from "@material-ui/icons/DataUsage";
import Table from "@material-ui/icons/TableChart";
import BubbleChart from "@material-ui/icons/BubbleChart";
import BarChart from "@material-ui/icons/BarChart";
// core components/views for Admin layout
import About from "views/About";
import Instances from "views/Intances/containers/instances";
import Datasets from "views/Datasets/Datasets";
import Analitycs from "views/Analitycs/containers/analitycs";
import Visualization from "views/Graphics/Visualization";

const dashboardRoutes = [
  {
    path: "/about",
    name: "About",
    icon: Dashboard,
    component: About,
    layout: "/admin",
    active: true
  },
  {
    path: "/instances",
    name: "Instances",
    icon: Data,
    component: Instances,
    layout: "/admin",
    active: true
  },
  {
    path: "/datasets",
    name: "Datasets",
    icon: Table,
    component: Datasets,
    layout: "/admin",
    active: false
  },
  {
    path: "/analitycs",
    name: "Analitycs",
    icon: BarChart,
    component: Analitycs,
    layout: "/admin",
    active: false
  },
  {
    path: "/graphics",
    name: "Graphics",
    icon: BubbleChart,
    component: Visualization,
    layout: "/admin",
    active: false
  }
];

export default dashboardRoutes;
