import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import CreateHabitos from "./createHab";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function Hoje(){
    const {state} = useLocation();
    const {image, token} = state;
    const {SetStateaba, weekday} = useContext(UserContext);
    const [habarray, SetHabarray] = useState([]);
    const navigate = useNavigate();
    const percentage = 40;
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    useEffect(() => {
		const promise =  axios.get( 
            'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',
            config
          )
          promise.then((res) =>{
            SetHabarray(res.data);
        }
          );
	}, []);
    return(
        <Container>
            <div className="topBar">
                <p>trackit</p>
                <div><img src={image} alt="profile"/></div>
            </div>
            <div>
            <div className="criaHabitos">
                    <p>Meus hábitos</p>

                    <div ><p> + </p></div>
                    
                </div>
                {
                    habarray.map((hab)=> 
                        <div className="singleHab">
                            <div>
                                <p className="habname">{hab.name}</p>
                            </div>
                            <div className="deletebutton" >lixo</div>

                        </div>
                        
                    )
                }

            </div>
            <div className="footer">
                <p onClick={() => {navigate('/habitos', {state:{
                image: image,
                token: token}})
                }}>Hábitos</p>
                <div className="progressBar"><CircularProgressbar value={percentage} text={`Hoje`} /></div>
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
    }}
    
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
.ThreeDots{
    background-color:red;
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
`;