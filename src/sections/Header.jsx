import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react';
import { Filters, Todos } from '../features';

class Head extends Component {
  state = {
    activeItem: 'todos',
  };

  handleClick = (event, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Segment as="header" basic inverted>
        <Menu inverted pointing secondary>
          <Menu.Item header>Over Engineered Todos</Menu.Item>
          <Menu.Item
            active={activeItem === 'todos'}
            as={Link}
            name="todos"
            onClick={this.handleClick}
            to="/"
          />
          <Menu.Item
            active={activeItem === 'aboutUs'}
            as={Link}
            name="aboutUs"
            onClick={this.handleClick}
            to="/about"
          />
          <Menu.Menu position="right" inverted>
            <Filters />
            <Todos.AddTodoModal />
          </Menu.Menu>
        </Menu>
      </Segment>
    );
  }
}

export default Head;
