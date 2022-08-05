import { useState } from "react";
import styled from "styled-components";
import React from "react";
import axios from "axios";

export default function Habitos({
    days,
    Setdays,
    token
}){

    const weekday = [
        {
            dayname: 'D',
            daynumber: 0
        },
        {
            dayname: 'S',
            daynumber: 1
        },
        {
            dayname: 'T',
            daynumber: 2
        },
        {
            dayname: 'Q',
            daynumber: 3
        },
        {
            dayname: 'Q',
            daynumber: 4
        },
        {
            dayname: 'S',
            daynumber: 5
        },
        {
            dayname: 'S',
            daynumber: 6
        }
        
    ]
    const [habbitname, Sethabbiname] = useState([]);
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    
    function Save(){
        const body = {
            name: habbitname,
            days: days
        }
        const promise =  axios.post( 
            'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
            body ,config
          )
          promise.then((res) =>{
            console.log(res);     
        }
          );
    }

    return( 
    <Container>
        <div>
            <input placeholder="nome do hábito" onChange={(e)=>{Sethabbiname(e.target.value);}}></input>
            <div className="days">


                {weekday.map((d)=> 
            <label class="container">
                <input type="checkbox"/>
                <span className="checkmark" onClick={() => {        
                    const newarrfilter = daysarr => daysarr !== d.daynumber;
                    const newarr = days.filter(newarrfilter);
                    const daynerarr = [...newarr, d.daynumber];
                    Setdays(daynerarr);
                }}>{d.dayname}</span>
              </label>)}
            <div></div>

            </div>
            <div className="savestate">
                <button className="cancelar">Cancelar</button>
                <button className="salvar" onClick={Save}>Salvar</button>
            </div>
        </div>
        {
        /* <p>Você não tem nenhum hábito cadastrado ainda. 
        Adicione um hábito para começar a trackear!</p> */}
    </Container>
    );
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
            margin-top:10px;
        }
        button{
            border-radius:5px;
            border-width:0px;
            font-size:18px;
            width:84px;
            height:35px;
        }
        .cancelar{
            margin-left: 120px;
            background-color:#ffffff;
            color:#52B6FF;
        }
        .salvar{
            margin-left: 8px;
            background-color:#52B6FF;
            color:#ffffff;
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
