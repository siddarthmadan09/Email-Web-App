import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
class EmailView extends Component {

    state = {
        email:[]
    }

    componentDidMount () {
      let id = this.props.match.params.id;
      const emailURL = `https://5c5a21f9af3ff700140de477.mockapi.io/api/email/${id}`;

      fetch(emailURL)
      .then(response => response.json())
      .then(data => {
        this.setState({
          email : data
        })
        })
      .catch(() => {
        console.log(
          'Something wrong occured. Please try again'
        );
      });
    }

    render() {
        return (
          <div className="emailView">
            <div className="ui segments">
                <div className="ui segment">
                  <p>To : {this.state.email.to} </p>
                </div>
                <div className="ui segment">
                  <p>Subject : {this.state.email.subject}</p>
                </div>
                <div className="ui segment">
                  <p>{this.state.email.text}</p>
                </div>
            </div>
            <Button className="formButton" positive type="submit">Next</Button>
            <Button className="formButton" negative type="submit">Prev</Button>
          </div>
        )
    }
}

export default EmailView;