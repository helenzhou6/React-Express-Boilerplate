# React-setup
Minimal React boilerplate.

## Features
* React Front End - with `styled-components`
* React testing with `jest` and `react-testing-library`
* Express back end server
* ESLint added and ready to go

## Running locally
1. Git clone this repo
2. Run `npm i` to install the required dependencies.
3. Run `build:client:watch` to let parcel do it's thing.
4. Run `start:server:watch` and view on `http://localhost:3000`
  * Any changes you make will update automatically on `http://localhost:3000`

## Back End
Should you not require a back-end server:
* Delete the `server` folder
* Run `npm uninstall express tap-spec tape supertest nyc nodemon`
* Remove the `test:server` and `start:server:watch` script and replace the last three lines in `package.json` with:
```json
    "start": "parcel ./public/index.html",
    "build": "parcel build ./public/index.html --public-url ./",
```
-- Now running `npm start` will build and be viewed on `http://localhost:1234/`

## Tests
* Front end: `npm run test`, and coverage: `npm run test:coverage`
* Back end: `npm run test:server`

## Placeholders
Remove these folders and files if not in use:
* `button.js` in styled folder
* `utilFunc.js` in utilities folder

## Folder Structure
```
react-setup
├── README.md
├── client
│   ├── __mocks__
│   │   ├── fileMock.js
│   │   └── styleMock.js
│   └── public
│   |   ├── assets
│   |   │   └── favicon.ico
│   |   ├── index.html
│   └── src
│       ├── components
│       │   ├── app.js
|       |   ├── app.test.js
│       │   └── error.js
│       ├── index.js
│       ├── styled
│       │   ├── button.js
│       │   └── theme.js
│       └── utils
│           └── utilFunc.js
├── package-lock.json
├── package.json
└── server
    └── src
        └── index.js
        └── app.js
        └── controllers
          └── index.js
        └── test
          └── controllers.backendtest.js
```

## Tech Stack

| Front end         | Back end     | Testing                     | Other          
| ----------------- | ------------ | --------------------------- | --------------- 
| React.js          | Express.js   | react-testing-library       | Babel
| JSX               | Node.js      | tape                        | Parcel
| Javascript (ES6)  |              | supertest                   | styled-components
| CSS3              |              | jest                        | 
| HTML5             |              | tap-spec                    | 