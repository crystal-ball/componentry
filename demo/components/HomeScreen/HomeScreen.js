/* eslint-disable */
import React from 'react'
import styled from 'styled-components'
import { Block, Flex, Header, Media, Text } from 'componentry'
import { Link } from 'react-router-dom'

import routesMap, { componentRoutes, conceptRoutes } from 'lib/routes-map'
import SubRoutesNav from 'components/universal/SubRoutesNav'

import Accessible from './media/accessibility.svg'
import Bundle from './media/bundle.svg'
import Merge from './media/merge.svg'

const FeatureIcon = styled.svg`
  width: 72px;
  height: 72px;
`

const featureHeaderProps = {
  as: 'h3',
  textAlign: 'center',
  letterSpacing: '3px',
  uppercase: true,
}

const featureProps = {
  borderBottom: '1px solid',
  borderColor: 'border',
  className: 'pb-4',
}

export default () => (
  <>
    <Flex direction="column" align="center" mt="5rem">
      <Header color="primary" className="display-2 mb-3">
        <u>C</u>
        omponentry
      </Header>

      <Text size="small" color="muted" className="mb-4" monospace>
        {process.env.PACKAGE_VERSION}
      </Text>

      <Header as="h3" color="muted" textAlign="center" className="w-75 mb-5">
        <em>A scalable, accessible React component library</em>
      </Header>
    </Flex>

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

    <Flex justify="center" direction="column" className="mb-5">
      <Block maxWidth="650px" className="my-4" m="auto">
        <Header {...featureHeaderProps}>Lightweight Bundle Size</Header>
        <Media {...featureProps}>
          <FeatureIcon
            as={Bundle}
            className="mr-3"
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
      </Block>

      <Block maxWidth="650px" className="my-4" m="auto">
        <Header {...featureHeaderProps}>Consistent APIs</Header>
        <Media {...featureProps}>
          <Media.Body>
            <p>
              Spend more time writing and less time checking documentation with consistent
              APIs and event hooks across components. Consistent APIs and focused
              component concerns make component composition easy.
            </p>
          </Media.Body>
          <FeatureIcon
            as={Merge}
            className="ml-3"
            alt="Different components utilize the same API"
          />
        </Media>
      </Block>

      <Block maxWidth="650px" className="my-4" m="auto">
        <Header {...featureHeaderProps}>A++ Accessibility</Header>
        <Media {...featureProps} className="border-bottom-0">
          <FeatureIcon
            as={Accessible}
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
        </Media>
      </Block>
    </Flex>
  </>
)
