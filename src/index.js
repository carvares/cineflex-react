import reactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Topbar from './topbar';
import Filmlist from './filmlist'
import Timelist from './timelist'
import './styles/reset.css'
import './styles/styles.css'
import RenderChairs from './chairs';
import Endorder from './endorder';
import { useState } from 'react';


function App(){
    const [sucess, setSucess] = useState([])

return(
    <BrowserRouter>
        <Topbar/>   
        <Switch>
            <Route path="/" exact>
            <Filmlist/>
            </Route>
            <Route path="/sessoes/:idFilme" exact>
            <Timelist/>
            </Route>
            <Route path="/assentos/:idSessao" exact>
                <RenderChairs setSucess={setSucess}/>
            </Route>
            <Route path="/sucesso">
                {console.log(sucess)}
                <Endorder sucess={sucess}/>
            </Route>
        </Switch>
    </BrowserRouter>
)
}



reactDOM.render(<App/>, document.querySelector(".root"));