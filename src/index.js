import reactDOM from 'react-dom';
import Topbar from './topbar.js';
import './styles/reset.css'
import './styles/styles.css'

function App(){
return(
    <>
    <Topbar/>
    </>
)
}



reactDOM.render(<App/>, document.querySelector(".root"));