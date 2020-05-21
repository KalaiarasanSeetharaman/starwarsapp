import React,{Fragment, useState, useContext} from 'react';
import './SignIn.css';
import { Container, Row, Col,Form, Button  } from 'react-bootstrap';
import {
    NavLink
  } from "react-router-dom";
import axios from 'axios';
import {StarWarContext} from '../Context/StarwarContext';

import API from './../../Api';


const SignIn = (props)=>{

    const [payload, setPayload] = useState({});
    const [error, setError] = useState('');
    const {dispatchcommon, dispatchuser} = useContext(StarWarContext);
    const handleSubmit=(event)=>{
        event.preventDefault();
        dispatchcommon({
            type:'SETLOADER',
            value:true,
        });
        API(`people?search=${payload.email}`)
            .then(response=>{
                dispatchcommon({
                    type:'SETLOADER',
                    value:false,
                });
                let userDatas = response.data.results;
                let userData = userDatas.filter((user)=>{
                    return(
                        user.name == payload.email && user.birth_year == payload.password
                    )
                })
                setPayload({});
                if(userData.length>0){
                    dispatchuser({
                        type:'SETUSER',
                        data:userData,
                    });
                    dispatchcommon({
                        type:'SIGNIN',
                        value:true,
                    });
                    sessionStorage.setItem('isLoggedIn', true);
                    props.history.push('/starwar/search');
                }else{
                    setError('Name and Birth does not match');
                }
            })

    }

    const handleBlur=({target})=>{
        setError('');
        setPayload({
            ...payload,
            [target.name]:target.value
        });  
    }
    
    return(      
        <Fragment>
            <Container fluid className="signinpage">
                <Row className="sign-logo-wrap">
                    <Col md={12}>
                        <NavLink className="logo" to="/" title="Star Wars">
                            <img style={{width:"120px"}} src="/images/logo.png" title="Star Wars" alt="Star Wars"/>
                        </NavLink>
                    </Col>
                </Row>
                <div className="logincard">
                    <Col md={12} className="loginCard_banner">
                        Sign In As Star Wars Character
                    </Col>
                    <div className="formcontainer">
                        <div className="d-heading loginCard__heading">Login</div>
                        <Form onSubmit={(e)=>handleSubmit(e)} method="post">
                                <Form.Group controlId="formGridEmail">
                                    <Form.Control onBlur={(e)=>handleBlur(e)} name="email" required type="text" placeholder="Enter star war character name" />
                                </Form.Group>
                                <Form.Group  controlId="formGridPassword">
                                    <Form.Control onBlur={(e)=>handleBlur(e)} name="password" required type="password" placeholder="Birth year of character" />
                                </Form.Group>
                                {
                                    (error!='') && <p><span className="error">{error}</span></p>
                                }
                            <Button variant="primary" className="signBtn" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </Container>
        </Fragment>
    )

}
export default SignIn;