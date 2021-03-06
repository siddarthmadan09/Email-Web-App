import React, { Component } from 'react';
import EmailListItem from '../EmailListItem/EmailListItem';
import { Button } from 'semantic-ui-react';

const emailURL = "https://5c5a21f9af3ff700140de477.mockapi.io/api/email/";

class EmailList extends Component {

  state = {
    emailList : []
  }

  componentDidMount () {
    fetch(emailURL)
    .then(response => response.json())
    .then(data => {
       this.setState({
         emailList : data.slice(0,10)
       })
      })
    .catch(() => {
      console.log(
        'No internet connection found. App is running in offline mode.'
      );
    });
  }

  render() {
  
   const EmailListItems = this.state.emailList.map((email) => {
        return (
          <div>
        <EmailListItem email= {email} key={email.id} />
        <Button className="formButton" negative type="submit">DELETE</Button>
        </div>
        ) 
    })

    return (
      <div>
       { EmailListItems }
        </div> 
    )
  }
}

export default EmailList;