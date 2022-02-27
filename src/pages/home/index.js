import React from 'react';
import ProductCard from '../../components/ProductCard';
import tables from '../../tables';


function HomePage(){
    return (
        <div className='container'>
            {tables.map((table => <ProductCard key={table.id} table={table}/>))}
        </div>
    );
}

export default HomePage;