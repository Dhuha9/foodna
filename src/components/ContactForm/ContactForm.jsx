import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import firebase from '../../firebase.js';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const [contact, setcontact] = useState({
    name: '',
    subject: '',
    email: '',
    message: '',
  });

  console.log(contact);

  const handleChange = (e) => {
    setcontact({ ...contact, [e.target.name]: e.target.value });
  };

  const convertInputtoParams = () => ({
    from_name: contact.name,
    to_name: 'foodna',
    subject: contact.subject,
    message: contact.message,
    reply_to: contact.email,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = convertInputtoParams();
    emailjs
      .send(
        'service_df4j52n',
        'template_0syoau4',
        templateParams,
        'user_YZX6k1HgBF6laI7P2ANKX'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    firebase.firestore().collection('Contact').add(templateParams);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter Name"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            name="subject"
            type="text"
            placeholder="Enter Subject"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control
            name="message"
            as="textarea"
            rows={3}
            placeholder="Message"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
    </div>
  );
}
