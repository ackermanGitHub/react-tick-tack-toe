import React from "react";

export default function CalcScreen({children, className, ...restProps}){
    return (
        <div {...restProps} className={`calcScreen + ${className}`}>
            <p>{children}</p>
        </div>
    )
}