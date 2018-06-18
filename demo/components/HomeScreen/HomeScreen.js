// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import { Flex, Header, Media } from 'componentry'

import routesMap, { componentRoutes, conceptRoutes } from 'utils/routes-map'
import SubRoutesNav from 'components/universal/SubRoutesNav'

import accessibleSVG from './media/accessibility.svg'
import bundleSVG from './media/bundle.svg'
import mergeSVG from './media/merge.svg'

import { component } from './home-screen.scss'

export default () => (
  <div className={component}>
    <Flex direction="column" align="center" className="hero">
      <Header className="display-2 text-primary mb-4">
        <u>C</u>omponentry
      </Header>

      <Header as="h2" subheader className="mb-5 text-center w-75 font-weight-light">
        <em>Scalable, simple, accessible components</em>
      </Header>
    </Flex>

    <Flex
      align="center"
      justify="center"
      className="home-nav border border-right-0 border-left-0 mb-4"
    >
      <div className="m-3">
        <Link to={routesMap.setup.pathname}>{routesMap.setup.name}</Link>
      </div>
      <div className="my-3">
        {/* Library concepts guides navigation */}
        <SubRoutesNav label="Concepts" subRoutes={conceptRoutes} />
      </div>
      <div className="my-3">
        {/* Component dropdown navigation */}
        <SubRoutesNav label="Components" subRoutes={componentRoutes} />
      </div>
      <div className="m-3">
        <a href="https://github.com/crystal-ball/componentry">Github</a>
      </div>
    </Flex>

    <div className="mb-5 row justify-content-center">
      <Flex justify="center" className="col-7 my-4">
        <div>
          <Header as="h3" className="feature-header">
            Lightweight Bundle Size
          </Header>
          <Media className="feature">
            <img
              className="icon display-3 mr-3"
              src={bundleSVG}
              alt="Library bundle size is a small percentage of overall bundle"
            />
            <Media.Body>
              <p>
                Componentry is optimized for size and performance. With minimial external
                dependencies the library weighs in at 12.8kB. Advanced optimizations are
                possible using targeted ESM and ESNext build targets.
              </p>
            </Media.Body>
          </Media>
        </div>
      </Flex>
      <Flex justify="center" className="col-7 my-4">
        <div>
          <Header as="h3" className="feature-header">
            Consistent APIs
          </Header>
          <Media className="feature">
            <Media.Body>
              <p>
                Spend more time writing and less time checking documentation with
                consistent APIs and event hooks across components. Consistent APIs and
                focused component concerns make component composition easy.
              </p>
            </Media.Body>
            <img
              className="icon display-3 mr-3"
              src={mergeSVG}
              alt="Different components utilize the same API"
            />
          </Media>
        </div>
      </Flex>
      <Flex justify="center" className="col-7 my-4">
        <div>
          <Header as="h3" className="feature-header">
            A++ Accessibility
          </Header>
          <Media className="feature border-bottom-0">
            <img
              className="icon display-3 mr-3"
              src={accessibleSVG}
              alt="Library focuses on A++ accessibility"
            />
            <Media.Body>
              <p>
                Components are written using{' '}
                <a href="https://www.w3.org/WAI/intro/aria" rel="noreferrer noopener">
                  WAI-ARIA
                </a>{' '}
                roles and attributes for A++ fully accessible components out of the box.
                Internal component APIs even handle assigning dynamic aria attributes on
                subcomponents.
              </p>
            </Media.Body>
          </Media>
        </div>
      </Flex>
    </div>
  </div>
)
