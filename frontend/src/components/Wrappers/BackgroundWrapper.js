export default function BackgroundWrapper(props){
    return(
        <div className="bg-light-white">
         {props.children}
        </div>
    )
}