/**
 * Testing file for types
 */

/* eslint-disable */
import React from 'react'
import clsx, { ClassValue } from 'clsx'
import {
  Active,
  Alert,
  Badge,
  Block,
  Button,
  Card,
  Close,
  Flex,
  Icon,
  Link,
  Text,
} from '../src'

const testActive = (
  <Active defaultActive={false} onDeactivated={(evt) => console.log(evt.target)}>
    <Active.Action>Rad</Active.Action>
    <Active.Content>Active</Active.Content>
  </Active>
)

const testAlert = (
  <Alert variant='outline' color='success'>
    Test alert
  </Alert>
)

const testBadge = <Badge variant='rounded'>77</Badge>

const testBlock = (
  <Block inline width={16} height={16}>
    test block
  </Block>
)
const testButton = (
  <Button variant='primary' size='sm' active>
    Click
  </Button>
)
const testCard = (
  <Card p='sm' className='rad'>
    <Card.Body mt='sm'>Works</Card.Body>
    <Card.Footer>Rad</Card.Footer>
  </Card>
)
const testClose = <Close onClick={() => console.log} />
const testFlex = (
  <Flex justify='center'>
    <div>Hey</div>
    <div>Hey</div>
  </Flex>
)
const testIcon = <Icon id='test' className='rad' />
const testLink = <Link href='https://componentry.com'>A Link</Link>
const testText = (
  <Text className='rad' id='test'>
    Test the text
  </Text>
)

// --------------------------------------------------------
// Testing extending html attrs with classnames className

interface ButtonProps
  extends Omit<React.ComponentPropsWithoutRef<'button'>, 'className'> {
  as?: React.ElementType
  className?: ClassValue
}

const SpecialButton: React.FC<ButtonProps> = ({ children, className, ...rest }) => {
  return (
    <button type='button' className={clsx('SpecialButton', className)} {...rest}>
      {children}
    </button>
  )
}

const specialColor = 'primary'
const specialButton = (
  <SpecialButton as='div' className='very-special'>
    Special
  </SpecialButton>
)

// Wrapping an HTML el: https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase#wrappingmirroring
// Polymorphic component: https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase#polymorphic-components-eg-with-as-props
