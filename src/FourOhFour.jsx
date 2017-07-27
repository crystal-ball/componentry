import React from 'react';
import { Link } from 'react-router-dom';

export default function FourOhFour() {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <h3>Page Not Found</h3>
          <Link to="/">Home</Link>
        </div>
      </div>
    </div>
  );
}
