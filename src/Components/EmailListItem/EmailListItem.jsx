import React,{Component} from 'react';
import { withRouter } from 'react-router-dom'

 class EmailListItem extends Component {

  handleClick(emailId) {
    let path = `${process.env.PUBLIC_URL}/email/${emailId}`;
    console.log(path)
    this.props.history.push({
      pathname: path,
      state: { emailId:emailId }
    });
  }

  render() {
    return (
      <div onClick={() => this.handleClick(this.props.email.id)}>
        <div class="ui segment">
            <div class="ui inverted relaxed divided list">
            
              <ul className="item">
                  <li>
                    <span className="checkboxContent">
                      <input type="checkbox" className="check1" readOnly={false} />
                    </span>
                      <span className="fromContent">
                        {this.props.email.from}
                      </span>
                      <span className="textContent">{this.props.email.text.substring(0, 60)}...</span>
                  </li>
              </ul>
            </div>
          </div>
      </div>
    )
  }
}

export default withRouter(EmailListItem)