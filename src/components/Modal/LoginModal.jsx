import React, { useState, useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
// import { Redirect } from 'react-router-dom';
import Login from '../OAuth/Login';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

export default function LoginModal() {
  const [show, setShow] = useState(true);
  let history = useHistory();
  const userContext = useContext(UserContext);

  const handleClose = () => {
    if (!userContext.user) {
      history.goBack();
    }
    setShow(false);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>You Should Sign in First</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please sign in inorder to proceed</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Back
          </Button>
          <Login />
        </Modal.Footer>
      </Modal>
    </>
  );
}
