import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

import { Todos } from '../features';
import { About } from '../pages';

const Body = props => {
  const { attached } = props;

  return (
    <Segment as="section" attached={attached} className="fitted" basic>
      <Switch>
        <Route path="/" exact component={Todos.TodoList} />
        <Route path="/about" component={About} />
      </Switch>
    </Segment>
  );
};

Body.propTypes = {
  attached: PropTypes.string,
};

Body.defaultProps = {
  attached: '',
};

export default Body;
