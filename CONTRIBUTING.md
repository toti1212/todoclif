# Contributing to todoclif
I love open-source 💛, so you are welcome to contribute if you want.

## Development Requirements
Make sure you install all npm package for dev dependencies. You need to check `eslint` and `prettier` to.

Run commands using:
```
./bin/run COMMAND
```

Make it verbose:
```
 DEBUG=* ./bin/run COMMAND
```

## Pull Requests
As I say, PR are welcome:

1. Fork the repo and create your branch from `master`.
2. Run `npm -i -D` after forking/cloning the repo.
3. If you've added code that should be tested, add tests.
4. If you've changed APIs, update the documentation.
5. Ensure the test suite passes.
6. Make sure your code lints.
7. Keep in mind conflicts with `master`. Solve them.
8. Make a commit message using the guidelines.

## Commit Messages
As you can see, I like emojis 🌝. I inspire from [WalmartLabs commit messages](https://medium.com/walmartlabs/semantic-commit-messages-with-emojis-dba2541cea9a), so the guideline is:

- ⭐ for commits related to adding new features.
- 📦 for commits related to releases.
- 🐛 for commits related to fixing broken code.
- 📝 for commits related to adding and maintaining documentation.
- ♻️ for commits related to refactoring code and making it work better.
- 🛠 for commits related to writing or fixing tests.
- 🌈 for commits related to making your code or your app beautiful with style changes.

A good commit log can look like this:

```
⭐️ explain the feature in one line

Body of commit message in a few lines of text...
```

Make sure you push a **single** commit.

## Issues
I use GitHub issues to track public bugs. You can send me a twit if you want ([@_toti1212](https://twitter.com/_toti1212)). Please ensure your description is clear and has sufficient instructions to be able to reproduce the issue.

## Coding Style  
I use [eslint](https://eslint.org/) and [prettier](https://prettier.io/). Make sure your code
is formatted with those before sending the pull request.

## License
By contributing to todoclif, you agree that your contributions will be licensed
under the LICENSE file in the root directory of this source tree 🗣.
