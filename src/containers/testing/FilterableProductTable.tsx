import React, { useState } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

export type Product = {
    category: string,
    price: string,
    stocked: boolean,
    name: string
}

export default function FilterableProductTable({ products } : { products: Product[] }) {
    const [searchProduct, setSearchProduct] = useState('');
    const [onlyStock, setOnlyStock] = useState(false);

    let searchProducts;

    searchProducts = searchProduct === '' ?
      products
      : products.filter((prod: Product) => prod.name.includes(searchProduct));

    searchProducts = onlyStock ?
        searchProducts.filter((prod: Product) => prod.stocked)
      : searchProducts;

    return (
      <div>
        <SearchBar 
            searchProduct={searchProduct} 
            changeHandler={(productName : string) => {setSearchProduct(productName)}}
            changeStockHandler={()=>{setOnlyStock(!onlyStock)}}
        />
        <ProductTable products={searchProducts} />
      </div>
    );
}