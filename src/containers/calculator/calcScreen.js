import React from "react";
import { Screen, Pane } from "./styles/calculator";

export default function CalcScreen({children, ...restProps}){
    return (
        <Screen {...restProps}>
            <Pane>{children}</Pane>
        </Screen>
    )
}