import React, { Component } from 'react';
import {Card } from "react-bootstrap";
import axios from 'axios';

class GuestCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guestId: props.guest.guestId,
      email: props.guest.email,
      familyId: props.guest.familyId,
      foodRestriction: props.guest.foodRestriction,
      name: props.guest.name,
      rsvpWedding: props.guest.rsvpWedding,
      rsvpWelcomeParty: props.guest.rsvpWelcomeParty,
      songRequest: props.guest.songRequest,
      isSaving: false,
    }
  }

  handleCheckBoxChange = (e, field) => {
    this.setState({[field]: e.target.checked ? "T" : "F"});
  }

  handleChange = (e, field) => {
    this.setState({[field]: e.target.value});
  }

  handleSave = () => {
    const {
      guestId,
      email,
      foodRestriction,
      rsvpWedding,
      rsvpWelcomeParty,
      songRequest,
    } = this.state
    this.setState({isSaving: true});
    axios.put(`https://us-central1-laurenmattwedding-c519f.cloudfunctions.net/api/guestList`, {
      guestId,
      email,
      foodRestriction,
      rsvpWedding,
      rsvpWelcomeParty,
      songRequest,
    })
      .then(res => {
        console.log('response', res);
        this.setState({isSaving: false});
        this.props.refreshData();
    })
    .catch(err => {
      console.log('err', err);
        this.setState({isSaving: false});
    })
  }

  render() {
    const {
      guestId,
      email,
      family,
      foodRestriction,
      name,
      rsvpWedding,
      rsvpWelcomeParty,
      songRequest,
      isSaving,
    } = this.state;

    return(
      <Card key={guestId}style={{ width: '100%', marginTop: 10 }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="text-muted">Please mark the events you are attending:</Card.Subtitle>
        <div>
          <label className="checkBoxLabel"htmlFor={`rsvpWelcomeParty-${guestId}`}>Welcome Party</label>
          <input onChange={(e) => this.handleCheckBoxChange(e, 'rsvpWelcomeParty')} checked={rsvpWelcomeParty === "T" ? true : false} className="checkBoxInput"type='checkbox' id={`rsvpWelcomeParty-${guestId}`}  name={`rsvpWelcomeParty-${guestId}`}></input>
        </div>
        <div>
          <label className="checkBoxLabel" htmlFor={`rsvpWedding-${guestId}`}>Wedding</label>
          <input onChange={(e) => this.handleCheckBoxChange(e, 'rsvpWedding')} checked={rsvpWedding === "T" ? true : false}className="checkBoxInput"type='checkbox' id={`rsvpWedding-${guestId}`}  name={`rsvpWedding-${guestId}`}></input>
        </div>
        <br/>
        <Card.Subtitle className="text-muted">Please provide us with some additional information:</Card.Subtitle>
        <div>
          <label className="checkBoxLabel" htmlFor={`email-${guestId}`}>Email:</label>
          <input onChange={(e) => this.handleChange(e, 'email')} type="text" value={email === 'null' ? "" : email}/>
        </div>
        <div>
          <label className="checkBoxLabel" htmlFor={`foodRestriction-${guestId}`}>Food Restriction:</label>
          <input  onChange={(e) => this.handleChange(e, 'foodRestriction')} value={foodRestriction === 'null' ? "" : foodRestriction} type="text"/>
        </div>
        <div>
          <label className="checkBoxLabel" htmlFor={`songRequest-${guestId}`}>Song requests:</label>
          <input onChange={(e) => this.handleChange(e, 'songRequest')} value={songRequest === 'null' ? "" : songRequest} type="text"/>
        </div>
        <div style={{float: 'right'}} onClick={this.handleSave} className="modalButton">{!isSaving ? 'Save' : 'Saving...'}</div>
      </Card.Body>
    </Card>
    );
  }
}

export default GuestCard;