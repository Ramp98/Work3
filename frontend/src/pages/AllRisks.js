import { Outlet } from "react-router-dom";
import BoardContainer from "../components/Board/BoardContainer";
import BoardContent from "../components/Board/BoardContent";

export default function AllRisks(){
    return(
        <div className="bg-[red] bg-opacity-40 w-screen h-screen">
            {/* <h3 className=" text-lg m-4 font-bold">
                All Risks
            </h3> */}
            {/* <BoardContainer text="High"/>
            <BoardContainer text="Medium"/>
            <BoardContainer text="Low"/>
            <BoardContainer text="Very Low"/> */}
            <BoardContent/>
        </div>
    )
}