# 11 Express.js: Note Taker

## Description

A CLI generated note taker app using Express JS


## Installation

```
Run node server.js from the terminal to launch the app
```


## Key Features

```
A note-taking application is generated.  When opening Note Taker, the user is presented with a landing page with a link to a notes page
WHEN clicking on the link to the notes page, then the user is presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column.  WHEN entering a new note title and the note’s text, then a Save icon appears in the navigation at the top of the page.  When clicking on the Save icon, then the new note I have entered is saved and appears in the left-hand column with the other existing notes.  When clicking on an existing note in the list in the left-hand column, that note appears in the right-hand column.  When clicking on the Write icon in the navigation at the top of the page, then the user is presented with empty fields to enter a new note title and the note’s text in the right-hand column
```


## Back-End Functionality

On the back end, the application includes a `db.json` file that is used to store and retrieve notes using the `fs` module.  

The following HTML routes are used:

* `GET /notes` returns the `notes.html` file.

* `GET *` returns the `index.html` file.

The following API routes are used:

* `GET /api/notes` reads the `db.json` file and return all saved notes as JSON.

* `POST /api/notes` receives a new note to save on the request body, add it to the `db.json` file, and then returns the new note to the client. NPM UUID is used to give each note a unique id when it's saved.