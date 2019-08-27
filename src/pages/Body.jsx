import React, { Component } from 'react';

import {
  Icon,
} from 'semantic-ui-react';

export default class Body extends Component {
  state = {
    icon: 'tasks',
  };

  render() {
    const { icon } = this.state;

    return (
      <section>
        <Icon name={icon} size={this.props.size} />
      </section>
    );
  }
}
