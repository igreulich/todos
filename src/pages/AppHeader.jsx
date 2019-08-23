import React, { Component, createRef } from 'react';

import { Header, Icon, Segment, Sticky } from 'semantic-ui-react';

export default class AppHeader extends Component {
  contextRef = createRef();

  render() {
    return (
      <div ref={this.contextRef}>
        <Sticky context={this.contextRef}>
          <Segment inverted basic>
            <Header as="h1" inverted>
              <Icon name="list alternate outline" />
              <Header.Content>
                Todos
                <Header.Subheader>Organize Your Day</Header.Subheader>
              </Header.Content>
            </Header>
          </Segment>
        </Sticky>
        <Segment attached="bottom">
          {this.props.children}
        </Segment>
      </div>
    );
  }
}