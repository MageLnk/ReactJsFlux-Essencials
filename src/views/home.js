import React, { useState, useContext } from 'react';
import { ContextExample } from '../Contexts/ContextExample'
import { Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
import './home.css';

const Home = props => {

  const [count, setCount] = useState(1);
  const {value} = useContext(ContextExample);

  return (
    <div>
      <Row>
        <Col className="tituloOKAse">
          <p>Ola k ase - Titulo o k ase - Home inicial o k ase</p>
        </Col>
      </Row>
      <br></br>
      <br></br>
      <br></br>
      <Row>
        <Col>
          {value}
        </Col>
      </Row>
      <br></br>
      <br></br>
      <br></br>
      <Row>
        <Col>
          <Button onClick={() => setCount(count + 1)}>
            Click me!
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>El total de clicks es: {count}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to='/otherhome'>
            <Button>
              Ir al otro home
          </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
