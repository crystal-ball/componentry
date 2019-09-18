/* global module */

import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Design System', module).add('Tables', () => (
  <div className='w-75'>
    <div className='table-responsive'>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Library</th>
            <th scope='col'>Package</th>
            <th scope='col'>Version</th>
            <th scope='col'>Size</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Material UI</td>
            <td>
              <code>@material-ui/core</code>
            </td>
            <td>4.4.2</td>
            <td>84.7kb</td>
          </tr>
          <tr>
            <td>Ant Design</td>
            <td>
              <code>antd</code>
            </td>
            <td>3.23.3</td>
            <td>583.8kb</td>
          </tr>
          <tr>
            <td>Semantic UI</td>
            <td>
              <code>semantic-ui-react</code>
            </td>
            <td>0.88.1</td>
            <td>83kb</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
))