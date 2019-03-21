import React, { Component } from 'react';
import EmailView from '../EmailView/EmailView';
import EmailCreate from '../EmailCreate/EmailCreate';
import { Route, Switch } from 'react-router-dom';
import EmailList from '../EmailList/EmailList';
import { Link  } from "react-router-dom";

class EmailMain extends Component {

  render() {
      return (
        <div>
            <div className="main ui secondary pointing menu">
                <Link to={`${process.env.PUBLIC_URL}/email`} className=" waves-effect center active item">
                        List
                </Link>
                <Link to={`${process.env.PUBLIC_URL}/email/new`} className="center active item">
                      Create
                </Link>
            </div>
            <Route
              path="/(.+)"
              render={() => (
                    <div>
                        <Switch>
                            <Route path={`${process.env.PUBLIC_URL}/email/new`} component={EmailCreate} />
                            <Route path={`${process.env.PUBLIC_URL}/email/:id`} component={EmailView} />
                            <Route path={`${process.env.PUBLIC_URL}/email`} component={EmailList} />
                        </Switch>
                    </div>
              )} />
        </div>
  )
}
}
export default EmailMain;
