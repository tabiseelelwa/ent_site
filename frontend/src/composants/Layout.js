import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Pied from "./Pied";

function Layout() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Pied />
    </div>
  );
}

export default Layout;
