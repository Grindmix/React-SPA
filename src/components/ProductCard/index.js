import React from "react";
import './productCard.css';
import { Link } from "react-router-dom";

function productCard(props){
    return(
        <div className='productCard'>
        <Link to={`/productInfo/${props.table.id}`} className='tableName'>
        <img
            className='productPhoto'
            src={props.table.photo}
        />
        <p>{ props.table.name }</p>
        </Link>
        </div>
    );
}

export default productCard;