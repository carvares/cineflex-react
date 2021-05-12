import reactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Topbar from './topbar';
import Filmlist from './filmlist'
import Timelist from './timelist'
import './styles/reset.css'
import './styles/styles.css'


function App(){
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
        </Switch>
    </BrowserRouter>
)
}



reactDOM.render(<App/>, document.querySelector(".root"));