import React, { useState } from 'react';
import firebase from '../../firebase';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './DonationForm.scss';
import M from '../../dist/img/Media.png';
import 'firebase/storage';

function DonateForm() {
  const [value, setValue] = useState({
    title: '',
    name: '',
    phone: '',
    email: '',
    quantity: '',
    description: '',
    image: null,
    available: true,
  });
  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setValue({ ...value, image: e.target.files[0] });
    } else {
      setValue({ ...value, [e.target.name]: e.target.value });
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(value);

    const doc = firebase.firestore().collection('meals').doc();
    const id = doc.id;

    const storageRef = firebase.storage().ref(`meals/${id}`);
    const imageRef = storageRef.child(value.image.name);
    const image = await imageRef.put(value.image);

    const downlaodUrl = await image.ref.getDownloadURL();

    doc.set({ ...value, image: downlaodUrl });
    setValue({
      title: '',
      name: '',
      phone: '',
      email: '',
      quantity: '',
      description: '',
      image: null,
      available: true,
    });
    e.target.reset();
    alert('Your meal has been submitted');
  };

  return (
    <Container>
      <Row className="text-left overflow-hidden">
        <Col
          className="d-none d-sm-block side-div"
          style={{ backgroundImage: `url(${M})`, backgroundSize: 'contain' }}
          sm="4"
        ></Col>
        <Col xs="12" sm="8">
          <h1 className="mb-4">Donate your extra food</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <Form onSubmit={onSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                name="name"
                onChange={handleChange}
                type="text"
                placeholder="Enter your name"
                required
              />
              <Form.Text className="text-muted">
                Please type your full name.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPhone">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                name="phone"
                onChange={handleChange}
                type="phone"
                placeholder="Enter your phone number"
                required
              />
              <Form.Text className="text-muted">
                We will never share your phone number with anyone else.
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

            <Form.Group controlId="formBasicName">
              <Form.Label>Meal Title</Form.Label>
              <Form.Control
                name="title"
                onChange={handleChange}
                type="text"
                placeholder="Enter the meal name"
                required
              />
              <Form.Text className="text-muted">
                Please type meal name.
              </Form.Text>
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

            <Form.Group controlId="formBasicQuantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                name="quantity"
                onChange={handleChange}
                type="text"
                placeholder="The quantity of food"
              />
              <Form.Text className="text-muted">
                Please type the quantity of food.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicName">
              <Form.Label>Organization, Restaurant, or Individual</Form.Label>
              <Form.Control
                name="organization"
                onChange={handleChange}
                type="text"
                placeholder="Enter your organization name"
              />
              <Form.Text className="text-muted">
                Please type your organization name.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                name="address"
                onChange={handleChange}
                as="textarea"
                rows={3}
                required
              />
            </Form.Group>

            <Form.File id="formcheck-api-regular">
              <Form.File.Label>Image</Form.File.Label>
              <Form.File.Input required name="image" onChange={handleChange} />
            </Form.File>

            <Button className="my-4" variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default DonateForm;
