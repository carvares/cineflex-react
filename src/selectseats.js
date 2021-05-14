
export default function SelectSeats(id,chairSelected,setChairSelected, selected, setSelected){

    const index = chairSelected.findIndex((element) => element === id ? true : false) 
    
    if (index === -1){
        setChairSelected([...chairSelected,id])
        setSelected("seat selected")
    
    } else{
        let arr = chairSelected
        arr.splice(index,1)
        setChairSelected(arr)
        setSelected("seat available")
    }
}