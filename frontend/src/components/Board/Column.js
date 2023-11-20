export default function Column(props){
   
    const {column} = props;

    return(
        <>
           <ul>
            <li>
               <div className="w-auto h-9 bg-[#ffffff] border-2 border-[#eff0f3] mt-2 mb-2 ml-1.5 mr-1.5 shadow-sm rounded-xs">
                   <p className="p-2 text-[0.82rem]">
                      First
                   </p>
               </div>
            </li>
            <li>
               <div className="w-auto h-9 bg-[#ffffff] border-2 border-[#eff0f3] mt-2 mb-2 ml-1.5 mr-1.5 shadow-sm rounded-xs">
                   <p className="p-2 text-[0.82rem]">
                      Second
                   </p>
               </div> 
            </li>
            <li>
               <div className="w-auto h-9 bg-[#ffffff] border-2 border-[#eff0f3] mt-2 mb-2 ml-1.5 mr-1.5 shadow-sm rounded-xs">
                   <p className="p-2 text-[0.82rem]">
                      Third
                   </p>
               </div> 
            </li>
            <li>
               <div className="w-auto h-9 bg-[#ffffff] border-2 border-[#eff0f3] mt-2 mb-2 ml-1.5 mr-1.5 shadow-sm rounded-xs">
                   <p className="pt-2 pb-2 pl-2 pr-2 text-[0.82rem]">
                      Fourth
                   </p>
               </div>
            </li>
           </ul>
        </>
    )
}