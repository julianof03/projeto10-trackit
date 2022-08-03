import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";




export default function LoginScreen(){
    const [email, SetEmail] = useState([]);
    const [password, SetPassword] = useState([]);

    function SubForm(){
        const body = {
            email,
            password,
        };
        console.log("mandei", body);
        }

    return(
    <Container> 
        <div className="logoBox"></div>
        <form className="loginBox">
            <input type="email" placeholder="email"
                onChange={(e) => SetEmail(e.target.value)}
                value = {email}>
            </input>
            <input type="password" placeholder="senha"
                onChange={(e) => SetPassword(e.target.value)}
                value = {password}>
            </input>
            <button onClick={SubForm}>Entrar</button>
        </form> 
            <Link to={"/cadastro"} style={{textDecoration:"none"}}><p className="linkCadastro">Não tem uma conta? Cadastre-se!</p></Link>     
    </Container>);
}
const Container = styled.div`
width: 375px;
height: 667px;
border-width: 1px;
border-style: solid;
border-color: #D4D4D4;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
.loginBox{
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items:center;
}
.logoBox{
    margin-top: 70px;
    margin-bottom:40px;
    width: 180px;
    height: 180px;
    background-color: #D4D4D4;
}
input{
    width:293px;
    height: 45px;
    padding-left:10px;
    font-size:19px;
    color: #D4D4D4;
    border-radius: 5px; 
    border-width: 1px;
    border-style: solid;
    border-color: #D4D4D4;
    margin-bottom: 6px;
}

button{
    width:309px;
    height: 45px;
    font-size:28px;
    color: #ffffff;
    background-color:#52B6FF;
    border-radius: 5px; 
    border-width: 0px;
    border-style: solid;
    margin-bottom: 6px;
}
.linkCadastro{
    color:#52B6FF;
    text-decoration: underline;
}
`;