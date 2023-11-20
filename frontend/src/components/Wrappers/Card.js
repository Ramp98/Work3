export default function Card(props){
    return(
        <div className="m-4 w-85 h-screen shadow-md shadow-gray-200 rounded-xl bg-white">
          <h3 className="text-xl font-bold p-4 ">{props.text}</h3>
          {props.children}
        </div>
    )
}