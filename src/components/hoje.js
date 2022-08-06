import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import Habitos from "./habitos";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function RenderHoje(){

    const {state} = useLocation();
    const {id, name, image, email, password, token} = state;
    const { babao, stateaba, SetStateaba } = useContext(UserContext);
    const [days, Setdays] = useState([]);
    const percentage = 40;
    const [habarray, SetHabarray] = useState([]);
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
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
 
    useEffect(() => {
		const promise =  axios.get( 
            'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
            config
          )
          promise.then((res) =>{
            SetHabarray(res.data);
        }
          );
	}, []);
    function button(){
        SetStateaba(!stateaba);
       console.log(stateaba);
    }
    function deletebutton(bob){
       const promise =  axios.delete( 
            `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${bob}`,
            config
          )
          promise.then((res) =>{
            console.log(res);     
       }
          );
       console.log("hey");
    }
    return(
        <Container>
            <div className="topBar">
                <p>trackit</p>
                <div><img src={image} alt="profile"/></div>
            </div>
            <div>
                <div className="criaHabitos">
                    <p>Meus hábitos</p>

                    <div onClick={button}><p> + </p></div>
                    
                </div>
                <Habitos 
                    token = {token}
                    days = {days}
                    Setdays = {Setdays}/>
                {
                    habarray.map((hab)=> 
                        <div className="singleHab">
                            <div>
                                <p className="habname">{hab.name} {hab.id}</p>
                                <div className="days">                                                   
                                    {weekday.map((d)=> {
                                        const nhab = hab.days;
                                        const ndays = d.daynumber;
                                        if(nhab.includes(ndays)){
                                            return(
                                                <div class="container">                      
                                                    <span className="checkmark true">{d.dayname}</span>
                                                </div>);
                                            }
                                        else{
                                            return(
                                                <div class="container">                      
                                                    <span className="checkmark">{d.dayname}</span>
                                                </div>);
                                            }
                                            })}
                                </div>
                            </div>
                            <div className="deletebutton" onClick={() => {deletebutton(hab.id)}}>lixo</div>

                        </div>
                        
                    )
                }

            </div>
            <div className="footer">
                <p>Hábitos</p>
                <div className="progressBar"><CircularProgressbar value={percentage} text={`${percentage}%`} /></div>
                <p>Histórico</p>
            </div>
        </Container>
    );
}
const Container = styled.div`
display:flex;
flex-direction:column;
background-color: #f2f2f2;
width:375px;
height: 667px;
position:absolute;
.topBar{
    width: 375px;
    height: 70px;
    position: fixed;
    top: 0px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    background-color:#126ba5;
        p{
            font-family: 'Playball';
            font-style: normal;
            color: #ffffff;
            font-size: 49px;
            margin-left: 18px;
        }
        div{
            display: flex;
            align-items:center;
            justify-content:center;
            border-radius: 50px;
            width: 51px;
            height: 51px;
            overflow: hidden;
            margin-right: 18px;
            img{
                width: 100px;
                height: 51px;
            }
        }
}
.criaHabitos{
    padding-left:20px;
    padding-right:20px;
    width:335px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-top: 90px;
    p{
        color:#126ba5;
        font-family: 'Lexend Deca';
        font-style: normal;
    }
    div{
        p{
            color:#ffffff;
        }
        display:flex;
        align-items:center;
        justify-content:center;
        width: 40px;
        height: 35px;
        border-radius:5px;
        background-color:#52b6ff;
    }
}
.footer{
    width:375px;
    max-height: 40px;
    bottom:0px;
    color:#52B6FF;
    display: flex;
    position: absolute;
    align-items: center;
    background-color: #ffffff;
    justify-content: space-around;
    .progressBar{
        background-color:#ffffff;
        border-radius:60px;
        width: 110px;
        height:110px;
    }
}
.singleHab{
    position:relative;
    margin-top: 20px;
    margin-left:20px;
    margin-right: 20px;
    width: 340px;
    height:91px;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    background-color:#ffffff;
    font-family: 'Lexend Deca';
    flex-wrap:wrap;
    border-radius:5px;
    .habname{
        margin-top:-15px;
        width:295px;
        color:#666666;
        font-weight:400;
    }
    .days{
        margin-top:-8px;
        display:flex;
        .container {
                display: flex;
                align-items:center;
                justify-content:center;
                position: relative;
                padding-left: 35px;
                margin-bottom: 12px;
            }

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
                color:#dfdfdf;
                border-style:solid;
            }
            .true{
                color: #FFFFFF;
                background-color: #CFCFCF;
            }
    }   
    .deletebutton{
        background-color: aliceblue;
    }
}
.deletebutton{
    position:absolute;
    right:10px;
    top:10px;
}
@font-face {
  font-family: 'Playball';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url('../fonts/playball-v16-latin-regular.woff2') format('woff2'),
       url('../fonts/playball-v16-latin-regular.woff') format('woff');
}
`;