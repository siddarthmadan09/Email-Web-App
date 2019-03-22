I used React to develop the client UI. Since it was developed using React, it was easy to breakdown the UI into components.


1. EmailMain - Holds the entire email part of the application - Like a Higher order component
2. EmailList - Holds the entire list of email items
3. EmailListItem - This component generates each of the email items.
4. EmailCreate - This component generates the new email creation view
5. EmailView - This provide the view when clicked into a particular email item.
6. NavBar - This just holds the sidebar(for presentational purposes) - (not included in requirements.)




Coming to the state(where the data resides, on which events act upon).
The Email list holds the email data fetched from the api.
This component passes down each of the email items in the EmailList to EmailListItem Component so that it can display each of the emails separately when clicked upon.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


