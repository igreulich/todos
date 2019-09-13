import React from 'react';

import {
  Button,
  Modal,
} from 'semantic-ui-react';
import AddTodoForm from './AddTodoForm';

const AddTodoModal = () => (
  <Modal trigger={<Button color="blue">Add Todo</Button>}>
    <Modal.Header>Add a Todo</Modal.Header>
    <Modal.Content>
      <AddTodoForm />
    </Modal.Content>
  </Modal>
);

export default AddTodoModal;
