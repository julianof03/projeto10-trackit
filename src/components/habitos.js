import styled from "styled-components";
import axios from "axios";
import Topbar from './topbar';
import CreateHabitos from "./createHab";
import HabBox from "./habbox";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function RenderHoje(){
    const {
        SetStateaba, percentage,
        SetHabarray, days, Setdays,
    } = useContext(UserContext);
    const {state} = useLocation();
    const {image, token} = state;
    const navigate = useNavigate();
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
    function Statebutton(){
        SetStateaba(true);
    }
    return(
        <Container>
            <Topbar image={image}/>
            <div>
                <div className="criaHabitos">
                    <p>Meus hábitos</p>

                    <div onClick={Statebutton}><p> + </p></div>
                    
                </div>
                <CreateHabitos 
                    token = {token}
                    days = {days}
                    Setdays = {Setdays}/>
                <HabBox token = {token}/>

            </div>
            <div className="footer">
                <p>Hábitos</p>
                <div className="progressBar" onClick={() => {navigate('/hoje', {state:{
                image: image,
                token: token}})
                }}><CircularProgressbar value={percentage} background={true} backgroundPadding={6} text={`Hoje`} styles={buildStyles({
                        // Rotation of path and trail, in number of turns (0-1)
                        rotation: 0,

                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'

                        // Text size
                        textSize: '16px',

                        // How long animation takes to go from one percentage to another, in seconds
                        pathTransitionDuration: 0.5,

                        // Can specify path transition in more detail, or remove it entirely
                        // pathTransition: 'none',

                        // Colors
                        pathColor: `#ffffff`,
                        textColor: '#ffffff',
                        trailColor: '#52b6ff',
                        backgroundColor: '#52b6ff',
                    })}
                    /></div>
                <p onClick={() => {navigate('/historico', {state:{
                image: image,
                token: token}})
                }}>Histórico</p>
            </div>
        </Container>
    );
}
const Container = styled.div`
display:flex;
flex-direction:column;
background-color: #f2f2f2;
width:375px;
height: 700px;
position:absolute;
overflow-y:hidden;
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
.HabBox{   
    height: 510px;
    width:375px;
    overflow-y:scroll;
}
.nulltext{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    font-family: 'Lexend Deca';
    margin-top:20px;
    height: 100px;
    color:#666666;
    margin-left:15px;
}
.footer{
    width:375px;
    max-height: 100px;
    bottom:0px;
    color:#52B6FF;
    display: flex;
    position: absolute;
    align-items: center;
    background-color: #ffffff;
    justify-content: space-around;
    .progressBar{
        position: absolute;
        bottom:0px;
        font-size:17px;
        background-color:#52b6ff;
        border-radius:60px;
        width: 91px;
        height:91px;
    }
}
.singleHab{
    position:relative;
    margin-top: 20px;
    margin-left:25px;
    width: 320px;
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
    position:absolute;
    right:20px;
    top:20px;
}
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