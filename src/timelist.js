import axios from "axios"
import { useEffect, useState } from "react"
import {useParams} from 'react-router-dom';

export default function Timelist(){
    const {idFilme} = useParams()
    console.log(idFilme)
    const [sessions, setSessions] = useState([])
    useEffect(()=>{
        const requisition = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idFilme}/showtimes`)
        requisition.then(promise=> {
            setSessions(promise.data.days);
            console.log(sessions);
        })
    },[]);
    
    
    
    if(sessions === []){
        return(
            <h2>Carregando...</h2>
        )
    } else{
    return(
        <>
            <div className = "sectiontittle">
                <h1>Selecione o horário</h1>
            </div>
            <div className = "sessions">
                {sessions.map((hours)=> 
                <>
                    <h2 key = {hours.id} id = {hours.id}>{hours.weekday} - {hours.date}</h2>
                    {hours.showtimes.map(times => 
                    <button key = {times.id} className = "times" id = {times.id}>{times.name}</button>
                        )}
                    
                  </>  
                 )}
            </div>
        </>
    )}
}