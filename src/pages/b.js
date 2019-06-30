import React from 'react';
import { Link } from '@reach/router';

export default () => (
  <article>
    <p>This is page B.</p>
    <Link to="../">Go to the index page</Link>
  </article>
);
