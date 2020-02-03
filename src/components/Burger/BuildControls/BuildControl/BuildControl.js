import React from 'react';

const buildControl = ({ label }) => (
  <div>
    <div>{label}</div>
    <button>Less</button>
    <button>More</button>
  </div>
);

export default buildControl;