import React, { useState } from "react";
import Header from "../../common/header";
import Footer from "../../common/footer";
import { MainContainer, Aside, Btn, ContentContainer } from "./styles/test";

export default function Testing(){
    const [isLogin, setLogin] = useState(false);
    const [user, setUser] = useState({
        userName: "",
        password: "",
    })

    const handleSubmit = (e: any) => {
        console.log(e)
    }
    const handleChange = (e: any) => {
        console.log(e)
    }

    return (
        <MainContainer>
            <Header/>
            <ContentContainer>
            <form onSubmit={handleSubmit}>
                <label>
                Essay:
                <textarea value={user.userName} onChange={handleChange} />
                <textarea value={user.password} onChange={handleChange} />
                <select multiple={true}>
                    <option value="grapefruit">Grapefruit</option>
                    <option onChange={(e)=>{console.log(e)}} value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
            </ContentContainer>
            <Aside></Aside>
            <Footer/>
        </MainContainer>
    )
}