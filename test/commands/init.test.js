const {expect, test} = require('@oclif/test')

describe('init', () => {
  test
  .stdout()
  .command(['init'])
  .it('initialized project', ctx => {
    expect(ctx.stdout).to.contain('Todo app init successfully')
  })

})
