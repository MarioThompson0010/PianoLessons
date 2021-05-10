import React from "react";
import { Link } from "react-router-dom";
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

function CalendarComponent(props) {
    if (props !== undefined) {
    return (
        

        
        <div>

            <Calendar
                localizer={localizer}
                defaultDate={new Date()}
                defaultView="month"
                events={props.events/*[0].events*/}
                style={{ height: props.height }}
            />

            {props.children}
        </div>
        

    );
    }

}

export default CalendarComponent;

