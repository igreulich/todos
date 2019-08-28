import React from 'react';

import PropTypes from 'prop-types';

import { Segment } from 'semantic-ui-react';

import { Todos } from '../features';

const Body = (props) => {
  const { attached } = props;

  return (
    <Segment as="section" attached={attached} basic>
      <Todos />
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
