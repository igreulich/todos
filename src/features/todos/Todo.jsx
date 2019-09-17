/* eslint-disable object-curly-newline */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Button,
  Item,
  Label,
} from 'semantic-ui-react';

import { toggleTodoDone } from './todosReducer';

const mapState = () => ({});

const mapDispatch = {
  toggleTodoDone,
};

const Todo = (props) => {
  const { due, id, labels, note, title, toggleTodoDone } = props; // eslint-disable-line no-shadow

  const handleClick = () => {
    toggleTodoDone(id);
  };

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
          <Button.Group floated="right">
            <Button positive onClick={handleClick}>Done</Button>
            <Button.Or />
            <Button negative>Delete</Button>
          </Button.Group>
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
  due: PropTypes.string,
  id: PropTypes.string.isRequired,
  labels: PropTypes.array,
  note: PropTypes.string,
  title: PropTypes.string.isRequired,
  toggleTodoDone: PropTypes.func.isRequired,
};

Todo.defaultProps = {
  due: '',
  labels: [],
  note: '',
};

export default connect(mapState, mapDispatch)(Todo);
/* eslint-enable react/no-array-index-key */
/* eslint-enable object-curly-newline */
