/* eslint-disable no-plusplus, no-console */
import { createUtilityClasses } from '../utils/utility-classes'
import { createUtilityClasses as v1CreateUtilityClasses } from './v1-utility-classes'

console.log('--- V1 createUtilityClasses ---')
const v1start = performance.now()
const v1largeStart = performance.now()
for (let i = 0; i < 100000; i++) {
  v1CreateUtilityClasses({
    alignItems: 'stretch',
    bold: true,
    color: 'body',
    direction: 'column',
    display: 'block',
    gap: 3,
    lineHeight: 'snug',
    minHeight: 'screen',
    mt: 3,
    visible: true,
    dataselected: true,
    datatest: 'custom',
  })
}
const v1largeEnd = performance.now()

const v1smallStart = performance.now()
for (let i = 0; i < 100000; i++) {
  v1CreateUtilityClasses({
    display: 'block',
    mt: 3,
    datatest: 'custom',
  })
}
const v1smallEnd = performance.now()
const v1end = performance.now()

console.log(`Large set time: ${v1largeEnd - v1largeStart}`)
console.log(`Small set time: ${v1smallEnd - v1smallStart}`)
console.log(`Total time: ${v1end - v1start}`)

console.log('--- V2 createUtilityClasses ---')
const v2start = performance.now()
const v2largeStart = performance.now()
for (let i = 0; i < 100000; i++) {
  createUtilityClasses({
    alignItems: 'stretch',
    bold: true,
    color: 'body',
    direction: 'column',
    display: 'block',
    gap: 3,
    lineHeight: 'snug',
    minHeight: 'screen',
    mt: 3,
    visible: true,
    dataselected: true,
    datatest: 'custom',
  })
}
const v2largeEnd = performance.now()

const v2smallStart = performance.now()
for (let i = 0; i < 100000; i++) {
  createUtilityClasses({
    display: 'block',
    mt: 3,
    datatest: 'custom',
  })
}
const v2smallEnd = performance.now()
const v2end = performance.now()

console.log(`Large set time: ${v2largeEnd - v2largeStart}`)
console.log(`Small set time: ${v2smallEnd - v2smallStart}`)
console.log(`V2 Total time: ${v2end - v2start}`)
