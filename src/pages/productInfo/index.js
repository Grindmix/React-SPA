import React from "react";
import { useParams } from "react-router-dom";

import tables from '../../tables';

import './index.css'

function ProductInfo(){
    
    const params = useParams();

    let table = tables.find(table => table.id === params.id);

    return(
        <div className="productInfo">
            
                <img src={table.photo}/>
                <h1 className="item">{table.name}</h1>
                <p className="item">{table.description}</p>

        </div>
    );
}


export default ProductInfo;
