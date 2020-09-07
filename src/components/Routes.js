import React, {Fragment} from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from './history';
import NotFound from "./NotFound/NotFound";
import App from "../App";
import Hero from "./Hero/Hero";
import Navbar from './Navbar/Navbar';
import Location from './Location/Location';
import AboutUs from './AboutUs/AboutUs';
import Table from './Table/Table';
import Countdown from './Countdown';
import Schedule from './Schedule';
import ThingsToDo from './ThingsToDo';
import { translate } from "react-i18next";
import "./routes.css";

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
              <Schedule/>
              </Fragment>
              )
            }} />

          <Route exact path="/registry"  render={() => {
              return (
              <Fragment>
              <Navbar t={this.props.t}/>
              <div className="section" style={{textAlign: "center", height: '95vh'}}>
              <h2>Registry</h2>
              <hr />
                <Countdown />
                <a style={{ color: 'rgb(108, 123, 104)' }} target="_blank" href="https://www.zola.com/registry/laurenandmatthewnovember7">Link to registry</a>
                {/* <div className="header"></div> */}
              </div>
              </Fragment>
              )
            }} />
            <Route exact path="/thingsToDo"  render={() => {
              return (
              <Fragment>
              <Navbar t={this.props.t}/>
              <ThingsToDo />
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
