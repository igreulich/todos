import React, { Component, createRef } from 'react';
import { hot } from 'react-hot-loader/root';

import { BrowserRouter as Router } from 'react-router-dom';
import { Sticky } from 'semantic-ui-react';

import Header from './header';
import Body from './Body';

import '../styles/app.less';

class App extends Component {
  contextRef = createRef();

  render() {
    return (
      <Router>
        <div ref={this.contextRef}>
          <Sticky context={this.contextRef}>
            <Header />
          </Sticky>
          <Body attached="bottom" />
        </div>
      </Router>
    );
  }
}

export default hot(App);
