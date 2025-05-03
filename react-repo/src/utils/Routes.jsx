import Home from "../components/home/Home";
import Props from "../pages/Props";
import Context from "../pages/Context"
import States from "../pages/States";
import StateHoisting from "../pages/StateHoisting";

const routes = [
  { path: "/", title: "Home", component: Home },
  { path: "/props", title: "Props", component: Props },
  { path: "/react-context", title: "React Context", component: Context },
  { path: "/states", title: "States", component: States },
  { path: "/state-hoisting", title: "State Hoisting", component: StateHoisting },
];

export default routes;