import { React, useState,useContext } from 'react';
import { Form, Link } from 'react-router-dom';
import { BsArrowLeftShort, BsSearch } from "react-icons/bs";
import { useSideBar,useSideBarUpdate } from '../Context/SideBarContext';
import { ContextProvider } from '../Context/SideBarContext';
import CreateProject from '../../CustomTemplates/CreateProject';
import CustomDropdown from '../ContentBody/LinkDropdown';
import LinkDropdown from '../ContentBody/LinkDropdown';
import FormDataContext from '../Context/FormDataContext';
import { FormDataProvider } from '../Context/FormDataContext';
// import { FormDataContext, FormDataProvider } from "../Context/FormDataContext";

export default function SideBar() {



//    const [open, setOpen] = useState(true);
   const openSideBar = useSideBar();
   const updateSideBar = useSideBarUpdate();

  //  const { obj } = useContext(FormDataContext);
 
  //  console.log(obj);

   console.log("hello");

   const [openProjectsView,setProjectsView] = useState(false);

   const handleProjectsView=()=>{
      setProjectsView(!openProjectsView);
   };
   
   const classes=`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer ml-5 p-2 hover:bg-light-white rounded-md mt-2 ${!openSideBar && "hidden"}`

    return (
      // <FormDataProvider>
        <ContextProvider>
        <div className={`fixed h-screen p-5 pt-8 antialiased bg-[#1B1212] ${openSideBar ? "w-72" : "w-20"} duration-300`}>  
             <BsArrowLeftShort className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${!openSideBar && "rotate-180"}`}
                onClick={updateSideBar} />
          <div className={`flex items-center rounded-md bg-light-white mt-6 ${!openSideBar ? "px-2.5" : "px-4"} py-2`}> 
             <BsSearch className='text-white text-lg block float-left cursor-pointer'/>
            <input type={"search"} placeholder="Search"
             className={`text-base bg-transparent w-full text-white focus:outline-none ${!openSideBar && "hidden"}`}/>
           </div>   
           <ul className='pt-2'>  
            <li className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2 ${!openSideBar && "hidden"}`}>
                <span className='flex flex-row'>
                <i class="fa-solid fa-house fa-xs mt-2.5"></i>
                  <Link className="ml-1.5" to="/">HomePage</Link>
                </span>
            </li>
            <li className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2 ${!openSideBar && "hidden"}`}>
                <span className='flex flex-row'>
                <i class="fa-solid fa-xmark fa-sm mt-2.5 "></i>
                  <Link className="ml-1.5" to="/risk">Risks</Link>
                  {/* <LinkDropdown/> */}
                </span>
            </li>
            <li className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2 ${!openSideBar && "hidden"}`}>
                <span className='flex flex-row'>
                <i class="fa-regular fa-bell fa-sm mt-2.5"></i>
                <Link className="ml-1.5" to="/notifications">Notifications</Link>
                </span>
            </li>
            {/* <ul>
            <li className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2 ${!openSideBar && "hidden"}`}>
                <span className='flex flex-row'>
                <i class="fa-solid fa-xmark fa-sm mt-2.5 "></i>
                  <Link className="ml-1.5" to="/risk">Projects</Link>
                </span>
            </li>
            <li className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2 ${!openSideBar && "hidden"}`}>
                <span className='flex flex-row'>
                <i class="fa-solid fa-xmark fa-sm mt-2.5 "></i>
                  <Link className="ml-1.5" to="/risk">Risks</Link>
                </span>
            </li>
            
            </ul> */}
          <div className='flex flex-col'>  
            <div className={`text-gray-300 text-sm flex items-center gap-x-2 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2 ${!openSideBar && "hidden"}`}>
              <i class={` ${!openProjectsView ? "fa-solid fa-angle-right duration-700" : "fa-solid fa-angle-down duration-700 " } ${!openSideBar && "hidden"} `}></i>
                  <p  className="p-0 duration-500" onClick={handleProjectsView}>Projects</p>
            </div>
            {openProjectsView && 
                 <LinkDropdown classes={classes}/>
                 } 
          </div>  
           </ul>
        </div>
        </ContextProvider>
      // </FormDataProvider>
    )
}
