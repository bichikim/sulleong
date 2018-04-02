const {expect} = require('chai')
const sulleong = require('../../dist/app')
describe('Sulleong', () => {
  it('has all members', () => {
    expect(sulleong.default).to.be.a('function')
    expect(sulleong.PairMap).to.be.a('function')
  })
})