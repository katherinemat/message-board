# Message Board

#### _Message board to post questions and answers to those questions._

#### By _**Katherine Matthews**_

## Description

_Homepage lists all questions and their authors by most recent to least recent. Click on each question to go to it's forum, where answers and comments are linked-out beneath, allowing for conversation between users to answer questions. Users can also edit their questions._

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd message-board`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Specifications

1. build out index page with a form to add new questions
- create link to home page that stays on application handlebars page
- make the form show only if user clicks on a button that says: add new question
- home page shows all questions with their authors
- home page questions should be clickable and lead to a route specific to each question
- on question's page, the full text, author, and title show
- delete one question at a time
- offer a button to reveal a form to edit the question's text, author name, and title
- form to submit answer
- each answer shows beneath its question

## Known Bugs

None.

## Technologies Used

* _Ember JS_
* _Node_
* _Bower_
* _SCSS_
* _Javascript_
* _HTML_
* _CSS_

### License

*This project is licensed under the MIT license.*

Copyright (c) 2017 **_Katherine Matthews_**
