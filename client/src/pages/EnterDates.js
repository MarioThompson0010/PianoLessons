import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { useHistory, useParams } from "react-router-dom";
import CalendarComponent from "../components/CalendarComponent";
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';

function EnterDates() {
    const localizer = momentLocalizer(moment);
    let history = useHistory();
    const [formObject, setFormObject] = useState({});

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
        <div>
            <form>

            </form>
        </div>
    );

}

export default EnterDates;