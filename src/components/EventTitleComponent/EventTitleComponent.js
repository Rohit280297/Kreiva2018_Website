import React from 'react';
import './EventTitlePage.css';

const EventTitleComponent= (props) => {
  return (
    <div className="EventTitlePage">
    <img src={props.image} id="EventIcon" className="img-circle" alt="eventIcon"/>
    <h1 id="ClubEventTitle">{props.eventTitle}</h1>
    <h4 id="EventType">{props.eventType}</h4>
</div>
  )
}

export default EventTitleComponent;
