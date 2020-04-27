import React, {Fragment} from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from './history';
import Login from "./Login/Login";
import NotFound from "./NotFound/NotFound";
import App from "../App";
import Hero from "./Hero/Hero";
import Navbar from './Navbar/Navbar';
import Location from './Location/Location';
import AboutUs from './AboutUs/AboutUs';
import Table from './Table/Table';
import PrivateRoute from "./PrivateRoute";
import { firebaseApp } from "../base";
import { translate } from "react-i18next";

class Routes extends React.Component {

  render() {
    return (
      <div>
        <Router history={history}>
          <Switch>
            <Route exact path="/"  render={() => {
              return (
              <Fragment>
              <Navbar t={this.props.t}/>
              <Hero t={this.props.t}/>
              </Fragment>
              )
            }} />
            <Route exact path="/travel"  render={() => {
              return (
              <Fragment>
              <Navbar t={this.props.t}/>
              <Location t={this.props.t} />
              </Fragment>
              )
            }} />
            <Route exact path="/scheduleOfEvents"  render={() => {
              return (
              <Fragment>
              <Navbar t={this.props.t}/>
              <div id="directions">
          <div className="transportList">
            <h2>
              <i className="fas fa-sun" />
              {this.props.t("location.plane", {
                framework: "react-i18next"
              })}
            </h2>
            <span className="detailedDirections">
              {this.props.t("location.planedescription1", {
                framework: "react-i18next"
              })}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.busradar.com/coach/bari-airport-bri/foggia/"
              >
                {this.props.t("location.planedescription2", {
                  framework: "react-i18next"
                })}
              </a>{" "}
              {this.props.t("location.planedescription3", {
                framework: "react-i18next"
              })}
            </span>
          </div>
          <div className="transportList">
            <h2>
              <i className="fas fa-sun" />
              {this.props.t("location.car", {
                framework: "react-i18next"
              })}
            </h2>
            <span className="detailedDirections">
              {this.props.t("location.cardescription", {
                framework: "react-i18next"
              })}
            </span>
          </div>
          <div className="transportList">
            <h2>
              <i className="fas fa-sun" />
              {this.props.t("location.train", {
                framework: "react-i18next"
              })}
            </h2>
            <span className="detailedDirections">
              {this.props.t("location.traindescription", {
                framework: "react-i18next"
              })}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.trenitalia.com/tcom-en"
              >
                {this.props.t("location.traindescription2", {
                  framework: "react-i18next"
                })}
              </a>
            </span>
          </div>
        </div>
              </Fragment>
              )
            }} />

          <Route exact path="/registry"  render={() => {
              return (
              <Fragment>
              <Navbar t={this.props.t}/>
              <div className="section">
              <h2>Registry</h2>
              <hr />
              <h3 style={{textAlign: 'center'}}>Check Back Soon</h3>
              </div>
              </Fragment>
              )
            }} />
            <Route exact path="/thingsToDo"  render={() => {
              return (
              <Fragment>
              <Navbar t={this.props.t}/>
              <div className="section">
              <h2>Things To Do</h2>
              <hr />
              <h3 style={{textAlign: 'center'}}>Check Back Soon</h3>
              </div>
              </Fragment>
              )
            }} />
            <Route exact path="/contactUs"  render={() => {
              return (
              <Fragment>
              <Navbar t={this.props.t}/>
              <AboutUs t={this.props.t} />
              </Fragment>
              )
            }} />
            <Route exact path="/database"  render={() => {
              return (
                <Table />
              )
            }} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default translate("common")(Routes);
