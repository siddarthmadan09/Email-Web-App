import React, { Component } from 'react'
import EmailMain from '../EmailMain/EmailMain';
class NavBar extends Component {

  render() {

    return (
        <div class="row">
            <div className="col m3 l3">
                    <div className="ui navbar vertical menu">
                            <a className="active item">
                                <div className="ui teal label z-depth-4">1</div>
                                Inbox
                            </a>
                            <a className="item "><div className="ui label">51</div>Spam</a>
                            <a className="item"><div className="ui label">1</div>Updates</a>
                            <div className="item">
                                <div className="ui icon input">
                                <input type="text" placeholder="Search mail..."/>
                                <i aria-hidden="true" className="search icon"></i>
                                </div>
                    </div>
                </div>
                </div>
                <div className="col m9 l9">
                    <EmailMain></EmailMain>
                    </div>
        </div>
    )
  }
}

export default NavBar