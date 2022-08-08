import styled from "styled-components";
export default function Topbar({image}){
    return(
        <Container>
        <div className="topBar">
            <p>trackit</p>
            <div><img src={image} alt="profile"/></div>
        </div>
        </Container>
    );
}
const Container = styled.div`
.topBar{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.1) 0px 8px 16px -8px;
    z-index:1;
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
    }}
`;
