import React,{Component} from 'react';
import { withRouter } from 'react-router-dom'

 class EmailListItem extends Component {

  handleClick(emailId) {
    let path = `${process.env.PUBLIC_URL}/email/${emailId}`;
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
                    <span className="listContent">
                      <input type="checkbox" className="check1" readOnly={false} />
                    </span>
                      <span className="listContent1">
                        {this.props.email.from}
                      </span>
                      <span className="listContent2">{this.props.email.text.substring(0, 70)}...</span>
                  </li>
              </ul>
            </div>
          </div>
      </div>
    )
  }
}

export default withRouter(EmailListItem)