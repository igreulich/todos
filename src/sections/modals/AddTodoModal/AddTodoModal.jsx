import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Button,
  Modal,
} from 'semantic-ui-react';
import AddTodoForm from './AddTodoForm';

import { addTodo } from '../../../features/todos/todosReducer';

const mapState = () => ({});

const mapDispatch = {
  addTodo,
};

class AddTodoModal extends Component {
  state = {
    title: '',
    note: '',
    labels: [],
    due: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleAddTodo = () => {
    const { addTodo } = this.props; // eslint-disable-line no-shadow
    const {
      due,
      labels,
      note,
      title,
    } = this.state;
    const todoLabels = [
      ...new Set([...labels.split(' ')]),
    ];
    const todo = {
      labels: todoLabels,
      title,
      note,
      due,
    };

    addTodo(todo);
  };

  render() {
    return (
      <Modal trigger={<Button color="blue">Add Todo</Button>}>
        <Modal.Header>Add a Todo</Modal.Header>
        <Modal.Content>
          <AddTodoForm
            handleChange={this.handleChange}
          />
        </Modal.Content>
        <Modal.Actions>
          <Button
            basic
            color="blue"
            onClick={this.handleAddTodo}
          >
            Add Todo
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

AddTodoModal.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

AddTodoModal.defaultProps = {};

export default connect(mapState, mapDispatch)(AddTodoModal);
