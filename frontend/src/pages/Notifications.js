import { ContextProvider, useSideBar,useSideBarUpdate } from '../components/Context/SideBarContext';
 
export default function Notifications(){
   const openSideBar= useSideBar();

   return(
    <ContextProvider>  
    <div>
       <h2 className={`text-[1.3rem] pt-3 pl-4 font-bold duration-300 ${openSideBar ? 'ml-72' : 'ml-24'}`}>Notifications</h2>
      <section className='bg-[red] bg-opacity-40 w-screnn h-screen border-solid border-t-2 border-opacity-90 border-black'></section>
    </div>
    </ContextProvider>
   )
}