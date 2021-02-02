import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";

export class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: {
        name: "",
        phone: "",
        email: "",
        message: "",
      },
    };
  }
  updateMessage = (e) => {
    const field = e.target.name;
    const message = this.state.message;
    message[field] = e.target.value;

    this.setState({
      message,
    });
  };

  processForm = (e) => {
    e.preventDefault();
    this.props.dispatch(actions.sendMessage(this.state.message)).then(() => {
      this.setState({
        message: {
          name: "",
          phone: "",
          email: "",
          message: "",
        },
      });
    });
  };
  render() {
    const sendMessageSuccess = this.props.sendMessageSuccess;
    const sendMessageError = this.props.sendMessageError;
    return (
      <footer>
        <div id="contact" className="ng-scope">
          <h2>CONTACT</h2>
          <div className="row">
            <div id="contact1st" className="col-12 col-md-6">
              <div className="contact-type">
                <h3 className="contact-type-header">Adddres</h3>
                <span>1234 Main Street Arcadia, FL 34266</span>
              </div>
              <div className="contact-type">
                <h3 className="contact-type-header">Phone</h3>
                <span>(863) 990-3682</span>
              </div>
              <div className="contact-type">
                <h3 className="contact-type-header">Email</h3>
                <span>
                  <a
                    className="footer-link"
                    href="mailto:info.luthercon@gmail.com"
                  >
                    info.luthercon@gmail.com
                  </a>
                </span>
              </div>
              <div className="contact-type">
                <h3 className="contact-type-header">Social</h3>
                <div id="social-row">
                  <div>
                    <a
                      href="http://facebook.com"
                      className="fa fa-facebook-square footer-link"
                    ></a>
                  </div>
                  <div>
                    <a
                      href="http://instagram.com"
                      className="fa fa-instagram footer-link"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
            <div id="contact2nd" className="col-12 col-md-6">
              <form
                id="contactForm"
                onSubmit={this.processForm}
                name="contactus"
                className="ng-pristine ng-valid"
              >
                <div className="form-group">
                  <h5 className="contact-header">
                    Contact us for more information regarding a specific
                    project.
                  </h5>
                  <label htmlFor="name">Name</label>
                  <input
                    className="form-control"
                    onChange={this.updateMessage}
                    type="text"
                    placeholder="name"
                    value={this.state.message.name}
                    name="name"
                    id="name"
                  />
                  <label htmlFor="phone">Phone</label>
                  <input
                    className="form-control"
                    onChange={this.updateMessage}
                    type="text"
                    placeholder="phone"
                    name="phone"
                    value={this.state.message.phone}
                    id="phone"
                  />
                  <label htmlFor="email">Email</label>
                  <input
                    className="form-control"
                    onChange={this.updateMessage}
                    type="text"
                    placeholder="email"
                    name="email"
                    value={this.state.message.email}
                    id="email"
                  />
                  <label>Message</label>
                  <textarea
                    className="form-control"
                    onChange={this.updateMessage}
                    type="text"
                    placeholder="Write Message Here."
                    name="message"
                    value={this.state.message.message}
                    id="message"
                  ></textarea>

                  <input
                    className="form-control"
                    type="submit"
                    value="submit"
                    id="send_email"
                  />
                  {sendMessageSuccess && <h3>Message Sent Successfully.</h3>}
                  {sendMessageError && <h3>Message Failed to Send.</h3>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
const mapStateToProps = (state) => ({
  sendMessageSuccess: state.message.sendMessageSuccess,
  sendMessageError: state.message.sendMessageError,
});

export default connect(mapStateToProps)(Footer);
