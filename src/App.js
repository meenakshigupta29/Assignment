import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

 

import { render }  from "react-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import ReactDOM from 'react-dom'

import { Button } from 'react-bootstrap';
import { Navbar, Nav,Form,FormControl } from 'react-bootstrap';
import { Container,Row,Col,Media } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook,faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faUser,faShareAltSquare,faEnvelope,faComment,faRssSquare, faCalendar, faSearch} from '@fortawesome/free-solid-svg-icons'
import ReactPlayer from  'react-player';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
 
// library.add(faUser);
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

    
    class App extends Component{
     
    render(){
      return (
        
        <div>
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Rtcamp</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#About">About</Nav.Link>
      <Nav.Link href="#Services">Services</Nav.Link>
      <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
      <Nav.Link href="#Contact">Contact</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info"><FontAwesomeIcon icon={faSearch}/></Button>
    </Form>
  </Navbar>
  <Container>
          <Row className="row">
            <Col className ="col" lg={4}>
              {/* <Row>
                <Col lg={2}> */}

               <h2 >Company Tour </h2>
            <ReactPlayer 
            url="https://youtu.be/VR7r16fy4dU"
            controls 
            playbackRate ={2}
            width="345px"
            height="400px"
            
            />
            <h2>Recent Work</h2>
            <div className="col1">
            
              <h1 className="icon1"> <FontAwesomeIcon icon={faEnvelope}/></h1>
                <h1 className="icon1"><FontAwesomeIcon icon={faEnvelope}/></h1><br/>
                <h1 className="icon1"><FontAwesomeIcon icon={faEnvelope}/></h1>
                <h1 className="icon1"><FontAwesomeIcon icon={faEnvelope}/></h1>
            </div>
            </Col>
            {/* <Col lg={2}>
              <h2>Recent Work</h2>
              <h1> <FontAwesomeIcon icon={faEnvelope}/></h1>
                <h4><FontAwesomeIcon icon={faEnvelope}/></h4>
                <h4><FontAwesomeIcon icon={faEnvelope}/></h4>
                <h4><FontAwesomeIcon icon={faEnvelope}/></h4>
            </Col>
            </Row>
     */}
            <Col className="col" lg={4}><Form className="frm">
            <h2>Hire Us</h2>
            
            <Form.Group controlId="formBasicEmail">
            <span className="form">
    <Form.Label>Email</Form.Label>
    <Form.Control type="passwordEmail"  />
    </span>
  </Form.Group>
         
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password"  />
  </Form.Group>
  
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Mobile</Form.Label>
    <Form.Control type="mobile"  />
  </Form.Group>
  
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Url</Form.Label>
    <Form.Control type="url"  />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Services</Form.Label>
    <Form.Control as="select" multiple>
      <option>Logo Design</option>
      {/* <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option> */}
    </Form.Control>
    </Form.Group>
    <Form.Group controlId="Startdate">
    <Form.Label>Start Date</Form.Label>
    <Form.Control type="date"  name="date"  />
    <span><FontAwesomeIcon icon={faCalendar}/></span>
  </Form.Group>
  
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Details</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
  
  <Button variant="primary" type="submit" className="text-center">
    Get a free quote
  </Button>

</Form></Col>
            <Col className="col"lg={4}>
           <span className="chat"> <FontAwesomeIcon icon={faComment}/></span><span>Click here to chat with us</span> 
            <span class="im">
            <Media>
  <img
    width={300}
    height={250}
    className="mr-3"
    src="https://tse3.mm.bing.net/th?id=OIP.WiwPvQ_ZPCtl3SYSXkOn7AHaE8&pid=Api&P=0&w=230&h=154"
    alt="Recent Offer"
  />
  </Media>
  </span>
  {/* Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="home" title="Recent 
  articles">
    <Sonnet< />
  </Tab>
  <Tab eventKey="profile" title="Profile">
    <Sonnet />
  </Tab> */}
  <div class="col3">
    <ul>
      <li><a href="#Happy new year"></a> Happy new year</li>
    </ul>
  </div>
            </Col>

          </Row>
          <Row>
            <Col><h2>Testimonial</h2>
        
            <span className="icon3"><h1 className="i"><FontAwesomeIcon className="icon" icon ={faUser}/></h1><span>This guys rocks next apple in marking<br/></span></span>
           <span className="icon3"> <h1 className="i"><FontAwesomeIcon icon={faUser}/></h1><span>They made me fall in love with open source<br/></span></span>
            </Col>
            <Col><h2>Tag Cloud</h2>
            Company Anniversary Released Featured Wordpress
            Logo Server Linux Career Jobs Nginz Linux
            Ubuntu iPhone
            </Col>
            <Col><h2>About us</h2>
            rtCamp began as a blog network in the mid 2000’s. We like to think that we 
            were ahead of the curve, embracing open source values, a remote culture and a flat,
             agile company structure before it was cool. (Fun fact: “rt” stands for round table)

             <span className="icon">
                <h4 className="i"> <FontAwesomeIcon icon={faFacebook}/></h4><h4 className="i"><FontAwesomeIcon icon={faTwitter}/></h4>
                <h4 className="i"><FontAwesomeIcon icon={faRssSquare}/></h4>
                <h4 className="i"><FontAwesomeIcon icon={faShareAltSquare}/></h4>
             </span>
             </Col>
          </Row>

        </Container>
    
  </div>
    
    
    
    
    
      
     )
      }
}
export default App;
