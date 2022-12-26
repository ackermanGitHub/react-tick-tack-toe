import React from "react";

export default function NumberBtn({children, onClick, className, ...restProps}){
    return (
        <div>
            <button 
                {...restProps} 
                className={`btn + ${className}`} 
                onClick={() => onClick(children)}
            >
                {children}
            </button>
        </div>
    )
}