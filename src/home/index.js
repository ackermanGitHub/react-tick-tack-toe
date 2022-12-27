import React from "react";
import { ButtonLink } from "../common/styles";

export default function Home() {
    return (
        <div>
            <ButtonLink to={"/Game"}>Game</ButtonLink>
            <ButtonLink to={"/Calculator"}>Calculator</ButtonLink>
            <ButtonLink to={"/Random-Generator"}>Random Generator</ButtonLink>
        </div>
    )
}