import React from "react";

const DeleteItem=({item, onDelete})=>{
    const handleDelete=()=>{
        //Perform API call or update state to delete the item
onDelete(item);
    };

    return(
        <button onClick={handleDelete}>DeleteItem</button>
    );

};
export default DeleteItem;