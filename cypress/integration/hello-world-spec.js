/// <reference types="cypress" />
/// <reference types="../../lib" />
import { HelloWorld } from '../../src/hello-world.jsx'
import {h} from 'preact';

/* eslint-env mocha */
describe('HelloWorld component', () => {
  it('works', () => {
    cy.mount(<HelloWorld />)
    cy.contains('Hello World!')
  })
})
