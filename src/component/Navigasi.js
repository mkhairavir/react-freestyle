import React from 'react'
import {withRouter} from 'react-router-dom'
import {Nav, Container, Row, Col} from 'react-bootstrap'
import {useSelector} from 'react-redux'


const Navigasi = (props) => {
  const cart = useSelector(state => state)
  const totalCart = cart.pizza.count + cart.burger.count + cart.topping.data.length;
  console.log("total cart",totalCart)
    return (
        <div>
          <Container fluid>
            <Row>
              <Col>
                <Nav className="justify-content-center" >
                    <Nav.Item>
                        <Nav.Link onClick={() => {props.history.push("/")}}>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link onClick={() => {props.history.push("/shop")}}>shop</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link onClick={() => {props.history.push("/signup")}}>Sign</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Col>
                <Col></Col>
                <Col>
                <p>Jumlah Produk yang anda beli : {totalCart} </p>        
                </Col>

        
          </Row>
        </Container>
        </div>
    )
}

export default withRouter(Navigasi) 