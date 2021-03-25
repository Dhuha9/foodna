import React from 'react';
import PropTypes from 'prop-types';
import './Testimonial.scss';

export default function Testimonial({ text, personImage, name, profession }) {
  return (
    <>
      <blockquote className="p-4 blockquote">
        <h4>
          <q>{text}</q>
        </h4>
      </blockquote>
      <div className="d-block m-auto w-25 h-25">
        <img
          className="d-block m-auto w-50 h-50 testimonial-person"
          src={personImage}
          alt="the person"
        />
      </div>
      <div className="mt-3 mb-5">
        <figcaption className="blockquote-footer">
          &mdash; {name + ', ' + profession}
        </figcaption>
      </div>
    </>
  );
}

Testimonial.propTypes = {
  text: PropTypes.string,
  personImage: PropTypes.string,
  name: PropTypes.string,
  profession: PropTypes.string,
};
