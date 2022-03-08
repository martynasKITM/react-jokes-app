import React from "react";
import {BrowserRouter as Router,Routes ,Route } from 'react-router-dom';
import Favorites from "./favorites/Favorites";
import Jokes from "./jokes/Jokes";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./nav/Nav";

class App extends React.Component{


    render(){

    return(
        <div className="container">
            <Router>
                {/* Responsive navbar */}
                <Nav/>
                {/* Page Content */}
                <Routes>
                    <Route  path="/" element={<Jokes/>}/>
                    <Route  path="/favorites" element={<Favorites/>}/>
                </Routes>
            </Router>
        </div>
    )
  }
}

export default App;
