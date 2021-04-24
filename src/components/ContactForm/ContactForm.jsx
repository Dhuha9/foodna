import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import firebase from '../../firebase.js';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';
import './ContactForm.scss'

export default function ContactForm() {
  const intialState = {
    name: '',
    subject: '',
    email: '',
    message: '',
  };
  const [contact, setcontact] = useState(intialState);

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
  console.log(contact);
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
    setcontact(intialState);
    alert('Your Message has been sent!');
  };

  const { t } = useTranslation();

  return (
    <div className="contact-form mx-auto my-5 text-left">
      <h4 className="font-weight-bold"> {t('ContactUsComponent.title')}</h4>
      <div className="my-4"> {t('ContactUsComponent.content')}</div>
      <Form onSubmit={handleSubmit} className="">
        <Form.Group controlId="formGroupPassword">
          <Form.Label>
            {t('ContactUsComponent.Name')}{' '}
            <span className="text-danger"> *</span>
          </Form.Label>
          <Form.Control
            name="name"
            type="text"
            value={contact.name}
            placeholder="Enter Name"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>
            {t('ContactUsComponent.Subject')}{' '}
            <span className="text-danger"> *</span>
          </Form.Label>
          <Form.Control
            name="subject"
            type="text"
            value={contact.subject}
            placeholder="Enter Subject"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>
            {t('ContactUsComponent.Email')}{' '}
            <span className="text-danger"> *</span>
          </Form.Label>
          <Form.Control
            name="email"
            type="email"
            value={contact.email}
            placeholder="Enter email"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>
            {t('ContactUsComponent.Message')}
            <span className="text-danger"> *</span>
          </Form.Label>
          <Form.Control
            name="message"
            as="textarea"
            value={contact.message}
            rows={3}
            placeholder="Message"
            onChange={handleChange}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          style={{ backgroundColor: '#03B664' }}
        >
          {t('ContactUsComponent.sendButton')}
        </Button>
      </Form>
    </div>
  );
}
