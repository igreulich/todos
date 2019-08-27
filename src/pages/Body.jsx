import React, { Component } from 'react';

import {
  Icon,
} from 'semantic-ui-react';

export default class Body extends Component {
  state = {
    icon: 'tasks',
  };

  render() {
    return (
      <section>
        <Icon name="tty" />
      </section>
    );
  }
}
