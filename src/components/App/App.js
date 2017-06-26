import React from 'react';
import PropTypes from 'prop-types';

import { Route, Switch, Redirect } from 'react-router-dom';

import Header from 'Components/Header/Header';
import Footer from 'Components/Footer';

import HomePage from 'Components/HomePage';
import CaseStudyPage from 'Components/CaseStudyPage';
import AboutPage from 'Components/AboutPage';

import ProjectHead from 'Components/ProjectHead';
import Loader from 'Components/Loader/Loader';
import LoaderSplash from 'Components/LoaderSplash/LoaderSplash';

const App = (props) => {
  const AppContent = (
    <div className="_MainContent" role="main">
      <Loader
        sourceFunction={props.retrieveAllProjectImages}
        images={props.projectImages}
        userLoader={LoaderSplash}
      >
        <div>
          <ProjectHead />
          <Route path="/about" component={AboutPage} />
        </div>
      </Loader>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/project/:slug" component={CaseStudyPage} />
        <Route
          render={({ location }) => (
            location.pathname !== '/about'
              ? (<Redirect to="/" />)
              : (false)
          )}
        />
      </Switch>
    </div>
  );

  return (
    <div className={`_MainWrapper _theme-${props.theme} ${props.shouldLockScrolling ? '_lock-scroll' : ''}`}>
      <Header isDisplayingLite={props.isDisplayingLite} />
      {props.isDisplayingLite ? <div className="_MainContent" role="main"><AboutPage /></div> : AppContent}
      <Footer />
    </div>
  );
};

App.propTypes = {
  theme: PropTypes.string,
  projectImages: PropTypes.array,
  shouldLockScrolling: PropTypes.bool,
  isDisplayingLite: PropTypes.bool,
  retrieveAllProjectImages: PropTypes.func.isRequired,
};

App.defaultProps = {
  theme: 'white',
  projectImages: [],
  isDisplayingLite: false,
  shouldLockScrolling: false,
};

export default App;
