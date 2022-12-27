import React from "react";
import { SquareBtn } from './styles/tick-tack-toe';

export default function Square({value, onClick, ...restProps}) {
    return (
      <SquareBtn {...restProps} onClick={onClick}>
        {value}
      </SquareBtn>
    );
}