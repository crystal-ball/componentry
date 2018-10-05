// @flow
import React from 'react'
import styled from 'styled-components'
import { Flex, Header, Media } from 'componentry'
import { Link } from 'react-router-dom'

import routesMap, { componentRoutes, conceptRoutes } from 'lib/routes-map'
import SubRoutesNav from 'components/universal/SubRoutesNav'
import { component } from './homescreen.scss'

import Accessible from './media/accessibility.svg'
import Bundle from './media/bundle.svg'
import Merge from './media/merge.svg'

const Hero = styled(Flex)`
  margin-top: 5rem;
`

const FeatureContainer = styled.div`
  max-width: 650px;
  margin: auto;
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
  <>
    <Hero direction="column" align="center">
      <Header color="primary" className="display-2 mb-4">
        <u>C</u>
        omponentry
      </Header>

      <Header as="h3" color="muted" textAlign="center" className="w-75 mb-5">
        <em>A scalable, accessible React component library</em>
      </Header>
    </Hero>

    <Flex
      align="center"
      justify="center"
      className="border border-right-0 border-left-0 mb-4"
    >
      <div className="my-3 mx-2">
        <Link to={routesMap.setup.pathname}>{routesMap.setup.name}</Link>
      </div>
      <div className="my-3 mx-2">
        {/* Library concepts guides navigation */}
        <SubRoutesNav label="Concepts" subRoutes={conceptRoutes} />
      </div>
      <div className="my-3 mx-2">
        {/* Component dropdown navigation */}
        <SubRoutesNav label="Components" subRoutes={componentRoutes} />
      </div>
      <div className="my-3 mx-2">
        <a href="https://github.com/crystal-ball/componentry">Github</a>
      </div>
    </Flex>

    <Flex justify="center" mb={5} direction="column" className={component}>
      <FeatureContainer className="my-4">
        <FeatureHeader as="h3">Lightweight Bundle Size</FeatureHeader>
        <Feature>
          <Bundle
            className="feature-icon display-3 mr-3"
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
      </FeatureContainer>
      <FeatureContainer className="my-4">
        <FeatureHeader as="h3">Consistent APIs</FeatureHeader>
        <Feature>
          <Media.Body>
            <p>
              Spend more time writing and less time checking documentation with consistent
              APIs and event hooks across components. Consistent APIs and focused
              component concerns make component composition easy.
            </p>
          </Media.Body>
          <Merge
            className="feature-icon display-3 mr-3"
            alt="Different components utilize the same API"
          />
        </Feature>
      </FeatureContainer>
      <FeatureContainer className="my-4">
        <FeatureHeader as="h3">A++ Accessibility</FeatureHeader>
        <Feature className="border-bottom-0">
          <Accessible
            className="feature-icon display-3 mr-3"
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
      </FeatureContainer>
    </Flex>
  </>
)
