import React, { useState } from "react";

const UpdateItem=({item, onUpdate})=>{
    const[UpdateItem,setUpdateItem]=useState(item);
   
    const handleInputChange=(e)=>{
        setUpdateItem(e.target.value);
    };

    const handleInputSubmit=(e)=>{
        e.preventDefault();
        //Perform API call or update state with the updated item
        onUpdate(UpdateItem);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"value={UpdateItem}onChange={handleInputChange}></input>
            <button type="submit">UpdateItem</button>
        </form>
    );
    };
        
    export default UpdateItem;

