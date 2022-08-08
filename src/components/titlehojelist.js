import dayjs from "dayjs";
import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
require('dayjs/locale/pt')

export default function Hojetitle(){
    const { percentage} = useContext(UserContext);
    dayjs.locale('pt');
    function titlemessage(){
        if(percentage){
            return(`${percentage}% dos hábitos concluídos`);  
        }else{
            return('Nenhum hábito concluído ainda');
        }
    }
    return( 
    <Container percentage = {percentage} className="criaHabitos">
        <p>{dayjs().format('dddd')}, {dayjs().format('DD/MM')}</p>
        <p className="habcount"> {titlemessage()} </p>
    
    </Container>);
}
const Container = styled.div`
   
    padding-left:20px;
    padding-right:20px;
    width:335px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
    font-family: 'Lexend Deca';
    margin-top: 110px;
        p{
        font-size:22px;
        margin-top: 0px;
        height:5px;
        color:#ffffff;
        display:flex;
        align-items:center;
        justify-content:center;
        border-radius:5px;
        color:#126ba5;
    }
        .habcount{
            font-size:17px;
            color:${({percentage})=> {
        if(!percentage){
            return("#bababa");
            }
            else{
                return("#8fc549");}
            }};
        }
`;