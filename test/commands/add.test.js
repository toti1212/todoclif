const {expect, test} = require('@oclif/test')

describe('add', () => {
  test
  .stdout()
  .command(['add'])
  .exit(2)
  .it('Add item without description')

  test
  .stdout()
  .command(['add', 'make tests'])
  .it('Add item with description', ctx => {
    expect(ctx.stdout).to.contain('Successfully added')
  })
})
