import React from "react";

export default function SearchBar({searchProduct, changeHandler, changeStockHandler } : { searchProduct: string, changeHandler: Function, changeStockHandler: Function  }) {
    return (
        <form>
        <input value={searchProduct} onChange={(w)=>{changeHandler(w.target.value)}} type="text" placeholder="Search..." />
        <label>
            <input type="checkbox" onChange={()=>{changeStockHandler()}} />
            {' '}
            Only show products in stock
        </label>
        </form>
    );
}