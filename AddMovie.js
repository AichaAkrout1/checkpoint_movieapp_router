import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function AddMovie({movies, setmovies}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newmovie, setnewmovie] = useState({
      name:'',
      img:'',
      description:'',
      rating:'',
    });
    const add=()=>{
      setmovies([...movies, newmovie])
    }
  return (
    <div>
        <>
      <Button variant="primary" onClick={handleShow} style={{border:'none' , color:'#197841'}}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form className='movieform'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Name</Form.Label>
        <Form.Control type="text" placeholder="Enter movie name" onChange={(e) => setnewmovie({...newmovie , name:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Image</Form.Label>
        <Form.Control type="text" placeholder="Enter movie image" onChange={(e) => setnewmovie({...newmovie , img:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Description</Form.Label>
        <Form.Control type="text" placeholder="Enter movie Description" onChange={(e) => setnewmovie({...newmovie , description:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Rating</Form.Label>
        <Form.Control type="text" placeholder="Enter movie rating"  onChange={(e) => setnewmovie({...newmovie , rating:e.target.value})}/>
      </Form.Group>
    </Form>
    
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} style={{background:'grey', color:'#fff', border:'none'}}>
            Close
          </Button>
          <Button variant="primary" style={{border:'none'}} onClick={()=> {add(); handleClose()}}
          >
            Add 
          </Button> 
        </Modal.Footer>
      </Modal>
    </>
    </div>
  )
}

export default AddMovie