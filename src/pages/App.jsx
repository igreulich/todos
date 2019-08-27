import React, { Component, createRef } from 'react';
import { hot } from 'react-hot-loader/root';

import { Sticky } from 'semantic-ui-react';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

import '../styles/app.less';

class App extends Component {
  contextRef = createRef();

  render() {
    return (
      <>
        <div ref={this.contextRef}>
          <Sticky context={this.contextRef}>
            <Header />
          </Sticky>
          <Body attached="bottom" />
        </div>
        <Footer />
      </>
    );
  }
}

export default hot(App);
