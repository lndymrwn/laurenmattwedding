import React from "react";
import "./Gift.css";

class Gift extends React.Component {
  render() {
    return (
      <div className="section" id="gifts">
        <h2>
          {this.props.t("gifts.title", {
            framework: "react-i18next"
          })}
        </h2>
        <p>
          {this.props.t("gifts.paragraph", {
            framework: "react-i18next"
          })}
        </p>
        <hr />
      </div>
    );
  }
}

export default Gift;
