import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Components/Home/Home'
import Navigation from './Components/Common/Navigations/Navigation';
import './App.css';


function App() {
  return (
    <div className="App">
      
       <BrowserRouter>
        <Navigation/>
            <Switch>
                <Route path= "/" exact>
                  <Home/>
                </Route>
            </Switch>
       </BrowserRouter>
    
    </div>
    
  );
}

export default App;
