import React from 'react';
import { Container, Navbar, Nav, Row, Image } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    useParams
  } from "react-router-dom";
const Menu = (props) =>{
    const handleOnclick = (e) =>{
        e.preventDefault();
        sessionStorage.removeItem("isLoggedIn");
        props.history.push('/');
    }
    const isloggedIn = sessionStorage.getItem('isLoggedIn');
    let signinsignout = '';
    if(isloggedIn){
        signinsignout = <a className="nav-link parentlink" onClick={(e)=>{handleOnclick(e)}}>Sign Out</a>;
    }else{
        signinsignout = <NavLink className="nav-link parentlink" to="/sign-in">Sign In</NavLink>;
    }
    return(
        <Navbar  bg="light" expand="lg">
            <Container className="topmenu" fluid>
                <Navbar.Brand href="/" className="logo">
                <img style={{width:"120px"}} src="/images/logo.png" title="Weaver" alt="Weaver"/>

                </Navbar.Brand>
                                                       
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <div className="mainmenu pull-right">
                        {signinsignout}
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Menu;