/* eslint-disable object-curly-newline */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Item } from 'semantic-ui-react';
import { Todo } from '.';

import { fetchTodos } from './todosReducer';

const mapState = (state) => ({
  todos: state.todos.todos,
});

const mapDispatch = {
  fetchTodos,
};

class Todos extends Component {
  componentDidMount() {
    const { fetchTodos } = this.props; // eslint-disable-line no-shadow

    fetchTodos();
  }

  renderTodos = () => {
    const { todos } = this.props;

    return todos.map((todo) => (
      <Todo
        due={todo.due}
        id={todo.id}
        key={todo.id}
        labels={todo.labels}
        note={todo.note}
        title={todo.title}
      />
    ));
  };

  render() {
    return (
      <Item.Group divided>
        {this.renderTodos()}
      </Item.Group>
    );
  }
}

Todos.propTypes = {
  fetchTodos: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
};

Todos.defaultProps = {};

export default connect(mapState, mapDispatch)(Todos);
/* eslint-enable object-curly-newline */
