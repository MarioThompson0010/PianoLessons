import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { useHistory, useParams } from "react-router-dom";
import CalendarComponent from "../components/CalendarComponent";
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
//import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import DatePicker from "react-datepicker";

function EnterDates() {
    const localizer = momentLocalizer(moment);
    let history = useHistory();
    const [formObject, setFormObject] = useState({});
    const [startDate, setStartDate] = useState(new Date());

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormLogin(event) {

        event.preventDefault();
        // API.login(formObject)
        //     .then(res => {
        //         console.log(res);

        //     })
        //     .catch(err => console.log(err));
    };

    return (
        <div className="row mb-1">
            <div className="col-md-5">

            </div>
            <div className="cl-md-7">
                <DatePicker selected={startDate} onChange={date => setStartDate(date)} />

            </div>
        </div>
    );

}

export default EnterDates;