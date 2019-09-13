import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Form, Input } from 'semantic-ui-react';

import { addTodo } from '../../../features/todos/todosReducer';

const mapState = () => ({});

const mapDispatch = {
  addTodo,
};

class AddTodoForm extends Component {
  handleClick = () => {
    const { addTodo } = this.props; // eslint-disable-line no-shadow

    addTodo();
  };

  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Field>
            <Input />
          </Form.Field>
        </Form.Group>
      </Form>
    );
  }
}

AddTodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

AddTodoForm.defaultProps = {};

export default connect(mapState, mapDispatch)(AddTodoForm);
