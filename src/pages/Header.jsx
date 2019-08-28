import React from 'react';

import { Header, Segment } from 'semantic-ui-react';

import './Header.less';

const Head = () => (
  <Segment as="header" basic clearing inverted>
    <Header className="todo-list__header" content="Over Engineered Todos" icon="list alternate outline" floated="left" />
    <Header className="todo-list__header" icon="plus" floated="right" />
  </Segment>
);

export default Head;
