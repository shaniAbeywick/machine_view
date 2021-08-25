import Sidebar from "./components/sidebar/Sidebar"
import Controller from "./components/controller_sidebar/Controller"
import Topbar from "./components/topbar/Topbar"
import Level2 from "./Level2/level2"
import "./app.css"
import Home  from  "./pages/home/Home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>

      <Route exact path= '/'component={Level2} />

       <div className="AppX">
       <Topbar/>
       <div className="container">
        
        <Route path= '/home'component={Sidebar} />
       
        <Route path='/controller' component={Controller} />

        <Home/>
  
        </div>
    </div>
    </Switch>
    </Router>
    
   
  );
}

