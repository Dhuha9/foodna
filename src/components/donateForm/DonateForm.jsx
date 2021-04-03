import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './DonationForm.scss';
import M from '../../dist/img/Media.png';

function DonateForm() {
  const [value, setValue] = useState({
    name: '',
    email: '',
    phone: '',
    food: '',
    description: '',
    address: '',
    photo: null,
  });
  console.log(value);
  const handleChange = (e) => {
    if (e.target.name === 'photo') {
      setValue({ ...value, photo: e.target.files[0] });
    } else {
      setValue({ ...value, [e.target.name]: e.target.value });
    }
  };
  // Create a root reference
  //var storageRef = firebase.storage().ref();

  // Create a reference to 'mountains.jpg'
  // var mountainsRef = storageRef.child('mountains.jpg');
  // mountainsRef.put(file).then((snapshot) => {
  //  console.log('Uploaded a blob or file!');
  // });
  return (
    <Container>
      <Row>
        <Col xs lg="4">
          <img className="mx-4 donationForm" src={M} alt="donations" />
        </Col>
        <Col className="px-4 donationDesc" xs lg="8">
          <h1 className="mb-4">Donate what you have</h1>
          <p className="donationText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
          </p>

          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                name="name"
                onChange={handleChange}
                type="text"
                placeholder="Enter your name"
              />
              <Form.Text className="text-muted">
                Please type your full name.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                onChange={handleChange}
                type="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We will never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                name="phone"
                onChange={handleChange}
                type="phone"
                placeholder="Enter your phone number"
              />
              <Form.Text className="text-muted">
                We will never share your phone number with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label
                className="my-1 mr-2"
                htmlFor="inlineFormCustomSelectPref"
              >
                Food form
              </Form.Label>
              <Form.Control
                name="food"
                onChange={handleChange}
                as="select"
                className="my-1 mr-sm-2"
                id="inlineFormCustomSelectPref"
                custom
              >
                <option value="0">Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                onChange={handleChange}
                as="textarea"
                rows={3}
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                name="address"
                onChange={handleChange}
                as="textarea"
                rows={3}
              />
            </Form.Group>

            <Form.File id="formcheck-api-regular">
              <Form.File.Label>Photo</Form.File.Label>
              <Form.File.Input name="photo" onChange={handleChange} />
            </Form.File>

            <Button variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default DonateForm;
