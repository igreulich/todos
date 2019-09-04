/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Button,
  Item,
  Label,
} from 'semantic-ui-react';

import { addTodo, fetchTodos } from './todosReducer';

const mapState = (state) => ({
  todos: state.todos,
});

const mapDispatch = {
  addTodo,
  fetchTodos,
};

const notes = 'https://www.google.com';
const Todo = (props) => {
  const { due, title } = props;

  return (
    <Item>
      <Item.Content>
        <Item.Header as="a">{title}</Item.Header>
        <Item.Meta>
          <span className="cinema">{`Due: ${due}`}</span>
        </Item.Meta>
        <Item.Description>{notes}</Item.Description>
        <Item.Extra>
          <Button primary floated="right">
            Complete
          </Button>
          <Label>Limited</Label>
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};

Todo.propTypes = {
  due: PropTypes.string,
  title: PropTypes.string.isRequired,
};

Todo.defaultProps = {
  due: '',
};

export default connect(mapState, mapDispatch)(Todo);
/* eslint-enable object-curly-newline */
