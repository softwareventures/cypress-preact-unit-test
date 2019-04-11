/// <reference types="cypress" />
/// <reference types="../../lib" />
// @jsx h
import HelloWorld from '../../src/stateless-alert.jsx'
import {h} from 'preact';

/* eslint-env mocha */
describe('Stateless alert', () => {
  beforeEach(() => {
    const spy = cy.spy().as('alert')
    cy.on('window:alert', spy)
    cy.mount(<HelloWorld name='Alert' />)
  })

  it('shows link', () => {
    cy.contains('a', 'Say Hi')
  })

  it('alerts with name', () => {
    cy.contains('Say Hi').click()
    cy.get('@alert').should('have.been.calledOnce')
  })
})
