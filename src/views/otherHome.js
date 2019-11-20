import React, { useContext } from 'react';
import { ContextExample } from '../Contexts/ContextExample'
import { Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';

const OtherHome = props => {
    const { value, setValue } = useContext(ContextExample);
    return (
        <div>
            <Row>
                <Col className="tituloOKAse">
                    <p>Ola k ase - Titulo o k ase - Otro home o k ase</p>
                </Col>
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <Row>
                <Col>
                    <p>{value}</p>
                </Col>
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <Row>
                <Col>
                    <Button onClick={() => setValue('Probando setValue o k ase')}>
                        Change value
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>El total de clicks es: </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to='/'>
                        <Button>
                            Ir al otro home
                        </Button>
                    </Link>
                </Col>
            </Row>
        </div>
    );
}

export default OtherHome;
