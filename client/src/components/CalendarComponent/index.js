import React from "react";
import { Link } from "react-router-dom";
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

function CalendarComponent() {
    return (
        <div>
            <Calendar
                height={100}
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
            />
        </div>

    );

}

export default CalendarComponent;

