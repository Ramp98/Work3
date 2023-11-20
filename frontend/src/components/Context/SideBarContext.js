import React, {useContext,useState} from "react";
const SideBarContext = React.createContext();
const SideBarUpdateContext= React.createContext();

export function useSideBar(){
    return useContext(SideBarContext);
}

export function useSideBarUpdate(){
    return useContext(SideBarUpdateContext);
}


export function ContextProvider({children}){
    const [open,setOpen] = useState(true);
     
    function toggleMenu() {
        setOpen(s=> !s)
    }
  return(
     <SideBarContext.Provider value={open}>
          <SideBarUpdateContext.Provider value={toggleMenu}>
            {children}
          </SideBarUpdateContext.Provider>  
     </SideBarContext.Provider>
  )

}