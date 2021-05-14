import axios from "axios"
import { useEffect, useState } from "react"
import {Link, useParams} from 'react-router-dom';

export default function Timelist(){
    
    const {idFilme} = useParams()


    const [sessions, setSessions] = useState([])
    useEffect(()=>{
        const requisition = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idFilme}/showtimes`)
        requisition.then(promise=> {
            setSessions(promise.data);

            console.log(sessions);
        })
    },[]);
   
    const {days, posterURL, title} = sessions

    if(days !== undefined && days !== []){
        return(
            
        <>
            <div className = "sectiontittle">
                <h1>Selecione o horário</h1>
            </div>
            <div className = "sessions">
                {days.map((hours)=> 
                
                <>
                
                    <h2 key = {hours.id} id = {hours.id}> {hours.weekday} - {hours.date}</h2>
                    {hours.showtimes.map(times => 
                    <Link to={`/assentos/${times.id}`}><button key = {times.id} className = "times" id = {times.id}>{times.name}</button></Link>
                        )}
                    
                  </>  
                 )}
                 <div className="bottombar">
                     <div className = "films small">
                     <img src={posterURL}></img>
                    
                     </div>
                     <h3>{title}</h3>
                     </div>
            </div>
        </>
    )

    } else {

        

    return(
        <>
            <h1>carregando...</h1>
            </>
    )
        
}

    console.log(sessions)
}