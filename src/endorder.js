import axios from "axios";
import {Link} from "react-router-dom"

export default function Endorder(props){
   const {movie, day, name,buyerName,buyerCPF,chairSelected,seats} = props.sucess

const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many`,{
	ids: chairSelected,
	name: buyerName,
	cpf: buyerCPF
})


    return(
        <>
        <div className="sectiontittle green">
            <h5>Pedido feito <b></b> com sucesso!</h5>

        </div>
        <ul>
            <li className="endtittle">Filme e sessão</li>
            <li>{movie.title}</li>
            <li>{day.date} - {name}</li>
            <li className="endtittle">Ingressos</li>
                {chairSelected && chairSelected.map((chairnumber) => {
                    while(chairnumber > 50){
                        chairnumber -= 50;
                    }

                    return(
                    <li>Assento {chairnumber}</li>
                    )
                })}
            <li className="endtittle">Comprador</li>
            <li>Nome: {buyerName}</li>
            <li>CPF: {buyerCPF}</li>
            <Link to="/"><button>Voltar pra Home</button></Link>
        </ul>
        
        </>
    )

}