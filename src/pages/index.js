import React from 'react';
import { Link } from '@reach/router';

export default () => (
  <article>
    <p>This is the index page.</p>
    <Link to="b">Go to page B</Link>
  </article>
);
