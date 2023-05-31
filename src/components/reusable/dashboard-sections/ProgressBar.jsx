const ProgressBar = ({ progressPercentage}) => {
    return ( 
       <div className="w-full">
         <div className="w-full h-3 rounded-full bg-white flex flex-col border border-blue-950">
            <div className="h-full  bg-orange-600 rounded-full" style={{width: `${progressPercentage}`}}></div>
        </div>
        <div className="w-full h-fit flex justify-end">{progressPercentage}</div> 
       </div>
     );
}
 
export default ProgressBar;