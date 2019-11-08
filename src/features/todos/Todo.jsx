/* eslint-disable react/no-array-index-key */
/* eslint-disable object-curly-newline */
/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Button,
  Item,
  Label,
} from 'semantic-ui-react';

import { deleteTodo, toggleTodoDone } from './todosReducer';

const mapState = () => ({});

const mapDispatch = {
  deleteTodo,
  toggleTodoDone,
};

const Todo = props => {
  const { deleteTodo, done, due, id, labels, note, title, toggleTodoDone } = props;

  const handleDelete = () => deleteTodo(id);

  const handleToggle = () => toggleTodoDone(id);

  const renderLabels = () => labels.map((label, idx) => <Label key={idx}>{label}</Label>);

  return (
    <Item>
      <Item.Content>
        <Item.Header as="a">{title}</Item.Header>
        {
          due && (
            <Item.Meta>
              <span>{`Due: ${due}`}</span>
            </Item.Meta>
          )
        }
        {
          note && (
            <Item.Description>{note}</Item.Description>
          )
        }
        <Item.Extra>
          <div style={{ float: 'right' }}>
            <Button color="red" onClick={handleDelete} inverted>Delete</Button>
            <Button onClick={handleToggle} primary>{done ? 'Un-Do' : 'Done'}</Button>
          </div>
          {
            labels && (
              <Label.Group>
                {renderLabels()}
              </Label.Group>
            )
          }
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};

Todo.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  done: PropTypes.bool,
  due: PropTypes.string,
  id: PropTypes.string.isRequired,
  labels: PropTypes.array,
  note: PropTypes.string,
  title: PropTypes.string.isRequired,
  toggleTodoDone: PropTypes.func.isRequired,
};

Todo.defaultProps = {
  done: false,
  due: '',
  labels: [],
  note: '',
};

export default connect(mapState, mapDispatch)(Todo);
/* eslint-enable no-shadow */
/* eslint-disable object-curly-newline */
/* eslint-enable react/no-array-index-key */
