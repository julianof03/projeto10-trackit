import styled from "styled-components";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function CreateHabitos({
    token,
}){
    const {stateaba, SetStateaba, weekday} = useContext(UserContext);
    const [days, Setdays] = useState([]);
    const [habbitname, Sethabbiname] = useState([]);
    const [disbleinput, SetDisbleinput] = useState('');
    const [loading, SetLoading] = useState(false);
    const [ph, setPh] = useState('nome do hábito');
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    function Save(){
        const body = {
             name: habbitname,
             days: days
        }
        WaitResponse();
        const promise =  axios.post( 
            'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
            body ,config
          );
           promise.then((res) =>{
             console.log(res);
             SetLoading(false);
             SetDisbleinput("");
             document.location.reload();  
        }
           );
    }
    function WaitResponse(){
        SetLoading(true);
        if(loading){
            SetDisbleinput("disable");
        }
    }
    if(stateaba){
        return( 
            <Container>
                <div >
                    <input disabled={disbleinput} placeholder={ph} onChange={(e)=> {setPh(e.target.value); Sethabbiname(e.target.value)}} ></input>          
                    <div className="days">
                        {weekday.map((d)=> 
                        {
                            const nhab = days;
                            const ndays = d.daynumber;
                                if(nhab.includes(ndays)){
                                    return(
                                        <label class="container">
                                            <input type="checkbox"/>
                                            <span className="checkmark true" onClick={() => {        
                                                const newarrfilter = daysarr => daysarr !== d.daynumber;
                                                const newarr = days.filter(newarrfilter);
                                                const daynerarr = [...newarr, d.daynumber];
                                                Setdays(daynerarr);
                                            }}>{d.dayname}</span>
                                        </label>);
                                }
                                else{
                                    return(
                                        <label class="container">
                                            <input type="checkbox"/>
                                            <span className="checkmark" onClick={() => {        
                                                const newarrfilter = daysarr => daysarr !== d.daynumber;
                                                const newarr = days.filter(newarrfilter);
                                                const daynerarr = [...newarr, d.daynumber];
                                                Setdays(daynerarr);
                                            }}>{d.dayname}</span>
                                        </label>);
                                }
                        }
                    )}
                    <div></div>
        
                    </div>
                    <div className="savestate">
                        <Cancelbutton onClick={() => SetStateaba(false)} loading = {loading}>Cancelar</Cancelbutton>
                        <Savebutton onClick={Save} loading = {loading}>Salvar</Savebutton>
                    </div>
                </div>
                {
                /* <p>Você não tem nenhum hábito cadastrado ainda. 
                Adicione um hábito para começar a trackear!</p> */}
            </Container>)
    }
}
const Container = styled.div`
    margin-top: 20px;
    margin-left:20px;
    margin-right: 20px;
    width: 340px;
    height:180px;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    background-color:#ffffff;
    font-family: 'Lexend Deca';
    color:#666666;
    flex-wrap:wrap;
    border-radius:5px;
        input{
            width:295px;
            height:45px;
            border-radius:5px;
            border-color: #d4d4d4;
            border-width:1px;
            border-style:solid;
            padding-left:8px;
            font-size:20px;
            color:#d4d4d4;
        }
        .savestate{
            display:flex;
            margin-top:10px;
        }
        button{
            border-radius:5px;
            border-width:0px;
            font-size:18px;
            width:84px;
            height:35px;
        }

        .days{
            margin-top:8px;
            display:flex;
            height: 25px;
            color:#CFCFCF;
            label{
                display:flex;
                align-items:center;
                justify-content:center;
                margin-right:4px;
                
            }
            .container {
                display: block;
                position: relative;
                padding-left: 35px;
                margin-bottom: 12px;
            cursor: pointer;
                font-size: 22px;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }

                /* Hide the browser's default checkbox */
            .container input {
                position: absolute;
                opacity: 0;
            cursor: pointer;
                height: 0;
                width: 0;
            }

                /* Create a custom checkbox */
            .checkmark {
                display:flex;
                align-items: center;
                justify-content:center;
                position: absolute;
                top: 0;
                left: 0;
                height: 25px;
                width: 25px;
                background-color: #ffffff;
                border-radius: 5px;
                border-width:1px;
                border-style:solid;
            }
            .true{
                color: #FFFFFF;
                background-color: #CFCFCF;
            }

                /* On mouse-over, add a grey background color */
            .container:hover input ~ .checkmark {
                border-width:1px;
                border-style:solid;
                background-color: #CFCFCF;
                color: #FFFFFF;
            }

                /* When the checkbox is checked, add a blue background */
            .container input:checked ~ .checkmark {
                border-width:1px;
                border-style:solid;
                background-color: #CFCFCF;
                color: #FFFFFF;
            }

                /* Create the checkmark/indicator (hidden when not checked) */
            .checkmark:after {
                content: "";
                position: absolute;
                display: none;
            }

                /* Show the checkmark when checked */
            .container input:checked ~ .checkmark:after {
                display: block;
            }
        }
`;
const Cancelbutton = styled.div`
    height:35px;
    width:84px;
    display:flex;
    align-items:center;
    justify-content:center ;
    margin-left: 120px;
    background-color:#ffffff;
    color: ${({loading})=> {
        if(loading){
            return("#86cdff");
            }
            else{
                return("#52B6FF");}
            }};
`;
const Savebutton = styled.div`
    height:35px;
    width:84px;
    display:flex;
    border-radius:5px;
    align-items:center;
    justify-content:center ;
    margin-left: 8px;
    background-color: ${({loading})=> {
        if(loading){
            return("#86cdff");
            }
            else{
                return("#52B6FF");}
            }};
    color:#ffffff;
`;
