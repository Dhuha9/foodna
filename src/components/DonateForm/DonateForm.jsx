import React, { useState } from 'react';
import firebase from '../../firebase';
import { Row, Col, Form, Button } from 'react-bootstrap';
import './DonationForm.scss';
import M from '../../dist/img/Media.png';
import 'firebase/storage';
import { useTranslation } from 'react-i18next';

function DonateForm() {
  const { t } = useTranslation();

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
    <Row className="text-left" style={{ backgroundColor: '#F2F2F2' }}>
      <Col
        className="d-none d-md-block side-div"
        style={{ backgroundImage: `url(${M})` }}
      ></Col>
      <Col className="pt-3" lg={7}>
        <Form onSubmit={onSubmit} className="mx-auto my-4 w-75">
          <h1 className="mb-4">{t('DonationPage.title')}</h1>
          <p>{t('DonationPage.content')}</p>
          <Form.Group controlId="formBasicName">
            <Form.Label>{t('DonationPage.fullName')}</Form.Label>
            <Form.Control
              name="name"
              onChange={handleChange}
              type="text"
              placeholder={t('DonationPage.fullNamePlaceholder')}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPhone">
            <Form.Label>{t('DonationPage.phoneNumber')}</Form.Label>
            <Form.Control
              name="phone"
              onChange={handleChange}
              type="phone"
              placeholder={t('DonationPage.phoneNumberPlaceholder')}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>{t('DonationPage.email')}</Form.Label>
            <Form.Control
              name="email"
              onChange={handleChange}
              type="email"
              placeholder={t('DonationPage.emailPlaceholder')}
            />
          </Form.Group>

          <Form.Group controlId="formBasicName">
            <Form.Label>{t('DonationPage.mealTitle')}</Form.Label>
            <Form.Control
              name="title"
              onChange={handleChange}
              type="text"
              placeholder={t('DonationPage.mealTitlePlaceholder')}
              required
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>{t('DonationPage.description')}</Form.Label>
            <Form.Control
              name="description"
              onChange={handleChange}
              as="textarea"
              rows={3}
              placeholder={t('DonationPage.descriptionPlaceholder')}
            />
          </Form.Group>

          <Form.Group controlId="formBasicQuantity">
            <Form.Label>{t('DonationPage.quantity')}</Form.Label>
            <Form.Control
              name="quantity"
              onChange={handleChange}
              type="text"
              placeholder={t('DonationPage.quantityPlaceholder')}
            />
          </Form.Group>

          <Form.Group controlId="formBasicName">
            <Form.Label>{t('DonationPage.organization')}</Form.Label>
            <Form.Control
              name="organization"
              onChange={handleChange}
              type="text"
              placeholder={t('DonationPage.organizationPlaceholder')}
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>{t('DonationPage.address')}</Form.Label>
            <Form.Control
              name="address"
              onChange={handleChange}
              as="textarea"
              rows={3}
              required
              placeholder={t('DonationPage.addressPlaceholder')}
            />
          </Form.Group>

          <Form.File id="formcheck-api-regular">
            <Form.File.Label>{t('DonationPage.image')}</Form.File.Label>
            <Form.File.Input required name="image" onChange={handleChange} />
          </Form.File>

          <Button className="my-4" variant="success" type="submit">
            {t('DonationPage.submit')}
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default DonateForm;
