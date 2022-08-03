import { useLocation } from "react-router-dom";
import styled from "styled-components";

export default function RenderHoje(){

    const {state} = useLocation();
    const {id, name, email, password, token} = state;
    console.log(id);
    return(
        <Container>
            <div>{id}</div>
            <div>{name}</div>
            <div>{email}</div>
            <div>{password}</div>
            <div>{token}</div>
        </Container>
    );
}
const Container = styled.div``;