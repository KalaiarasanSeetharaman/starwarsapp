import React,{useState, useEffect} from 'react';
import './Header.css';
import { Container, Row } from 'react-bootstrap';
import Menu from './Menu';

const Header =(props)=>{
    return(
        <Container id="headerContainer" fluid>
            <header>
                <Row>
                </Row>
                <Menu history={props.history}/>
            </header>
        </Container>
    )
}
export default Header;