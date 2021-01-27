import React from "react";

export const Footer = () => (
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
            <span>info@lutherconstruction.com</span>
          </div>
          <div className="contact-type">
            <h3 className="contact-type-header">Social</h3>
            <div id="social-row">
              <div className="fa fa-facebook-square"></div>
              <div className="fa fa-instagram"></div>
            </div>
          </div>
        </div>
        <div id="contact2nd" className="col-12 col-md-6">
          <form
            id="contactForm"
            action="/contact"
            name="contactus"
            method="post"
            className="ng-pristine ng-valid"
          >
            <div className="form-group">
              <h5>
                Contact us for more information regarding a specific project.
              </h5>
              <label htmlFor="Name">Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="Name"
                name="Name"
                id="Name"
              />
              <label htmlFor="Phone">Phone</label>
              <input
                className="form-control"
                type="text"
                placeholder="Phone"
                name="Phone"
                id="Phone"
              />
              <label htmlFor="Email">Email</label>
              <input
                className="form-control"
                type="text"
                placeholder="Email"
                name="Email"
                id="Email"
              />
              <label>Message</label>
              <textarea
                className="form-control"
                type="text"
                placeholder="Write Message Here."
                name="Message"
                id="Message"
              ></textarea>

              <input
                className="form-control"
                type="submit"
                value="submit"
                id="send_email"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
