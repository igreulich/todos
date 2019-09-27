/* eslint-disable object-curly-newline */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Item, Segment } from 'semantic-ui-react';

import { fetchTodos } from './todosReducer';
import { selectVisibleTodos } from './todosSelectors';
import Todo from './Todo';

const mapState = (state) => ({
  todos: selectVisibleTodos(state),
});

const mapDispatch = {
  fetchTodos,
};

class TodoList extends Component {
  componentDidMount() {
    const { fetchTodos } = this.props; // eslint-disable-line no-shadow

    fetchTodos();
  }

  renderTodos = () => {
    const { todos } = this.props;

    return todos.map((todo) => (
      <Todo
        done={todo.done}
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
      <Segment basic>
        <Item.Group divided>
          {this.renderTodos()}
        </Item.Group>
      </Segment>
    );
  }
}

TodoList.propTypes = {
  fetchTodos: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
};

TodoList.defaultProps = {};

export default connect(mapState, mapDispatch)(TodoList);
/* eslint-enable object-curly-newline */
