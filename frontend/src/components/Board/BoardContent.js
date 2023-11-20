import dummy from "../Initialdata/dummy.json";
import _, { isEmpty } from "lodash";
import BoardContainer from "./BoardContainer";
import {useState,useEffect} from "react";
import { mapOrder } from "../Utilities/sorts";
import { Container,Draggable } from '@edorivai/react-smooth-dnd';
import {applyDrag} from "../Utilities/dragDrop.js";

export default function BoardContent(){
    const[board,setBoard] = useState({});
    const[columns,setColumns] = useState([]);
    
    
    useEffect(() => {
        const boardInitData = dummy.boards.find(item => item.id === "board-1");
        if(boardInitData){
            setBoard(boardInitData);
            //Sort
            boardInitData.columns.sort((a,b) => 
            boardInitData.columnOrder.indexOf(a.id) - boardInitData.columnOrder.indexOf(b.id));
            setColumns(mapOrder(boardInitData.columns,boardInitData.columnOrder,"id"));
        }
    },[]
    )

    const onColumnDrop = (dropResult) => {
        console.log(">>> inside onColumnDrop", dropResult);
        let newColumns = [...columns];
        newColumns = applyDrag(newColumns,dropResult);
        console.log(">>> Inside onColumnDrop new columns: ",newColumns);
        let newBoard = {...board};
        newBoard.columnOrder = newColumns.map(column => column.id);
        newBoard.columns = newColumns;
        setColumns(newColumns);
        setBoard(newBoard);
    } 

    // const cards = mapOrder(column.cards,column.cardOrder,"id");
   
    const onCardDrop = (dropResult,columnId) =>{
        if(dropResult.removedIndex !=null || dropResult.addedIndex !== null){
          console.log(">>> inside onCardDrop : ",dropResult, "with column id:", columnId);    
        
        
        let newColumns= [...columns];
        let currentColumn = newColumns.find(column => column.id === columnId);
        console.log("currentColumns = ",currentColumn);
        currentColumn.cards= applyDrag(currentColumn.cards,dropResult);
        currentColumn.cardOrder= currentColumn.cards.map(card=> card.id);
        console.log(">>> current column: ",currentColumn);
        setColumns(newColumns);
        }
      } 
   


    if(_.isEmpty(board)){
        return(
            <>
                <div>Board not found</div>
            </>
        )
    }




    return(
        <>
         <div className="flex flex-row">
         <Container
          orientation="horizontal"
          onDrop={onColumnDrop}
          getChildPayload={index => columns[index]}
        //   dragHandleSelector=".column-drag-handle"
          dropPlaceholder={{
            animationDuration: 150,
            showOnTop: true,
            className: 'cards-drop-preview'
          }}
        >
           {columns && columns.length > 0 && columns.map((column,index)=>{
             return(
                <Draggable key = {column.id}>
                  <BoardContainer 
                    //  key = {column.id}
                     onCardDrop={onCardDrop}
                     column={column}
                   />
                </Draggable>
             )
           })
           }
           </Container>
         </div>
        </>
    )
}