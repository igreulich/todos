import React from 'react';

import { Header, Segment } from 'semantic-ui-react';
import { Filters, Todos } from '../features';

const Head = () => (
  <Segment as="header" basic clearing inverted>
    <Header
      className="todo-list__header"
      content="Over Engineered Todos"
      floated="left"
      icon="list alternate outline"
    />
    <div style={{ float: 'right' }}>
      <Filters />
      <Todos.AddTodoModal />
    </div>
  </Segment>
);

export default Head;