// import {React,useState} from 'react';
// import {open} from '../components/Navigation/SideBar';
import { ContextProvider, useSideBar,useSideBarUpdate } from '../components/Context/SideBarContext';
 

export default function HomePage(){
   const openSideBar= useSideBar();

   return(
    <ContextProvider>  
    <div className={`duration-300 ${openSideBar ? 'ml-72' : 'ml-24'}`}>
       <h2 className={`text-[1.3rem] sb pt-3 pl-4 font-bold`}>HomePage</h2>
       <section className='bg-[red] bg-opacity-40 w-screen h-screen'></section>
    </div>
    </ContextProvider>
   )
}