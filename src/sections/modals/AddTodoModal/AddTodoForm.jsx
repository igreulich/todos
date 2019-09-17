/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';

import { Form } from 'semantic-ui-react';

const AddTodoForm = (props) => {
  const { due, handleChange, labels, note, title } = props;

  return (
    <Form>
      <Form.Group widths="equal">
        <Form.Input
          id="todo-form_todo"
          label="Todo"
          name="title"
          onChange={handleChange}
          placeholder="Learn React"
          value={title}
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.TextArea
          id="todo-form_note"
          label="Note"
          name="note"
          onChange={handleChange}
          placeholder="Check out this link: https://www.example.com"
          value={note}
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input
          id="todo-form_labels"
          label="Labels"
          name="labels"
          onChange={handleChange}
          value={labels}
        />
        <Form.Input
          id="todo-form_labels"
          label="Due"
          name="due"
          onChange={handleChange}
          type="date"
          value={due}
        />
      </Form.Group>
    </Form>
  );
};

AddTodoForm.propTypes = {
  due: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  labels: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

AddTodoForm.defaultProps = {};

export default AddTodoForm;
/* eslint-disable object-curly-newline */
