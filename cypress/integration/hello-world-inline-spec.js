/// <reference types="cypress" />
/// <reference types="../../lib" />
// @jsx h
import {h} from 'preact';
const HelloWorld = () => <p>Hello World!</p>
describe('HelloWorld component', () => {
  it('works', () => {
    cy.mount(<HelloWorld />)
    cy.contains('Hello World!')
  })
})
