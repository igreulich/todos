import React from 'react';

import { Button, Item, Label } from 'semantic-ui-react';

const Todo = () => (
  <Item>
    <Item.Content>
      <Item.Header as="a">Learn React</Item.Header>
      <Item.Description>Lucas ipsum dolor sit amet sebulba klivian bollux sio anx ventress tatooine zabrak kota isard. Zuckuss ric tibor amidala mustafar iridonian mara cathar joh. Skywalker gamorr twilek hutt palpatine. Fel bormea c-3p0 luuke kyle geonosis nomi zekk kessel. Nomi cabasshite maul cadavine keshiri. Solo tavion nar axmis duros nadon. Roan arkanis c'baoth tiin anthos ugnaught chommell. Kit mas valorum kor-uj bel skywalker zabrak. Ozzel jacen finis anthos windu tharen ackbar cerea olié. Snivvian yuzzem seerdon trioculus lannik raynar.</Item.Description>
      <Item.Extra>
        <Label icon="calendar alternate outline" content="Due: August 31, 2019" floated="left" />
        <Button.Group size="mini" floated="right">
          <Button color="green">Done</Button>
          <Button.Or />
          <Button color="red">Delete</Button>
        </Button.Group>
      </Item.Extra>
    </Item.Content>
  </Item>
);

export default Todo;
