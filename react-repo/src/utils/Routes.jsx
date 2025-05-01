import Home from "../components/home/Home";
import Props from "../pages/Props";
import Context from "../pages/Context"

const routes = [
  { path: "/", title: "Home", component: Home },
  { path: "/props", title: "Props", component: Props },
  { path: "/react-context", title: "React Context", component: Context },
];

export default routes;