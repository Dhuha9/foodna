import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
// import { Redirect } from 'react-router-dom';
import Login from '../OAuth/Login';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function LoginModal({ handleUserChange }) {
  const [show, setShow] = useState(true);
  let history = useHistory();

  const handleUser = () => {
    const newUserState = JSON.parse(localStorage.getItem('currentUser'));

    handleClose(newUserState);
  };

  const handleClose = (newUserState) => {
    if (!newUserState) {
      history.goBack();
    }

    setShow(false);
    handleUserChange();
  };

  return (
    <>
      {/* {!show && !user && <Redirect to="/" />} */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>You Should Sign in First</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please sign in inorder to proceed</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Back
          </Button>
          <Login handleUser={handleUser} />
        </Modal.Footer>
      </Modal>
    </>
  );
}
LoginModal.propTypes = {
  handleUserChange: PropTypes.func.isRequired,
};
