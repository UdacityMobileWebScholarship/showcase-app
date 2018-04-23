# Contributing to The Show Case App

We would love for you to contribute to the project and help make it even better! You can contribute either through code or helping us out on different issues, suggesting features etc. As a contributor here are the guidelines we would like you to follow:


 - [Code of Conduct](#coc)
 - [Question or Problem?](#question)
 - [Issues and Bugs](#issue)
 - [Feature Requests](#feature)
 - [Submission Guidelines](#submit)

## <a name="coc"></a> Code of Conduct
Help us keep the project open and inclusive. Please read and follow our [Code of Conduct](https://github.com/UdacityMobileWebScholarship/showcase-app/blob/master/.github/CODE_OF_CONDUCT.md).

## <a name="question"></a> Got a Question, Query or Problem?

Do not open issues for general queries as we want to keep GitHub issues for bug reports, feature requests and project development related contributions. For general queries reach out to us on [#cp_shwcase_app](https://mobilewebindiascholar.slack.com/messages/CA8MRBPAT) channel on slack.

## <a name="issue"></a> Found a Bug?
If you find a bug in the source code, you can help us by
[submitting an issue](https://github.com/UdacityMobileWebScholarship/showcase-app/issues/new) to our GitHub Repository. Even better, you can check out issues [open for claim](https://github.com/UdacityMobileWebScholarship/showcase-app/labels/open%20for%20claim) and claim one!

## <a name="feature"></a> Missing a Feature?
You can *request* a new feature by [submitting an issue](https://github.com/UdacityMobileWebScholarship/showcase-app/issues/new) to our GitHub
Repository. Given the project timeline and necessity for the feature, we'll discuss the roadmap accordingly. If you would like to *implement* a new feature, please submit an issue with
a proposal for your work first, to be sure that we can use it.

## <a name="submit"></a> Submission Guidelines

### <a name="submit-issue"></a> Submitting an Issue
Before you submit an issue, please search the issue tracker, maybe an issue for your identified problem already exists and you can join the discussion there only.
For bugs, please try to provide as much information possible to reproduce it as possible, that will really help us a lot!

### <a name="submit-pr"></a> Submitting a Pull Request (PR)
1. Make sure there is an issue open for the PR and it is assigned to you before starting any work. That way it'll be helpful to eliminate duplicate efforts.
2. Fork the repo. If already have one, checkout the latest master from upstream.
3. Make your changes in a new git branch. Ideally your PR should close one issue at a time, try to create branches with issue number prefix:

     ```shell
     git checkout -b 9-my-fix-branch master
     ```
4. Create your patch, **including appropriate test cases**.
5. Run the full project test suite, as described in the [readme](https://github.com/UdacityMobileWebScholarship/showcase-app/tree/master#user-content-project-set-up),
  and ensure that all tests pass.
6. Commit your changes using a descriptive commit message. ex-
     ```shell
     git commit -m "doc: update readme"
     git commit -m "ref: refactor API service"
     git commit -m "feat: add authentication service"
     or
     git commit -m "Updates readme"
     git commit -m "Refactor API Service"
     git commit -m "Adds authentication service"
     ```
note: it is not mandatory to write commit messages in the same format, a meaningful message is always helpful in understanding the purpose of the commit.

7. Push your branch to GitHub
     ```shell
     git push origin 9-my-fix-branch
     ```
8. In GitHub, send a pull request to `showcase-app:master`.
  If we suggest changes then:
  * Make the required updates.
  * Re-run the test suites to ensure tests are still passing.
  * Commit latest changes and push again to your branch

That's it! Thank you for your contribution!


#### After your pull request is merged

After your pull request is merged, you can safely delete your branch and pull the changes
from the main (upstream) repository:

* Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:

    ```shell
    git push origin --delete 9-my-fix-branch
    ```

* Check out the master branch:

    ```shell
    git checkout master -f
    ```

* Delete the local branch:

    ```shell
    git branch -D 9-my-fix-branch
    ```

* Update your master with the latest upstream version:

    ```shell
    git pull --ff upstream master
    ```
