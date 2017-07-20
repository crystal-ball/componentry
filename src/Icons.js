import React from 'react';
import { Icon } from '../lib';

export default function Icons() {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <h2>Icons</h2>
          <div>
            <span>
              This is the chevron icon: <Icon icon="chevron" />
              <br />
            </span>
            <span>
              This is the heart icon: <Icon icon="heart" />
              <br />
            </span>
            <span>
              This is the close icon: <Icon icon="close" />
              <br />
            </span>
            <span>
              This icon is not intended to be a font icon, so it&apos;s baseline
              will not be adjusted: <Icon icon="close" font={false} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
