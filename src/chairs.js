import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import RenderSeats from './renderchairs'
import {Link} from "react-router-dom";

export default function RenderChairs({sucess, setSucess}){
    

    
    const [buyerName, setBuyerName] = useState("")
    const [buyerCPF, setBuyerCPF] = useState("")
    const [chairSelected, setChairSelected] = useState([]);
    const {idSessao} = useParams()
    const [chairs, setChairs] = useState([]);
    useEffect(()=> {
        const requisition = axios.get(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSessao}/seats`
        )
        requisition.then(promise =>{
            setChairs(promise.data);
        })
    },[idSessao])

    const {seats, name, day, movie} = chairs
    

    if(seats !== undefined && seats !== []){


        //setSucess({movie,day,name,buyerName,buyerCPF,chairSelected});

    return(
        <>
        <div className = "sectiontittle">
                <h1>Selecione o(s) assento(s)</h1>
                </div>
        <div className = "chairs">
            {seats.map(seatChair =>
            <RenderSeats id = {seatChair.id} name = {seatChair.name} isAvailable = {seatChair.isAvailable}  chairSelected = {chairSelected} setChairSelected={setChairSelected} /> )}
            <div className = "chairslegend">
                <div>
                <div className = "seat selected">
                    
                </div>
                <p> Selecionado </p>
                </div>
                <div>
                <div className = "seat available">
                    
                </div>
                <p> Disponível </p>
                </div>
                <div>
                <div className = "seat ocupy">
                    
                </div>
                <p> Indisponível </p>
                </div>
            </div>
            <div className="inputs">
            <h4>Nome do comprador:</h4>
            <input placeholder="Digite seu nome..." onChange={(event) => setBuyerName(event.target.value)}></input>
            <h4>CPF do comprador:</h4>
            <input placeholder="Digite seu CPF..." onChange={(event) => setBuyerCPF(event.target.value)}></input>
            <Link to="/sucesso"><button onClick={()=> setSucess({movie,day,name,buyerName,buyerCPF,chairSelected,seats})}>Reservar assento(s)</button></Link>
            </div>
            
            <div className="bottombar">
                     <div className = "films small">
                     <img src={movie.posterURL} alt={movie.title}></img>
                    
                     </div>
                     <h3>{movie.title}
                     <p>{day.weekday} - {name}</p></h3>
                     </div>
        
        </div>
        </>
        
    )
} else {
    return(
        <h3>carregando...</h3>
    )
}
    


}