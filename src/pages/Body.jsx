import React, { Component } from 'react';

import {
  Icon,
} from 'semantic-ui-react';

export default class Body extends Component {
  state = {
    icon: 'tasks',
  };

  render() {
const { size } = this.props; // eslint-disable-line
    const { icon } = this.state;

    return (
      <section>
        <Icon name={icon} size={size} />
      </section>
    );
  }
}
