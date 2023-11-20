import {React,useState} from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/Navigation/SideBar';
 
export default function NotificationsLayout(){
   return(
    <>
      <SideBar/>
      <Outlet/>
    </>
   )
}