import React from 'react';

import {
  Button,
  Icon,
  Image,
  Item,
  Label,
} from 'semantic-ui-react';

const paragraph = <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />;
const Todo = () => (
  <Item>
    <Item.Content>
      <Item.Header as="a">My Neighbor Totoro</Item.Header>
      <Item.Meta>
        <span className="cinema">IFC Cinema</span>
      </Item.Meta>
      <Item.Description>{paragraph}</Item.Description>
      <Item.Extra>
        <Button primary floated="right">
          Buy tickets
          <Icon name="right chevron" />
        </Button>
        <Label>Limited</Label>
      </Item.Extra>
    </Item.Content>
  </Item>
);

export default Todo;
