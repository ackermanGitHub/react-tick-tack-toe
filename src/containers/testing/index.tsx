import React, { useState } from "react";
import Header from "../../common/header";
import Footer from "../../common/footer";
import { MainContainer, Aside, Btn, ContentContainer } from "./styles/test";

type Product = {
    category: string,
    price: string,
    stocked: boolean,
    name: string
}

export default function Testing(){
    return (
        <MainContainer>
            <Header/>
            <ContentContainer>
                <FilterableProductTable products={PRODUCTS} />
            </ContentContainer>
            <Aside>
                <ul>
                    <li>li123</li>
                    <li>li123</li>
                    <li>li123</li>
                    <li>li123</li>
                </ul>
            </Aside>
            <Footer/>
        </MainContainer>
    )
}

const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

function FilterableProductTable({ products } : { products: Product[] }) {
    const [searchProduct, setSearchProduct] = useState('');
    const searchProducts = searchProduct === '' ?
      products
      : products.filter((prod: Product) => prod.name.includes(searchProduct));
    return (
      <div>
        <SearchBar searchProduct={searchProduct} changeHandler={(productName : string) => {setSearchProduct(productName)}} />
        <ProductTable products={searchProducts} />
      </div>
    );
}

function ProductCategoryRow({ category } : { category : string }) {
    return (
      <tr>
        <th colSpan={2}>
          {category}
        </th>
      </tr>
    );
}
  
function ProductRow({ product } : { product: Product }) {
    const name = product.stocked ? product.name :
      <span style={{ color: 'red' }}>
        {product.name}
      </span>;
  
    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
}
  
function ProductTable({ products } : { products: Product[] }) {
    const rows: JSX.Element[] = [];
    let lastCategory : string = null;

    products.forEach((product) => {
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                category={product.category}
                key={product.category} />
            );
        }
        rows.push(
        <ProductRow
            product={product}
            key={product.name} />
        );
        lastCategory = product.category;
    });

    return (
        <table>
        <thead>
            <tr>
            <th>Name</th>
            <th>Price</th>
            </tr>
        </thead>
        <tbody>{rows}</tbody>
        </table>
    );
}
  
function SearchBar({searchProduct, changeHandler } : { searchProduct: string, changeHandler: Function }) {
    return (
        <form>
        <input value={searchProduct} onChange={(w)=>{changeHandler(w.target.value)}} type="text" placeholder="Search..." />
        <label>
            <input type="checkbox" />
            {' '}
            Only show products in stock
        </label>
        </form>
    );
}