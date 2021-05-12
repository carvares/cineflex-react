import axios from 'axios';
import {useState, useEffect} from 'react';

export default function Filmlist(){

    const [films, setFilms] = useState([]);
    useEffect(()=> {

    const requisition = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies')
    requisition.then(promise => {
        setFilms(promise.data);
    })
},[]);
    return (
        <>
            <div className = "sectiontittle">
                <h1>Selecione o filme</h1>
                </div>
            <div className = "filmslist">
            {films.map((banners) =>
            <div className = "films" id = {banners.id}>
                <img src={banners.posterURL} alt={banners.title}></img>
            </div>
        
        )}
        </div>
        </> 
        );

}