import {React,useState} from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/Navigation/SideBar';
import RiskNavigation from '../components/Navigation/RiskNavigation';
 
export default function RiskLayout(){
   return(
    <>
      <RiskNavigation/>
      <Outlet/>
    </>
   )
}