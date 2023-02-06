 
import './App.css';
 
import Login from './Component/View';
import Register from './Component/Register';
import CRUD from './/Component/CRUD';
import Header from './Header';
import Delete from './Component/Delete';
import Edit from './Component/Edit';
import React from "react";

import {
  BrowserRouter as Router, Route, Link,Routes} from "react-router-dom";
import Body from './Component/body';
import Del from './Component/DeleteComponent';
import View from './Component/View';
function App() {
  return (
    <div>
     <Header></Header>
    
        <Router>
 <Routes>
  <Route path='/'  element={ <Body/> }/>
 <Route path="/crud"    element={<CRUD/>}/>  
 <Route path="/view" element={ <View />}/>   
<Route path="/register" element={ <Register />}/> 
<Route path="/CRUD" element={ <CRUD />}/>  
<Route path="/Delete"  element={<Delete/>} /> 
<Route path="/Delete/:id"  element={<Del/>} />  
<Route path="/Edit"  element={<Edit/>} />    
</Routes>
</Router>


</div>

  );
}

export default App;
