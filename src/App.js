 
import './App.css';
 
import Login from './Component/Login';
import Register from './Component/Register';
import CRUD from './/Component/CRUD';
import Header from './Header';
import Delete from './Component/Delete';
import Edit from './Component/Edit';
import React from "react";

import {
  BrowserRouter as Router, Route, Link,Routes} from "react-router-dom";
import Body from './Component/body';
function App() {
  return (
    <div>
     <Header></Header>
    
        <Router>
 <Routes>
  <Route path='/'  element={ <Body/> }/>
 <Route path="/crud"    element={<CRUD/>}/>  
 <Route path="/login" element={ <Login />}/>   
<Route path="/register" element={ <Register />}/> 
<Route path="/CRUD" element={ <CRUD />}/>  
<Route path="/Delete"  element={<Delete/>} />  
<Route path="/Edit"  element={<Edit/>} />    
</Routes>
</Router>


</div>

  );
}

export default App;
