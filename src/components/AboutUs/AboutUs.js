import React from "react";
import "./AboutUs.css";
//handling the translations

class AboutUs extends React.Component {
  render() {
    return (
      <div className="section" id="aboutUs">
        <h2 className="contactus">
          Get in touch

        </h2>
        <p className="moreinfo">
        Do you have any questions? Get in touch with us by email
          <span>
            <a style={{ color: 'rgb(108, 123, 104)' }} href="mailto:laurenperkey@gmail.com">
              <span> </span>
             here.
            </a>
          </span>
        </p>
        <hr />
      </div>
    );
  }
}

export default AboutUs;
