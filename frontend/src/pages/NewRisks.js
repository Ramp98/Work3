import { ContextProvider } from "../components/Context/SideBarContext"
import RiskForm from "../components/FormsContent/RiskForm"

export default function NewRisk(){
    return(
     <ContextProvider>   
      <RiskForm/>
     </ContextProvider>
    )
}