import React, { Fragment } from "react";
import moment from 'moment';



function Countdown() {
  const today = moment();
  const endDay = moment('2020-11-07');
  const daysLeft = endDay.diff(today, "days") + 1;

  return(
    <div>November 07, 2020 ({daysLeft} days left)</div>
  );

}

export default Countdown;
