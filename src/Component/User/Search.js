
import React,{Fragment, useState, useContext, useEffect} from 'react';
import { Container, Row, Col,Form, Button  } from 'react-bootstrap';
import './Search.css';
import axios from 'axios';
import {StarWarContext} from '../Context/StarwarContext';
import API from './../../Api';
import Suggestions from './Suggestions'

const Search = React.memo((props)=>{
    const [planetData, setPlanetData] = useState([]);
    const [planetsearchName, setPlanetSearchName] = useState('');
    const {dispatchcommon, dispatchuser} = useContext(StarWarContext);

    const handleInputChange = (e) =>{
        e.preventDefault();
        var planetname = e.target.value;
        setPlanetSearchName(planetname);
        props.handleSeachChange();
        API(`planets?search=${planetname}`)
        .then(response=>{
            let planetDatas = response.data.results;
            setPlanetData(planetDatas);
        })

    }
    useEffect(()=>{
        setPlanetData([]);
        setPlanetSearchName(props.searchName);
    },[props.planetDataEmpty,props.searchName])

    return(      
        <Fragment>
            <div className="searchForm">
                <Col md={12} className="searchForm_banner">
                    Search <span>STARWARS</span> Planets
                </Col>
                <Form className="formforsearch" method="post" onSubmit={(e)=>e.preventDefault()}> 
                    <Form.Group controlId="formGroupPlanet">
                        <Form.Control 
                            type="text"
                            name="planetname" 
                            placeholder="Enter name to search"
                            onChange={(e)=>handleInputChange(e)}
                            value={planetsearchName}
                        />
                    </Form.Group>
                </Form>
                <Suggestions
                    planetsData = {planetData}
                    handleOnclick = {props.handleOnclick}
                />
            </div>
        </Fragment>
    )
});
export default Search;