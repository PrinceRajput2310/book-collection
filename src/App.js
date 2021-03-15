import React from "react";
import './App.css';
import FetchData from "./components/FetchData";
import SearchBook from "./components/SearchBook";
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";

function App() {
  return (
       <React.Fragment>
                <h1 style={{
            border:"1 px solid tomato",
            backgroundColor:"tomato",
            color:"white",
            width:"100%",
            textAlign:"center",
            padding:"16px",
            margin:"0px 0px"
    }}>Book Collection App</h1> 
            <br/>
                      <SearchBook />

             <BrowserRouter>
                 <span><Link to ="/fetchdata">All Books</Link></span>

                     <Switch>
                     <Route exact path="/fetchdata" component={FetchData} />
                     </Switch>
             </BrowserRouter>
             
           </React.Fragment>
  );
}

export default App;
