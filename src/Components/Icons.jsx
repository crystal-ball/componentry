import React from 'react';
import { Icon } from '../../lib';

const devicons = [
  'react',
  'git',
  'github_badge',
  'javascript',
  'nodejs',
  'nodejs_small',
  'javascript_shield',
  'bootstrap',
  'sass',
  'css3_full',
  'css3',
  'html5',
  'npm',
  'visualstudio',
  'rasberry_pi',
  'nginx',
  'javascript_badge',
  'mitlicence',
  'terminal',
  'code'
];

export default function Icons() {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <h2>Icons</h2>
          <p>
            Componentry doesn&apos;t include font icon assets, but the{' '}
            <code>&lt;Icon /&gt;</code> component is available for use with SVG
            sprite assets. TODO: syntax, filePath, baseline customizations
          </p>
          <h1>
            <Icon icon="javascript_badge" /> JavaScript
          </h1>
          <h2>
            <Icon icon="javascript_badge" /> JavaScript
          </h2>
          <h3>
            <Icon icon="javascript_badge" /> JavaScript
          </h3>
          <h4>
            <Icon icon="javascript_badge" /> JavaScript
          </h4>
          <p>
            <Icon icon="javascript_badge" /> JavaScript
          </p>
          <h2>Display Icons</h2>
          <p>
            <code>{`<Icon />`}</code> can be used for sprited SVGs displayed as
            standalone icons by resetting the SVG baseline to 0 by passing{' '}
            <code>{`font={false}`}</code>. The <a>Devicons</a> below highlight using
            typography class names to easily style icons.
          </p>
          <p>
            <code>
              {`<Icon icon={id&} font={false&} className="display-2 text-muted" />`}
            </code>
          </p>
          <div className="row">
            {devicons.map(id =>
              <div className="col-3 my-3 text-center" key={id}>
                <Icon icon={id} font={false} className="display-2 text-muted" />
                <div>
                  {id}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
