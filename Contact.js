import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Contact() {
  return (
    <div className="demo-wrap">
  <img
    className="demo-bg"
    src="https://i.ytimg.com/vi/Jo9yksmQRrk/maxresdefault.jpg"
    alt=""
  />
      <Form className='Contact'>
        <h1>Get In Touch</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  className='input-contact'/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" className='input-contact' />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" style={{border:'none'}}>
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Contact