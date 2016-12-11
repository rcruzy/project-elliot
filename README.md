# Project description

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Design was inspired by this [Awesome Template from startbootstrap.com](https://startbootstrap.com/template-overviews/stylish-portfolio/)

## Release Process

* Create PR to `github_pages_deployment` branch.
* Once PR is approved and merged, checkout `github_pages_deployment` branch in your local.
* Run `npm run deploy` **to execute minified build and automagically commit** to `gh-pages` branch. This would publish to [ryanjcruz.com] (http://ryanjcruz.com).
* Run `git tag vN.N.N` then bump `package.json` to next deployment version.
* Run `git push --tags` to commit tag.
* Commit version bump.
* Create PR from `github_pages_deployment` to `master` branch.
