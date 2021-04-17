import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import firebase from '../../firebase.js';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';

export default function ContactForm() {
  const [contact, setcontact] = useState({
    name: '',
    subject: '',
    email: '',
    message: '',
  });

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

  const { t } = useTranslation();

  return (
    <div className="w-50 mx-auto my-5 text-left">
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
