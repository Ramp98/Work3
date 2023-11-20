import Column from "./Column";
import { mapOrder } from "../Utilities/sorts";
import {Container,Draggable} from "@edorivai/react-smooth-dnd";
import { applyDrag } from "../Utilities/dragDrop";
import { useState } from "react";


export default function BoardContainer(props){
   const[board,setBoard] = useState({});
   const[columns,setColumns] = useState([]);
     
    const cards = mapOrder(props.column.cards,props.column.cardOrder,"id");
    

    // const onCardDrop = (dropResult,columnId) =>{
    //   if(dropResult.removedIndex !=null || dropResult.addedIndex !== null){
    //     console.log(">>> inside onCardDrop : ",dropResult, "with column id:", columnId);    
      
      
    //   let newColumns= [...columns];
    //   let currentColumn = newColumns.find(column => column.id === columnId);
    //   console.log("currentColumns = ",currentColumn);
    //   currentColumn.cards= applyDrag(currentColumn.cards,dropResult);
    //   currentColumn.cardOrder= currentColumn.cards.map(card=> card.id);
    //   console.log(">>> current column: ",currentColumn);
    //   setColumns(newColumns);
    //   }
    // } 


    return(
        <div className="grid grid-flow-row auto-rows-max h-auto w-52 shadow-md overflow-auto mt-2 ml-7 mr-0 rounded-lg border-solid border-[1.5px] border-[#eff0f3] bg-[#ffffff]">
           <header className="m-2 font-bold text-[0.91rem]">{props.column.title}</header>
           <div>                  
           <Container
                    {...props.column.props}
                    groupName="col"
                  //   onDragStart={e => console.log("drag started", e)}
                  //   onDragEnd={e => console.log("drag end", e)}
                    onDrop={(dropResult)=> props.onCardDrop(dropResult,props.column.id)}
                    getChildPayload={index =>
                      cards[index]
                    }
                    dragClass="card-ghost"
                    dropClass="card-ghost-drop"
                  //   onDragEnter={() => {
                  //     console.log("drag enter:", props.column.id);
                  //   }}
                  //   onDragLeave={() => {
                  //     console.log("drag leave:", props.column.id);
                  //   }}
                  //   onDropReady={p => console.log('Drop ready: ', p)}
                    dropPlaceholder={{                      
                      animationDuration: 150,
                      showOnTop: true,
                      className: 'drop-preview' 
                    }}
                    dropPlaceholderAnimationDuration={200}
                  >

           {cards && cards.length> 0 && 
             cards.map((card,index) => {
              return(
                <Draggable key = {card.id}>
                  <div>
                     <div key={card.id}  className="w-auto h-9 cursor-pointer bg-[#ffffff] border-2 border-[#eff0f3] mt-2 mb-2 ml-1.5 mr-1.5 shadow-sm rounded-xs">
                        <p className="p-2 text-[0.82rem]">
                         {card.title}
                        </p>
                     </div>
                  </div>
                </Draggable>
               )
             })
           }
        </Container>
           </div>
           <footer className="p-2 m-2 text-[0.8rem]">
           <span className="flex flex-row cursor-pointer">
           <i class="fa-solid fa-plus fa-sm mt-[0.61rem]"></i>
            <p className="ml-[0.35rem]">Add Another Card</p>
           </span></footer>
        </div>

    )
}