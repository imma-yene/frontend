import { Col, Container, Row } from "react-bootstrap";
import { Fade } from "react-reveal";
import React from "react";

function Body(){
 return(
    <Container className="main">
      <Row> 
        <Col>
            <Fade left>
              <div className="card ">
           
      <div className="card-body">
    <h5 className="card-title">React </h5>
    <p className="card-text">Get started from scrach to advance in amharic and affan oromo </p>
    <br>
    </br>
    <button className="btn btn-primary">Get started</button>
 
  </div>
              </div>
            </Fade> 
            </Col>
            <Col>
            <Fade top>
              <div className="card ">
           
      <div className="card-body">
    <h5 className="card-title">Node Js</h5>
    <p className="card-text">Get started from scrach to advance in amharic and affan oromo </p>
    <br>
    </br>
    <button className="btn btn-primary">Get started</button>
 
  </div>
              </div>
            </Fade> 
            </Col>
            <Col>
            <Fade right>
              <div className="card ">
           
      <div className="card-body">
    <h5 className="card-title">Python</h5>
    <p className="card-text">Get started from scrach to advance in amharic and affan oromo </p>
    <br>
    </br>
    <button className="btn btn-primary">Get started</button>

 
  </div>
              </div>
            </Fade> 
            </Col>
            </Row>
            <br>
            </br>
            <br>
            </br>
          <div className="pict">
         
            
            </div>  
           
      </Container>
 )
 
}
export default Body;