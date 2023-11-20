import { Outlet } from "react-router-dom";
import SideBar from "../components/Navigation/SideBar";

export default  function ProjectsLayout(){
    

    return(
        <>
          {/* <SideBar/> */}
          <Outlet/>
        </>
    )
}