import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';

import './schedule.css';

function Schedule() {
  return (
    <div className="section">
      <h2 className="scheduleHeader">Schedule</h2>
      <hr />
      <div className="dayLinks">
        <div className="dayLink">
          <a href="#friday">Friday</a>
        </div>
        <div>•</div>
        <div className="dayLink">
          <a href="#saturday">Saturday</a>
        </div>
        <div>•</div>
        <div className="dayLink">
          <a href="#sunday">Sunday</a>
        </div>
      </div>
      <ScrollAnimation animateOnce animateIn="fadeIn">
        <div className="event" id="friday">
          <div className="left">
            <div>Friday</div>
            <div>November 6th 2020</div>
          </div>
          <div className="right">
            <div>Welcome Party</div>
            <div>7:30 p.m. Dinner & Cocktail</div>
            <div>ARCA</div>
            <div>Beach Cocktail Attire</div>
            <a
              title="Add to Calendar"
              class="addeventatc"
              data-id="RP5016394"
              href="https://www.addevent.com/event/RP5016394"
              target="_blank"
              rel="nofollow"
            >
              Add to Calendar
            </a>
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateOnce animateIn="fadeIn">
        <div className="event" id="saturday">
          <div className="left">
            <div>Saturday</div>
            <div>November 7th 2020</div>
          </div>
          <div className="right">
            <div>Our Wedding Day</div>
            <div>4:00 p.m. Arrive at Hacienda Chekul</div>
            <div>4:30 p.m. Ceremony starts</div>
            <div>5:00 p.m. Cocktail and Reception</div>
            <div>Beach Formal Attire</div>
            <div className="transportInfo">
              Transportation will be provided to and from the wedding venue
              departure will be between 3:45 P.M. and 4:15pm
            </div>
            <a
              title="Add to Calendar"
              class="addeventatc"
              data-id="HB5016402"
              href="https://www.addevent.com/event/HB5016402"
              target="_blank"
              rel="nofollow"
            >
              Add to Calendar
            </a>
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateOnce animateIn="fadeIn">
        <div className="event" id="sunday">
          <div className="left">
            <div>Sunday</div>
            <div>November 7th 2020</div>
          </div>
          <div className="right">
            <div>Beach day</div>
            <div className="details">Location to be determined</div>
            <a
              title="Add to Calendar"
              class="addeventatc"
              data-id="jJ5016409"
              href="https://www.addevent.com/event/jJ5016409"
              target="_blank"
              rel="nofollow"
            >
              Add to Calendar
            </a>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default Schedule;
