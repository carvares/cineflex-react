import reactDOM from 'react-dom';
import Topbar from './topbar';
import Filmlist from './filmlist'
import './styles/reset.css'
import './styles/styles.css'

function App(){
return(
    <>
    <Topbar/>
    <Filmlist/>
    </>
)
}



reactDOM.render(<App/>, document.querySelector(".root"));