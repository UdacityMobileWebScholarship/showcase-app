## Showcase App
### Introduction
The idea behind this project is to list all other collaborative projects in a web app that is offline capable and is built using modern web platform features. A user can see a list of cards with details about all other collaborative projects under [Udacity's Mobile Web Scholarship](https://github.com/UdacityMobileWebScholarship/) program. This list can be filtered/sorted based on categories and different features that the listed projects use. Users can see detailed info for projects by clicking on an individual card and see live experience as well.

### Stack
We've decided to use _MERN_ stack in our project. That means we'll be using [Mongo](https://www.mongodb.com/), [Express](https://expressjs.com/), [React](https://reactjs.org/) and [Node](http://nodejs.org/) to build our entire architecture.
For the PWA related functionalities, we've decided to build the prod SW file with CRA itself but we've tried our best to separate those source files into Vanilla javascript modules so that anyone not familiar with React or CRA but have completed the full course can contribute easily to the project.

### How to Contribute
The best way to get started with contributing is to identify a feature, bug or module that is [open for contributions](https://github.com/UdacityMobileWebScholarship/showcase-app/labels/open%20for%20claim). Non-code contributions are also counted. You can contribute by helping people on issues board (for ex. someone is having trouble setting the repository and running app or any other queries).
For code style and commit guidelines please see [CONTRIBUTING.md](https://github.com/UdacityMobileWebScholarship/showcase-app/blob/master/.github/CONTRIBUTING.md)

### Design Guidelines
A [Design Guideline](.github/DESIGN_GUIDELINES.md) has been created for reference. Please refer to it while making changes in UI.

### Labels
We are using Github labels to categorize issues and pull requests.

| Label | Description |
| --- | --- |
| [bug](https://github.com/UdacityMobileWebScholarship/showcase-app/labels/bug) | Something isn't working as expected. Probably implementation is wrong. |
| [duplicate](https://github.com/UdacityMobileWebScholarship/showcase-app/labels/duplicate) | This issue or pull request already exists |
| [enhancement](https://github.com/UdacityMobileWebScholarship/showcase-app/labels/enhancement) | New feature or request |
| [good first issue](https://github.com/UdacityMobileWebScholarship/showcase-app/labels/good%20first%20issue) | We know where the problem lies, we'll provide info in issue. But we think this is a good issue to work on if you are a new contributor and want to get started with the project |
| [help wanted](https://github.com/UdacityMobileWebScholarship/showcase-app/labels/help%20wanted) | We need to consult the community on this issue or we need help regarding this |
| [open for claim](https://github.com/UdacityMobileWebScholarship/showcase-app/labels/open%20for%20claim) | this issue is open for anyone who wants to contribute. note: if you want to claim the issue, please comment on it with brief details on how you'd want to approach the problem |
| [invalid](https://github.com/UdacityMobileWebScholarship/showcase-app/labels/invalid) | This issue or PR doesn't seem right |
| [question](https://github.com/UdacityMobileWebScholarship/showcase-app/labels/question) | This is a query, further information is requested |
| [wontfix](https://github.com/UdacityMobileWebScholarship/showcase-app/labels/wontfix) | We know this issue or feature request, but after consulting among all the Co-Moderators, we've decided not to implement this feature or take this path |
| [PR: change requested](https://github.com/UdacityMobileWebScholarship/showcase-app/pulls?utf8=%E2%9C%93&q=is%3Apr+is%3Aopen+label%3A%22PR%3A+change+requested%22+) | Some change is required before merging this PR |
| [PR: confirm merge](https://github.com/UdacityMobileWebScholarship/showcase-app/pulls?utf8=%E2%9C%93&q=is%3Apr+is%3Aopen+label%3A%22PR%3A+confirm+merge%22+) | PR is reviewed and ready to be merged |
| [Nice to have](https://github.com/UdacityMobileWebScholarship/showcase-app/labels/Nice%20to%20have) | It is nice to have this feature, but we do not guarantee it yet. |
| [Important](https://github.com/UdacityMobileWebScholarship/showcase-app/labels/Important) | This is important to address |
| [Urgent](https://github.com/UdacityMobileWebScholarship/showcase-app/labels/Urgent) | This is urgent to address |
| [Critical](https://github.com/UdacityMobileWebScholarship/showcase-app/labels/Critical) | This is critical to address |

### Project Set Up 
Open folder you want to clone this repo into, then-
* Frontend
    * `git clone https://github.com/UdacityMobileWebScholarship/showcase-app.git`
    * `cd showcase-app/client`
    * `yarn start` - to run development build
    * `yarn build` - to build prod release
    * `yarn test` - Launches the test runner in the interactive watch mode

> Note: the front end app is bootstrap using [Create React App](https://github.com/facebook/create-react-app). You can find more details about architecture [here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md). See [Project Wiki Page](https://github.com/UdacityMobileWebScholarship/showcase-app/wiki/Client-Project-set-up).

* Backend
 //TODO: init proj and add docs

 
<h2 align="center">Moderators</h2>

<table>
  <tbody>
    <tr>
      <td align="center" valign="top">
        <img width="150" height="150" src="https://github.com/divyamrastogi.png?s=150">
        <br>
        <a href="https://github.com/divyamrastogi">Divyam Rastogi</a>
      </td>
      <td align="center" valign="top">
        <img width="150" height="150" src="https://github.com/palnabarun.png?s=150">
        <br>
        <a href="https://github.com/palnabarun">Nabarun Pal</a>
      </td>
      <td align="center" width="20%" valign="top">
        <img width="150" height="150" src="https://github.com/ParthS007.png?s=150">
        <br>
        <a href="https://github.com/ParthS007">Parth Shandilya</a>
      </td>
      <td align="center" valign="top">
        <img width="150" height="150" src="https://github.com/PrabhanshuAttri.png?s=150">
        <br>
        <a href="https://github.com/PrabhanshuAttri">Prabhanshu Attri</a>
      </td>
      </tr>
      <tr>
      <td align="center" valign="top">
        <img width="150" height="150" src="https://github.com/shubhshrma.png?s=150">
        <br>
        <a href="https://github.com/shubhshrma">Shubham Sharma</a>
      </td>
      <td align="center" valign="top">
        <img width="150" height="150" src="https://github.com/realslimshanky.png?s=150">
        <br>
        <a href="https://github.com/realslimshanky">Shashank Kumar</a>
      </td>
      <td align="center" valign="top">
        <img width="150" height="150" src="https://github.com/ritikrishu.png?s=150">
        <br>
        <a href="https://github.com/ritikrishu">Ritik Rishu</a>
      </td>
     </tr>
  </tbody>
</table>
