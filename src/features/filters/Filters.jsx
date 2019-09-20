/* eslint-disable no-shadow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Button,
  Form,
  Popup,
} from 'semantic-ui-react';

import { setLabels, setShowCompleted } from './filtersReducer';

const mapState = () => ({});

const mapDispatch = {
  setLabels,
  setShowCompleted,
};

class Filters extends Component {
  state = {
    filters: '',
    open: false,
    showCompleted: false,
  };

  handleClose = () => this.setState({ open: false });

  handleFilters = (event) => {
    const { setLabels } = this.props;

    this.setState(
      { [event.target.name]: event.target.value },
      () => {
        const { filters } = this.state;

        setLabels(filters);
      },
    );
  };

  handleOpen = () => this.setState({ open: true });

  handleShowCompleted = () => {
    const { setShowCompleted } = this.props;

    this.setState(
      (prevState) => ({ showCompleted: !prevState.showCompleted }),
      () => {
        const { showCompleted } = this.state;

        setShowCompleted(showCompleted);
      },
    );
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
        trigger={<Button color="green" icon="settings" inverted />}
      >
        <Popup.Header>Filters</Popup.Header>
        <Popup.Content>
          <Form>
            <Form.Input
              id="todo-filter_filter"
              label="Filter by labels"
              name="filters"
              onChange={this.handleFilters}
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

Filters.propTypes = {
  setLabels: PropTypes.func.isRequired,
  setShowCompleted: PropTypes.func.isRequired,
};

Filters.defaultProps = {};

export default connect(mapState, mapDispatch)(Filters);
/* eslint-enable no-shadow */
