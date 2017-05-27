# Project description

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Design was inspired by this [Awesome Template from startbootstrap.com](https://startbootstrap.com/template-overviews/stylish-portfolio/)

## Release Process

* Create PR to `aws-integration` branch.
* Once PR is approved and merged, checkout `aws-integration` branch in your local.
* Run `npm run deploy`. See [this](http://serverless-stack.com/chapters/configure-the-aws-cli.html) for setting up AWS CLI locally.
* Run `git tag vN.N.N` then bump `package.json` to next deployment version.
* Run `git push --tags` to commit tag.
* Commit version bump.
* Create PR from `aws-integration` to `master` branch.
