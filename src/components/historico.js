import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import Topbar from './topbar';
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';


export default function Historico(){
    const navigate = useNavigate();
    const {state} = useLocation();
    const { percentage} = useContext(UserContext);
    const {image, token} = state;
    return(
        <Container>
            <Topbar image = {image}/>
                <div className="criaHabitos">
                    <p>Histórico</p>
                </div>
                <div className="HabBox">       
                <p> Em breve você poderá ver o Histórico dos seus hábitos aqui!</p>                       
                </div>

            <div className="footer">
                <p onClick={() => {navigate('/habitos', {state:{
                image: image,
                token: token}})
                }}>Hábitos</p>
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
height: 700px;
position:absolute;
.criaHabitos{
    margin-top:70px;
    margin-left:15px;
    font-size:23px;
    color:#126ba5;
    font-family: 'Lexend Deca';
}
.HabBox{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    font-family: 'Lexend Deca';
    margin-top:-20px;
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
`;