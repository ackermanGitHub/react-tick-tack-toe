import React from "react";
import Header from "../../common/header";
import Footer from "../../common/footer";
import { MainContainer, ContentContainer } from "./styles/test";
import FilterableProductTable from './FilterableProductTable';

export default function Testing(){
    return (
        <MainContainer>
            <Header/>
            <ContentContainer>
                <FilterableProductTable products={PRODUCTS} />
            </ContentContainer>
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

  

  

