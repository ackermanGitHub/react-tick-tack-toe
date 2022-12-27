import React from "react";
import { Btn } from "./styles/calculator";

export default function NumberBtn({children, onClick, ...restProps}){
    return (
        <Btn 
            {...restProps} 
            onClick={() => onClick(children)}
        >
            {children}
        </Btn>
    )
}