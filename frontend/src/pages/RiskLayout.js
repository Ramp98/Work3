import Button from '../components/ContentBody/Button';
import Dropdown from '../components/ContentBody/Dropdown';
import { ContextProvider, useSideBar,useSideBarUpdate } from '../components/Context/SideBarContext';
import Card from '../components/Wrappers/Card';
import CustomForm from '../components/ContentBody/CustomForm';
import RiskForm from '../components/FormsContent/RiskForm';
import { Link, Outlet } from 'react-router-dom';
import RiskNavigation from '../components/Navigation/RiskNavigation';
import CreateProject from '../CustomTemplates/CreateProject';

export default function RiskLayout(props){
   const openSideBar= useSideBar();

   const ButtonClassName = "text-gray-200 text-xs gap-x-4 cursor-pointer pt-1.5 pb-1.5 pl-2 pr-2 font-bold hover:bg-gray-300 hover:text-black rounded-md m-2 bg-gray-700 duration-300"

   return(
    <ContextProvider>  
     <div className={`duration-300 ${openSideBar ? 'ml-72' : 'ml-24'}`}>
       <div className='flex flex-row'>
        <h2 className={`text-[1.3rem] font-bold pt-3 pl-4 `}>{props.projectName}</h2>
        {/* <div className='ml-2 flex-row'> */}
        {/* <Link to="/board">
         <Button customClasses={ButtonClassName} text="Board"/>
        </Link>
        <Button customClasses={ButtonClassName} text="Add New Risk"/>
        <Button customClasses={ButtonClassName} text="Risk Implementation"/> */}
        <RiskNavigation/>
        </div>
      {/* <RiskForm/> */}
      <Outlet/>
     </div>
    </ContextProvider>
   )
}