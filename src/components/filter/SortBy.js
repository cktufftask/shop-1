import React from "react";
const SortBy = (props) => {
    
    return <>
        <div className="row sort-by">
         <div className="title">Sort By</div>
            
    
            <ul>
                <li onClick={()=>props.sortItemBy('price',props.items,1)} >Price -- High Low</li>
                <li onClick={()=>props.sortItemBy('price' ,props.items)}>Price -- Low High</li>
                <li onClick={()=>props.sortItemBy('discount', props.items)}>Discount</li>    
                </ul>
        </div>
    </>

}

export default SortBy;