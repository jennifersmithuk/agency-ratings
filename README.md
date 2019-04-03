## Table of Contents

* [Project Background](#projectbackground)
* [Instructions](#instructions)
* [Dependencies](#dependencies)
* [Create React App](#createreactapp)

## Project Background

Creation of a React.js site using some React packages to create new components, JavaScript, JSON files and a backend server.

Project is on the MERN stack.

New JS files were created for each component and import/require statements were used when needed.

## Instructions

Download all files locally.
In your terminal:
* install all project dependencies with `npm install`
* start the development server with `npm start`
React app will start automatically on its own server and open in your browser.

For this app to work you will need a key for the MongoDB database, and you will need to put the key in a .env file in the backend folder of the app. Please add .env to .gitignore so that the key is not committed.

Please note that the package used to build the site: `create-react-app` means that the site comes with a pre-installed service worker to enable offline use. However this only works in production mode.

You can run the site in production mode by using the following commands in your terminal: `npm run build` then `serve -s build`. You can then use your browser and visit `localhost:5000`.

## Dependencies

* [NodeJs](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/)
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
* [Express](https://expressjs.com/)

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks. [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
