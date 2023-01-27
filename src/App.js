import './App.css'
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';
import Employer from './pages/Employer';
import Students from './pages/Students';
import Reports from './pages/Reports';
import Reviews from './pages/Reviews';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        
        <div className="AppGlass">
            <Switch>

              <Route exact path="/"> {/*dashboard route*/}
                <Sidebar/> 
                <MainDash />
                <RightSide/>
              </Route>

              <Route path="/Employer"> {/*Employer route*/}
                <Sidebar/> 
                <Employer/>
              </Route>

              <Route path="/Students"> {/*Students route*/}
                <Sidebar/> 
                <Students/>
              </Route>

              <Route path="/Reports"> {/*Reports route*/}
                <Sidebar/> 
                <Reports/>
              </Route>

              <Route path="/Reviews"> {/*Reviews route*/}
                <Sidebar/> 
                <Reviews/>
              </Route>
              
            </Switch>
          
        </div>
      </div>
    </Router>
  );
}

export default App;
