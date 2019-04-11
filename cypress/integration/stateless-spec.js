/// <reference types="cypress" />
/// <reference types="../../lib" />
import HelloWorld from '../../src/stateless.jsx'
import {h} from 'preact';

/* eslint-env mocha */
describe('Stateless component', () => {
  beforeEach(() => {
    // pass spy and save it under an alias
    // so we can easily get it later with cy.get('@greeting')
    const spy = cy.spy().as('greeting')
    cy.mount(<HelloWorld name='Test Aficionado' click={spy} />)
  })

  it('shows link', () => {
    cy.contains('a', 'Say Hi')
  })

  it('alerts with name', () => {
    cy.contains('Say Hi').click()
    cy.get('@greeting').should('be.calledWith', 'Hi Test Aficionado')
  })
})
