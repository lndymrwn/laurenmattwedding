import React from "react";
import Map from "../Map/Map";
import "./Location.css";

class Location extends React.Component {
  render() {
    return (
      <div className="location section" id="location">
        <h2>Flight & Transportation</h2>
        {/* <p>
          {this.props.t("location.introduction", {
            framework: "react-i18next"
          })}
        </p> */}
        <hr style={{marginBottom: 20}} />
        <p>Flights will arrive to Cancun Airport (CUN).  The drive from the airport to Tulum is about 90 minutes.  We recommend the following transportation options.</p>
        <h3 style={{textAlign: 'center', fontSize:'1.8rem'}}>Car Rental</h3>
        <p>Aside from Hertz and possibly a few others, major car rental companies are offsite.  If you choose and offsite option, expect a 10-15 minute shuttle ride from the airport to the rental office.</p>
        <h3 style={{textAlign: 'center', fontSize:'1.8rem'}}>Taxi or Uber</h3>
        <p>Taxis can be purchased at the airport kiosk and are about $85 each way.</p>
        <h3 style={{textAlign: 'center', fontSize:'1.8rem'}}>Private Transportation</h3>
        <p>If you prefer to have your transportation scheduled in advance, we recommend hiring a car/van service.  These rates are only slightly more than a taxi, with round trip tickets starting at $175 per vehicle.</p>
        <a style={{textAlign: 'center', display: 'block', color: 'rgb(108, 123, 104)'}}href="https://www.cancunairporttransportations.com/?idaff=1022&gclid=EAIaIQobChMI7NeI-ISF6AIVEJ-fCh1bqgUYEAAYAyAAEgKsOvD_BwE"  target="_blank">Cancun Airport Transportation</a>
        <br/>
        <br/>
        <br/>
        <h2>Accommodations</h2>
        <hr style={{marginBottom: 20}} />
        <p>Tulum is a small town with a variety of accommodations.  Tap on the picture below to see some suggestions we’ve put together for you in Google Earth.</p>
        <p>(The presentation below is best viewed on your computer using the Chrome browser.  If you are on your phone, you will be required to download the Google Earth app, which is free.)</p>
        <a href="https://drive.google.com/open?id=1SG-dqXpvKrtniex0iOnLHhxFMM0JWQ7o&usp=sharing" target="_blank"><img style={{display: 'block', margin: '0 auto'}} width="80%" src="https://www.mayaluxe.com/wp-content/uploads/2017/11/Maya_Luxe_Riviera_Maya_Luxury_Villas_Experiences_Sian_Kaan_4_Bedrooms_Hacienda_Chekul_1.jpg"></img></a>
        {/* <p>
          {this.props.t("location.cerimonia", {
            framework: "react-i18next"
          })}{" "}
        </p>
        <p>
          {this.props.t("location.mapsuggestions", {
            framework: "react-i18next"
          })}
        </p> */}
        {/* <br />
        <Map /> */}
      </div>
    );
  }
}

export default Location;
