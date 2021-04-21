const React = require('react');

const useMock = [(k) => k, {}];
useMock.t = (k) => k;
useMock.i18n = {};

module.exports = {
  // this mock makes sure any components using the translate HoC receive the t function as a prop
  // eslint-disable-next-line react/display-name
  withTranslation: () => (Component) => (props) => (
    <Component t={(k) => k} {...props} />
  ),

  useTranslation: () => useMock,
};
