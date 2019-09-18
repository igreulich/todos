import React, { Component } from 'react';

import {
  Button,
  Form,
  Popup,
} from 'semantic-ui-react';

class Filters extends Component {
  state = {
    filters: '',
    open: false,
    showCompleted: false,
  };

  handleClose = () => this.setState({ open: false });

  handleFilter = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleOpen = () => this.setState({ open: true });

  handleShowCompleted = () => {
    this.setState((prevState) => ({ showCompleted: !prevState.showCompleted }));
  };

  render() {
    const { filters, open, showCompleted } = this.state;

    return (
      <Popup
        on="click"
        open={open}
        onClose={this.handleClose}
        onOpen={this.handleOpen}
        position="bottom right"
        trigger={<Button floated="right" icon="angle down" inverted />}
      >
        <Popup.Header>Filters</Popup.Header>
        <Popup.Content>
          <Form>
            <Form.Input
              id="todo-filter_filter"
              label="Filter by labels"
              name="filters"
              onChange={this.handleFilter}
              value={filters}
            />
            <Form.Checkbox
              label="Show completed todos"
              name="showCompleted"
              onChange={this.handleShowCompleted}
              checked={showCompleted}
              toggle
            />
          </Form>
        </Popup.Content>
      </Popup>
    );
  }
}

export default Filters;
