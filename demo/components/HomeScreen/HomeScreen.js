// @flow
import React from 'react'
import styled from 'styled-components'
import { Flex, Header, Media } from 'componentry'
import { Link } from 'react-router-dom'

import routesMap, { componentRoutes, conceptRoutes } from 'utils/routes-map'
import SubRoutesNav from 'components/universal/SubRoutesNav'

import accessibleSVG from './media/accessibility.svg'
import bundleSVG from './media/bundle.svg'
import mergeSVG from './media/merge.svg'

const Hero = styled(Flex)`
  margin-top: 5rem;
`

const FeatureHeader = styled(Header)`
  text-align: center;
  letter-spacing: 3px;
  text-transform: uppercase;
`

const Feature = styled(Media)`
  border-bottom: 1px solid ${props => props.theme.border.color};
  padding-bottom: ${props => props.theme.spacers['4']};
`

export default () => (
  <div>
    <Hero direction="column" align="center">
      <h1 className="display-2 text-primary mb-4">
        <u>C</u>
        omponentry
      </h1>

      <h3 className="mb-5 text-center w-75 text-muted">
        <em>A scalable, accessible React component library</em>
      </h3>
    </Hero>

    <Flex
      align="center"
      justify="center"
      className="border border-right-0 border-left-0 mb-4"
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
          <FeatureHeader as="h3">Lightweight Bundle Size</FeatureHeader>
          <Feature>
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
          </Feature>
        </div>
      </Flex>
      <Flex justify="center" className="col-7 my-4">
        <div>
          <FeatureHeader as="h3">Consistent APIs</FeatureHeader>
          <Feature>
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
          </Feature>
        </div>
      </Flex>
      <Flex justify="center" className="col-7 my-4">
        <div>
          <FeatureHeader as="h3">A++ Accessibility</FeatureHeader>
          <Feature className="border-bottom-0">
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
          </Feature>
        </div>
      </Flex>
    </div>
  </div>
)
