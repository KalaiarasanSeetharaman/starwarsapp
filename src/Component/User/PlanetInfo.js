import React,{Fragment} from 'react';
import { Container, Row, Col, Card  } from 'react-bootstrap';
import {isEmpty} from 'lodash'

const PlanetInfo = React.memo(({planetDetails})=>{
    if(!isEmpty(planetDetails)){
        return( 
            <Fragment>
                <Container className="cardcontainer">
                <Card>
                    <Card.Header><h4>Information</h4></Card.Header>
                    <Card.Body>
                        <Card.Title><h5>{planetDetails.name}</h5></Card.Title>
                            <Row>
                                <Col md={3} className='infolabel'>Population</Col>
                                <Col md={8} className='infodetail'>{planetDetails.population}</Col>
                            </Row>
                            <Row>
                                <Col md={3} className='infolabel'>Diameter</Col>
                                <Col md={8} className='infodetail'>{planetDetails.diameter}</Col>
                            </Row>
                            <Row>
                                <Col md={3} className='infolabel'>Climate</Col>
                                <Col md={8} className='infodetail'>{planetDetails.climate}</Col>
                            </Row>
                            <Row>
                                <Col md={3} className='infolabel'>Orbital Period</Col>
                                <Col md={8} className='infodetail'>{planetDetails.orbital_period}</Col>
                            </Row>
                    </Card.Body>
                </Card>
                </Container>
            </Fragment>
        )
    }else{
        return(
            ""
        )
    }

});
export default PlanetInfo;