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