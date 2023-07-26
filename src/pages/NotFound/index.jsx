import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <Container style={{ backgroundColor: "red" }}>
      <h1 className='text-center text-white'>404</h1>
      <h1 className='text-center text-white'>Not Found</h1>
      <Link to={"/"}>Volver al inicio</Link>
    </Container>
  )
}
