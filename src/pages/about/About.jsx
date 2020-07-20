/* eslint-disable max-len */
import React from 'react';
import { Segment } from 'semantic-ui-react';

import './About.less';

const About = () => (

  <Segment className="fitted" basic>
    <div className="quote-container">
      <p className="blockquote">
        &quot;Here&apos;s to the crazy ones, the misfits, the rebels, the troublemakers, the round pegs in the square holes. The ones who see things differently. They&apos;re not fond of rules, and they hav no respect for the status-quo. You can quote them, disagree with them, glorify or vilify them, but the only thing you can&apos;t do is ignore them because they change things. They push the human race forward, and while some may see them as the crazy ones, we see genius, because the ones who are crazy enough to think that they can change the world, are the ones who do.&quot;
      </p>
      <p className="blockquote">
        <em>- Steve Jobs</em>
      </p>
    </div>
  </Segment>
);

export default About;
/* eslint-enable max-len */
