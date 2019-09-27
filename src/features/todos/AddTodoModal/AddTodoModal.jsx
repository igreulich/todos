/* eslint-disable object-curly-newline */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Button,
  Modal,
} from 'semantic-ui-react';

import { createTodo } from '../todosReducer';
import AddTodoForm from './AddTodoForm';

const mapState = () => ({});

const mapDispatch = {
  createTodo,
};

class AddTodoModal extends Component {
  state = {
    due: '',
    labels: '',
    note: '',
    title: '',
  };

  handleAddTodo = () => {
    const { createTodo } = this.props; // eslint-disable-line no-shadow
    const { due, labels, note, title } = this.state; // eslint-disable-line object-curly-newline
    const todoLabels = labels ? [...new Set([...labels.split(' ')])] : [];
    const todo = {
      labels: todoLabels,
      due,
      note,
      title,
    };

    createTodo(todo);
    this.handleModalClose();
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleModalClose = () => {
    this.setState({ open: false });
    this.resetForm();
  };

  handleModalOpen = () => this.setState({ open: true });

  resetForm = () => this.setState({
    due: '',
    labels: '',
    note: '',
    title: '',
  });

  render() {
    const { due, labels, note, open, title } = this.state;

    return (
      <Modal
        onClose={this.handleModalClose}
        open={open}
        trigger={<Button icon="plus" onClick={this.handleModalOpen} primary />}
        closeIcon
      >
        <Modal.Header>Add a Todo</Modal.Header>
        <Modal.Content>
          <AddTodoForm
            due={due}
            handleChange={this.handleChange}
            labels={labels}
            note={note}
            title={title}
          />
        </Modal.Content>
        <Modal.Actions>
          <Button
            color="red"
            onClick={this.handleModalClose}
            inverted
          >
            Cancel
          </Button>
          <Button
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
  createTodo: PropTypes.func.isRequired,
};

AddTodoModal.defaultProps = {};

export default connect(mapState, mapDispatch)(AddTodoModal);
/* eslint-enable object-curly-newline */
