import React from "react";
import "./AboutUs.css";
//handling the translations

class AboutUs extends React.Component {
  render() {
    return (
      <div className="section" id="aboutUs">
        <h2 className="contactus">
          {this.props.t("contactus.title", {
            framework: "react-i18next"
          })}
        </h2>
        <p className="moreinfo">
          {this.props.t("contactus.summary", {
            framework: "react-i18next"
          })}{" "}
          <span>
            <a href="mailto:laurenperkey@gmail.com">
              {this.props.t("contactus.email", {
                framework: "react-i18next"
              })}
            </a>
          </span>
        </p>
        <hr />
      </div>
    );
  }
}

export default AboutUs;
