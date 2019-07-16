const { expect, test } = require('@oclif/test');

describe('edit', () => {
  test
    .stdout()
    .command(['edit'])
    .it('runs edit with no args', ctx => {
      expect(ctx.stdout).to.contain('Add a valid id from a todo item');
    });
});
