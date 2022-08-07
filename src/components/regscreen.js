import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Registration(){
    const [email, SetEmail] = useState([]);
    const [password, SetPassword] = useState([]);
    const [nome, SetNome] = useState([]);
    const [foto, SetFoto] = useState([]);
    const navigate = useNavigate();
    const [disbleinput, SetDisbleinput] = useState('');
    const [loading, SetLoading] = useState(false);

    function SubForm(event){
        event.preventDefault();
        const body = {
            email,
            name: nome,
            image: foto,
            password
        };
        WaitResponse();
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body)
        promise.then(() => navigate("/"));
        promise.catch(() => alert("Algo deu errado :( tente novamente"));
    }
    function WaitResponse(){
        SetLoading(true);
        if(loading){
            SetDisbleinput("disable");
        }
    }
    return(
        <Container> 
            <div className="logoBox"></div>
            <form className="loginBox">
                <input type="email" placeholder="email"
                    onChange={(e) => SetEmail(e.target.value)}
                    value = {email}></input>
                <input type="password" placeholder="senha"
                    onChange={(e) => SetPassword(e.target.value)}
                    value = {password}></input>
                <input type="text" placeholder="nome"
                    onChange={(e) => SetNome(e.target.value)}
                    value = {nome}></input>
                <input type="text" placeholder="foto"
                    onChange={(e) => SetFoto (e.target.value)}
                    value = {foto}></input>
                <button onClick={SubForm}>Cadastrar</button>
                <Link to={"/"} style={{textDecoration:"none"}}><p className="linkCadastro">Já tem uma conta? Faça login!</p></Link>
            </form>
            
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