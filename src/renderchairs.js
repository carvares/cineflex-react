import { useEffect, useState } from "react"
import SelectSeats from './selectseats'

export default function RenderSeats(props){
    const {chairSelected, setChairSelected} = props
    const[selected, setSelected] = useState("")
    
    useEffect(()=>{
        
    if(selected === "seat selected"){
        return
    } 
    else if(props.isAvailable){
        setSelected("seat available")
    }
    else {
        setSelected("seat ocupy")
    }
},[])

    return(
        
        <div onClick={selected === "seat ocupy"?  ()=> "":() => SelectSeats(props.id,chairSelected,setChairSelected,selected, setSelected)} className = {selected}>{props.name}</div>
        )

}