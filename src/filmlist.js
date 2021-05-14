import axios from 'axios';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function Filmlist(){


    const [films, setFilms] = useState([]);
    useEffect(()=> {

    const requisition = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies')
    requisition.then(promise => {
        setFilms(promise.data);
    })
},[]);
    if(films ===[]){
        return(
            <h2>carregando...</h2>
        )
    } else{
    return (
        <>
            <div className = "sectiontittle">
                <h1>Selecione o filme</h1>
                </div>
            <div className = "filmslist">
            {films.map((banners) =>
            <Link to={`/sessoes/${banners.id}`}><div className = "films big" id = {banners.id}>
                <img src={banners.posterURL} alt={banners.title}></img>
            </div></Link>
        
        )}
        </div>
        </> 
        );
    }

}