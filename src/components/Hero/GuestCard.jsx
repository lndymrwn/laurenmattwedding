import React, { Component } from 'react';
import {Card, ButtonGroup, ToggleButton } from "react-bootstrap";
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

  handleCheckBoxChange = (value, field) => {
    this.setState({[field]: value});
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
        <div className="my-2">
          <label className="checkBoxLabel"htmlFor={`rsvpWelcomeParty-${guestId}`}>Welcome Party</label>
          <ButtonGroup toggle>
          <ToggleButton
                key={'rsvpWelcomePartyYes'}
                type="radio"
                variant="secondary"
                name="rsvpWelcomePartyYes"
                value={'T'}
                checked={rsvpWelcomeParty === 'T'}
                onChange={(e) => this.handleCheckBoxChange(e.currentTarget.value, 'rsvpWelcomeParty')}
              >
                Yes
              </ToggleButton>
              <ToggleButton
                key={'rsvpWelcomePartyNo'}
                type="radio"
                variant="secondary"
                name="rsvpWelcomePartyNo"
                value={'F'}
                checked={rsvpWelcomeParty === 'F'}
                onChange={(e) => this.handleCheckBoxChange(e.currentTarget.value, 'rsvpWelcomeParty')}
              >
                No
              </ToggleButton>
          </ButtonGroup>
        </div>
        <div className="my-2">
          <label className="checkBoxLabel" htmlFor={`rsvpWedding-${guestId}`}>Wedding</label>
          <ButtonGroup toggle>
          <ToggleButton
                key={'rsvpWeddingYes'}
                type="radio"
                variant="secondary"
                name="rsvpWedding"
                value={'T'}
                checked={rsvpWedding === 'T'}
                onChange={(e) => this.handleCheckBoxChange(e.currentTarget.value, 'rsvpWedding')}
              >
                Yes
              </ToggleButton>
              <ToggleButton
                key={'rsvpWeddingNo'}
                type="radio"
                variant="secondary"
                name="rsvpWeddingNo"
                value={'F'}
                checked={rsvpWedding === 'F'}
                onChange={(e) => this.handleCheckBoxChange(e.currentTarget.value, 'rsvpWedding')}
              >
                No
              </ToggleButton>
          </ButtonGroup>
        </div>
        <br/>
        <Card.Subtitle className="text-muted">Please provide us with some additional information:</Card.Subtitle>
        <div className="my-2">
          <label className="checkBoxLabel" htmlFor={`email-${guestId}`}>Email:</label>
          <input onChange={(e) => this.handleChange(e, 'email')} type="text" value={email === 'null' ? "" : email}/>
        </div>
        <div>
          <label className="checkBoxLabel" htmlFor={`foodRestriction-${guestId}`}>Food Restriction:</label>
          <input  onChange={(e) => this.handleChange(e, 'foodRestriction')} value={foodRestriction === 'null' ? "" : foodRestriction} type="text"/>
        </div>
        <div>
          <label className="checkBoxLabel" htmlFor={`songRequest-${guestId}`}>Song Requests:</label>
          <input onChange={(e) => this.handleChange(e, 'songRequest')} value={songRequest === 'null' ? "" : songRequest} type="text"/>
        </div>
        <div style={{float: 'right'}} onClick={this.handleSave} className="modalButton">{!isSaving ? 'Save' : 'Saving...'}</div>
      </Card.Body>
    </Card>
    );
  }
}

export default GuestCard;