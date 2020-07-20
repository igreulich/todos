import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Label } from 'semantic-ui-react';
import { Button } from 'celula';

import { deleteTodo, toggleTodoDone } from './todosReducer';

import './todos.less';

const mapState = () => ({});

const mapDispatch = {
  deleteTodo,
  toggleTodoDone,
};

const Todo = props => {
  const {
    deleteTodo, // eslint-disable-line no-shadow
    done,
    due,
    id,
    labels,
    note,
    title,
    toggleTodoDone, // eslint-disable-line no-shadow
  } = props;

  const handleDelete = () => deleteTodo(id);

  const handleToggle = () => toggleTodoDone(id);

  const renderLabels = () => labels.map(label => <Label key={label}>{label}</Label>);

  return (
    <div className="todo">
      <h5 className="primary-text">{title}</h5>
      {
        due && (
          <p className="small help-text">
            {`Due: ${due}`}
          </p>
        )
      }
      {
        note && (
          <p className="secondary-text">{note}</p>
        )
      }
      <div style={{ float: 'right' }}>
        <Button color="secondary" handleClick={handleDelete}>Delete</Button>
        <Button color="primary" handleClick={handleToggle}>{done ? 'Un-Do' : 'Done'}</Button>
      </div>
      {
        labels && (
          <Label.Group>
            {renderLabels()}
          </Label.Group>
        )
      }
      <div style={{ clear: 'both' }} />
    </div>
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
