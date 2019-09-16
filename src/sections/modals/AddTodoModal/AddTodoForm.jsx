import React from 'react';
import PropTypes from 'prop-types';

import { Form } from 'semantic-ui-react';

const AddTodoForm = (props) => {
  const {
    handleChange,
  } = props;

  return (
    <Form>
      <Form.Group widths="equal">
        <Form.Input
          id="todo-form_todo"
          label="Todo"
          name="title"
          onChange={handleChange}
          placeholder="Learn React"
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.TextArea
          id="todo-form_note"
          label="Note"
          name="note"
          onChange={handleChange}
          placeholder="Check out this link: https://www.example.com"
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input
          id="todo-form_labels"
          label="Labels"
          name="labels"
          onChange={handleChange}
        />
        <Form.Input
          id="todo-form_labels"
          label="Due"
          name="due"
          onChange={handleChange}
          type="date"
        />
      </Form.Group>
    </Form>
  );
};

AddTodoForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

AddTodoForm.defaultProps = {};

export default AddTodoForm;
