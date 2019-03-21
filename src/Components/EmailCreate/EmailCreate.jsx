import React, { Component } from 'react';
import {Form, Segment, Button, Grid } from 'semantic-ui-react';
class EmailCreate extends Component {

    state = {
      emailList : []
    }

    render () {
    return (
          <Grid>
            <Grid.Column width={16}>
              <Segment>
                <Form>
                    <div class="field">
                        <label>To</label>
                        <input placeholder="First Name"/>
                    </div>
                    <div class="field">
                        <label>Subject</label>
                        <input placeholder="Last Name"/>
                    </div>
                    <textarea placeholder="type your message here" onChange={this.handleChange} />
                    <Button className="formButton" positive type="submit">Send</Button>
                </Form>
              </Segment>
            </Grid.Column>
        </Grid>
        )
    }
}

export default EmailCreate;