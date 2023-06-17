import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
const Footer = () => {
const currentYear = new Date().getFullYear()

  return (
    <footer>
        <Container>
            <Row>
                <Col className='text-center py-3'>
                    <p>Softech Solutions &copy; {currentYear} | <a href='https://jttech.co.za'>JT Tech</a></p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer