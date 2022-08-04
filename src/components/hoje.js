import { useLocation } from "react-router-dom";
import styled from "styled-components";

export default function RenderHoje(){

    const {state} = useLocation();
    const {id, name, image, email, password, token} = state;
    return(
        <Container>
            <div className="topBar">
                <p>trackit</p>
                <div><img src={image} alt="profile"/></div>
            </div>
            <div>
                <div className="criaHabitos">
                    <p>Meus hábitos</p>

                    <div><p> + </p></div>
                    
                </div>
                <div className="habbitSpace">
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </div>
            </div>
            <div className="footer">
                <p>Hábitos</p>
                <p>Hoje</p>
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
.habbitSpace{
    margin-top:20px;
    margin-left:20px;
    margin-right: 20px;
    font-family: 'Lexend Deca';
    color:#666666;
    flex-wrap:wrap;
}
.footer{
    width:375px;
    bottom:0px;
    color:#52B6FF;
    display: flex;
    position: absolute;
    align-items: center;
    background-color: #ffffff;
    justify-content: space-around;
}




@font-face {
  font-family: 'Playball';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url('../fonts/playball-v16-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('../fonts/playball-v16-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
`;