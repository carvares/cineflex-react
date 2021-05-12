import { Link } from "react-router-dom";

export default function Topbar(){
    return(
        <Link to ='/'>
            <div className = "topbar">
            CINEFLEX 
        </div>
        </Link>
    )
}