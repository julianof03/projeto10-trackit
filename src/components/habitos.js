import { useState } from "react";
import styled from "styled-components";


export default function Habitos(){
    const [days, Setdays] = useState([]);

    

    return( 
    <Container>
        <div>
            <input placeholder="nome do hábito"></input>
            <div className="days">
                <div onClick={() => { 
                    const newarrfilter = daysarr => daysarr !== 0;
                    const newarr = days.filter(newarrfilter);
                    const daynerarr = [...newarr, 0];
                    Setdays(daynerarr);
                }}>D</div>

                <div onClick={() => {        
                    const newarrfilter = daysarr => daysarr !== 1;
                    const newarr = days.filter(newarrfilter);
                    const daynerarr = [...newarr, 1];
                    Setdays(daynerarr);
                }}>S</div>
                <div onClick={() => {        
                    const newarrfilter = daysarr => daysarr !== 2;
                    const newarr = days.filter(newarrfilter);
                    const daynerarr = [...newarr, 2];
                    Setdays(daynerarr);
                }}>T</div>
                <div onClick={() => {        
                    const newarrfilter = daysarr => daysarr !== 3;
                    const newarr = days.filter(newarrfilter);
                    const daynerarr = [...newarr, 3];
                    Setdays(daynerarr);
                }}>Q</div>
                <div onClick={() => {        
                    const newarrfilter = daysarr => daysarr !== 4;
                    const newarr = days.filter(newarrfilter);
                    const daynerarr = [...newarr, 4];
                    Setdays(daynerarr);
                }}>Q</div>
                <div onClick={() => {        
                    const newarrfilter = daysarr => daysarr !== 5;
                    const newarr = days.filter(newarrfilter);
                    const daynerarr = [...newarr, 5];
                    Setdays(daynerarr);
                }}>S</div>
                <div onClick={() => {        
                    const newarrfilter = daysarr => daysarr !== 6;
                    const newarr = days.filter(newarrfilter);
                    const daynerarr = [...newarr, 6];
                    Setdays(daynerarr);
                }}>S</div>
            </div>
            <div className="savestate">
                <button className="cancelar">Cancelar</button>
                <button className="salvar">Salvar</button>
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
            div{
                display:flex;
                align-items:center;
                justify-content:center;
                font-size:20px;
                width:30px;
                height:30px;
                border-radius:3px;
                border-style:solid;
                border-width:1px;
                color:#d4d4d4;
                border-color: #d4d4d4;
                margin-right:4px;
            }
        }
`;
