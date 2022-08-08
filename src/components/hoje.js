import styled from "styled-components";
import Topbar from './topbar';
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import 'react-circular-progressbar/dist/styles.css';
import axios from "axios";
import Hojetitle from "./titlehojelist";

export default function Hoje(){
    const {state} = useLocation();
    const {image, token} = state;
    const { percentage, setPercentage} = useContext(UserContext);
    const [habarray, SetHabarray] = useState([]);
    const navigate = useNavigate();

    useEffect(() => { GetList();}, []);

    function GetList(){
        const promise =  axios.get( 
            'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',
            {
                headers: { Authorization: `Bearer ${token}` }
            }
          )
        promise.then((res) =>{
            SetHabarray(res.data); 
            const ages = res.data;
            let donearray = ages.filter(checkAdult);

            function checkAdult(res) {
                return res.done === true;
            }
            let value = donearray.length;
            let value1 = res.data.length;
            let value2 = value;
            let result = (value2/value1) *100;
            let restresult = result%1;
            let finalresult = result - restresult;
            setPercentage(finalresult);
            
            MakePercentage(res);
        }
          );
          
    }
    
    function DoneMark(id){
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const body = {}
            const promise =  axios.post( 
                `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id.toString()}/check`,body ,config
              );
              promise.then(() =>{
                GetList();
            });        
    }
    function UndoneMark(id){
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const body = {}
        const promise =  axios.post( 
            `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id.toString()}/uncheck`,body ,config
          );
          promise.then(() =>{
            GetList();
        });
    }
    function MakePercentage(){
        useEffect(() => { GetList();}, []);
    }

    return(
        <Container>
            <Topbar image = {image}/>
            <div>
                <Hojetitle />
                <div className="HabBox">
                {
                    habarray.map((hab)=> 
                        <div key={hab.id} className="singleHab">
                            <div>
                                <p className="habname">{hab.name}</p>
                                <p className="sequence">Sequência atual: {hab.currentSequence} dias</p>
                                <p className="sequence">Seu recorde: {hab.highestSequence} dias</p>
                            </div>
                            
                                <Label done = {hab.done}>
                                    <label className="container">
                                <input onClick={()=> {
                                    if(hab.done){
                                        UndoneMark(hab.id)
                                         
                                     }else{
                                        DoneMark(hab.id);
                                     }
                                    }} type="checkbox" done = {hab.done}/>
                                <span className="checkmark"></span>
                                </label>
                                </Label>                      
                        </div>                
                    )
                }
                </div>
            </div>
            <div className="footer">
                <p onClick={() => {navigate('/habitos', {state:{
                image: image,
                token: token}})
                }}>Hábitos</p>
                <div className="progressBar">
                    <CircularProgressbar value={percentage} background={true} backgroundPadding={6} text={`Hoje`} styles={buildStyles({
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
height: 667px;
position:absolute;
.singleHab{
    
    position:relative;
    margin-top: 0px;
    margin-bottom:10px;
    margin-left:20px;
    margin-right: 20px;
    width: 332px;
    padding-left:8px;
    height:91px;
    display:flex;
    align-items:center;
    justify-content:space-around;
    background-color:#ffffff;
    font-family: 'Lexend Deca';
    flex-wrap:wrap;
    border-radius:5px;
        .habname{
        font-size:20px;
        margin-top:0px;
        margin-bottom:0;
        width:295px;
        color:#666666;
        font-weight:400;
    }
    .sequence {
        font-size:12px;
        margin-top:0px;
        margin-bottom:0px;
        color:#666666;
    }
    
}  
.HabBox{
    height:500px;
    overflow-y:scroll;
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
        font-size:17px;
        background-color:#52b6ff;
        border-radius:60px;
        width: 91px;
        height:91px;
    }
}
`;
const Label = styled.div`
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
        position: absolute;
        top: -30px;
        right:10px;
        height: 69px;
        width: 69px;
        border-radius:5px;
        background-color: ${({done})=> {
        if(!done){
            return("#e7e7e7");
            }
            else{
                return("#8fc549");}
            }};
    
    }

    /* On mouse-over, add a grey background color */
    .container:hover input ~ .checkmark {
        background-color: ${({done})=> {
        if(!done){
            return("#e7e7e7");
            }
            else{
                return("#8fc549");}
            }};
    }

    /* When the checkbox is checked, add a blue background */
    .container input:checked ~ .checkmark {
        background-color: ${({done})=> {
        if(!done){
            return("#e7e7e7");
            }
            else{
                return("#8fc549");}
            }};
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
        content: "";
        position: absolute;
        display: flex;
    }

    /* Show the checkmark when checked */
    .container input:checked ~ .checkmark:after {
        display: block;
    }

    /* Style the checkmark/indicator */
    .container .checkmark:after {
        left: 25px;
        top: 10px;
        width: 15px;
        height: 30px;
        border: solid white;
        border-width: 0 8px 8px 0;
        border-radius: 5px 5px 5px 5px;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }


`;