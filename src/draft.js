// This is a draft file that can be used as a reference to get translations for the components,
// and it wil be DELETED later after finishing providing translation for all the components.
// it contains a working and fully functional code from the documentation here https://react.i18next.com/latest/using-with-hooks
// 
// Note: the code bellow was used originally for the src/app.js file 

import React, { Component, Suspense } from 'react';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

// use hoc for class based components
class LegacyWelcomeClass extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { t } = this.props;
    return <h2>{t('title')}</h2>;
  }
}

LegacyWelcomeClass.propTypes = {
  t: PropTypes.any.isRequired
};

const Welcome = withTranslation()(LegacyWelcomeClass);




// Component using the Trans component
function MyComponent() {
  return (
    <Trans i18nKey="description.part1">
      To get started, edit <code>src/App.js</code> and save to reload.
    </Trans>
  );
}




// page uses the hook
function Page() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome />
        <button type="button" onClick={() => changeLanguage('ar')}>
          ar
        </button>
        <button type="button" onClick={() => changeLanguage('en')}>
          en
        </button>
      </div>
      <div className="App-intro">
        <MyComponent />
      </div>
      <div>{t('description.part2')}</div>
    </div>
  );
}




// loading component for suspense fallback
const Loader = () => (
  <div className="App">
    <img src={logo} className="App-logo" alt="logo" />
    <div>loading...</div>
  </div>
);

// here app catches the suspense from page in case translations are not yet loaded
export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Page />
    </Suspense>
  );
}


//--------------------------------------------------------------------------------------------------------//
// NOTE FOR DHUHA
// You can use the LangButton component  directy inside the navbar and it shoud work perfectly but dont forget to wrap 
// it with Suspense component and provide <Loader> component for suspense fallback in case translations are not yet loaded.

export default function YourComponent() {
  return (
    <Suspense fallback={<Loader />}>
      <LangButton/>
    </Suspense>
  );
}
