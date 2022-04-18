# full_stack_open_2021

Based on the course: https://fullstackopen.com/.

This respository contains the part 1 and 2.

## Part 0 (Fundamentals of Web apps)
Just fundamentals of the web. Nothing to code.

## Part 1 (Introduction to React)
How to create components in React.<br>
Basic stuff about javascript (variables, objects...).<br>
States, props and events.<br>
How rendering works, debugging in chrome.

### How to run?

Move youself inside the project you want to run.

```bash
npm start
```

## Part 2 (Communicating with server)
Using arrays to create components in React.<br>
Basic forms.<br>
Getting data from server (axios and promises).<br>
Sending data to server and clear code.<br>
Styles to React.

### How to run?

Move youself inside the project you want to run.

```console
npm start
```

### Phonebook

This project has more options to run.

#### Locally

Runs a small server in http://localhost:3001 that serves the file db.json:

```console
npm run server
```

The database is in the url http://localhost:3001/persons.

We need to change in `src/services/persons.js` the baseUrl and put:

```javascript
const baseUrl = 'http://localhost:3001/persons'
```

#### Heroku

Assuming the following project structure:

```
|- full_stack_open_2021
|- full_stack_open_2021_part3
```

Creates the build directory with the production build of the frontend and copies it to full_stack_open_2021_part3.

```console
# "build:ui": "npm run build && xcopy /E /Y build ..\\..\\..\\full_stack_open_2021_part3\\build"
npm run build:ui
```
