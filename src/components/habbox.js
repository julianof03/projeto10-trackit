import styled from "styled-components";
import axios from "axios";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
export default function HabBox({token}){

    const {weekday, habarray} = useContext(UserContext);

    function deletebutton(id){
        const config = {
            headers: { Authorization: `Bearer ${token}` }
          };
        const promise =  axios.delete( 
             `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
             config
           )
           promise.then((res) =>{
             console.log(res);  
             document.location.reload();   
        }
           );
     }
    function titlemessage(){
        if(habarray.length != 0){
            return("");  
        }else{
            return('Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!');
        }
    }
    return(
        <div className="HabBox">{habarray.map((hab)=> 
            <div className="singleHab">
                <div>
                    <p className="habname">{hab.name}</p>
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
                <div className="deletebutton" onClick={() => window.confirm("Tem Certeza?") ? deletebutton(hab.id)  : null}><ion-icon name="trash-outline"></ion-icon></div>

            </div>
            
    )}
    <div className="nulltext">{titlemessage()}</div>
    </div>
    );
}