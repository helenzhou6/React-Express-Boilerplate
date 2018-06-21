# React-setup
Minimal React boilerplate.

## Features
* React Front End - with `styled-components`
* React testing with `jest` and `react-testing-library`
* Express back end server

## Running locally
1. Git clone this repo
2. Run `npm i` to install the required dependencies.
3. Run `npm run build` to let parcel do it's thing.
4. Run `npm start` and view on `http://localhost:3000`

## Back End
Should you not require a back-end server:
* Delete the `server` folder
* Run `npm uninstall express`
* Replace the last three lines in `package.json` with:
```json
    "start": "parcel ./public/index.html",
    "build": "parcel build ./public/index.html --public-url ./",
```
And instead it will run on `http://localhost:1234/`

## Placeholders
Remove these folders and files if not in use:
* `button.js` in styled folder
* `utilFunc.js` in utilities folder