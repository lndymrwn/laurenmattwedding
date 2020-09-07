import React, { Fragment } from "react";
import { Modal, Card } from "react-bootstrap";
import "./Hero.css";
import axios from 'axios';
// import Countdown from "../Countdown/Countdown";
import GuestCard from './GuestCard';


class Hero extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      showRsvpModal: false,
      guestList: [],
      rsvpStep: 0,
      nameInput: '',
    }
  }

  componentDidMount(){
    axios.get(`https://us-central1-laurenmattwedding-c519f.cloudfunctions.net/api/guestList`)
      .then(res => {
        this.setState({ guestList: res.data });
      })
  }

  refreshData = () => {
    axios.get(`https://us-central1-laurenmattwedding-c519f.cloudfunctions.net/api/guestList`)
      .then(res => {
        this.setState({ guestList: res.data });
      })
  }

  getRsvpStep = () => {
    const {
      rsvpStep,
      nameInput,
      guestList,
    } = this.state;

    switch(rsvpStep) {
      case 0 :
        return (
          <Fragment>
            <Modal.Header closeButton>
              <Modal.Title><h2 style={{textAlign: 'center'}}>Enter your name as printed on your invitation</h2></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div style={{display: 'flex', justifyContent: 'center'}}><input onChange={(e)=>this.setState({nameInput: e.target.value})} style={{margin: '0 auto', textAlign: 'center', width: 300}} type="text" placeholder="John Doe" value={nameInput}/></div>
            </Modal.Body>
            <Modal.Footer>
              <div onClick={()=>this.setState({rsvpStep: 1})} className="modalButton">Next</div>
            </Modal.Footer>
          </Fragment>
        );
      case 1 :
        return (
          <Fragment>{this.getCards()}</Fragment>
        );
      default:
        break;
    }
  }

  getCards = () => {
    const {
      nameInput,
      guestList,
    } = this.state;

    let currentFamilyId = guestList.find((guest) => guest.name.trim().toLowerCase() === nameInput.trim().toLowerCase()) ? guestList.find((guest) => guest.name.trim().toLowerCase() === nameInput.trim().toLowerCase()).familyId : false;

    if(!currentFamilyId) {
      return (
        <Fragment>
          <Modal.Header closeButton>
            <Modal.Title><h2 style={{textAlign: 'center'}}>Name not found</h2></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Sorry the name you entered was not found in the guest list...Please press back and try again.
          </Modal.Body>
          <Modal.Footer>
            <div onClick={()=>this.setState({rsvpStep: 0})} className="modalButton">Back</div>
          </Modal.Footer>
        </Fragment>
      )
    } else {

      let filteredGuestList = guestList.filter(guest => guest.familyId === currentFamilyId);

      return (
        <Fragment>
        <Modal.Header closeButton>
          <Modal.Title><h2 style={{textAlign: 'center'}}>Update your RSVP form(s)</h2></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            filteredGuestList.map((guest) => {
              return (
                <GuestCard guest={guest} refreshData={this.refreshData}/>
              );
            })
          }
        </Modal.Body>
        <Modal.Footer>
          <div onClick={()=>this.setState({rsvpStep: 0})} className="modalButton">Back</div>
          <div onClick={()=>this.setState({showRsvpModal: false})} className="modalButton">Close</div>
        </Modal.Footer>
        </Fragment>
      );
      
    }

    
  }

  render() {
    const {
      showRsvpModal,
      guestList,
    } = this.state;

    return (
      <section className="header" id="hero">
        {/*}<Countdown />*/}
          <div id="tagline">
            <h1 style={{fontSize: 72}}>Lauren + Matthew</h1>
            <h3>
              November 7th 2020
            </h3>
            <h3>
              Tulum, MX
            </h3>
            <div onClick={()=>this.setState({showRsvpModal: true})} className="myButton">RSVP</div>
          </div>
          <Modal size="lg" centered show={showRsvpModal} onHide={()=>this.setState({showRsvpModal: false})}>
            {this.getRsvpStep()}
          </Modal>
      </section>
    );
  }
}

export default Hero;
