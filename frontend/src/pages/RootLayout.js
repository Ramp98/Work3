import {React,useState} from 'react';
import SideBar from '../components/Navigation/SideBar';
import { Outlet } from 'react-router-dom';
import { ProjectDataProvider } from '../components/Context/FormDataContext';
 
export default function RootLayout(props){
   return(
      <> 
        <ProjectDataProvider>
       {/* <div className='bg-[#3d1828] w-full'> */}
         <SideBar/>
         <Outlet/>
         {/* </div> */}
         </ProjectDataProvider>
      </>
   )
}