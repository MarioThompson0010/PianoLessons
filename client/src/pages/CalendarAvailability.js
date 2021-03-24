import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { useHistory, useParams } from "react-router-dom";
import CalendarComponent from "../components/CalendarComponent";
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';

function CalendarAvailability() {
    const localizer = momentLocalizer(moment);

    let history = useHistory();
    const { id } = useParams(); // not currently being used, but good to keep in mind
    const [formObject, setFormObject] = useState({});
    // let [stater, setStater] = useState({

    //     events: [
    //         {
    //             start: moment().toDate(),
    //             end: moment()
    //                 .add(1, "days")
    //                 .toDate(),
    //             title: "Some title"
    //         }
    //     ]

    // });
    console.log(history.location.state.detail);
    let stater = {
        events: [
            {
                start: moment().toDate(),
                end: moment()
                    .add(1, "days")
                    .toDate(),
                title: "Some title"
            }
        ]
    };

    // setFormObject(stater);

    useEffect(() => {
        console.log(history.location.state.detail);
        // const stater = {
        //     events: [
        //         {
        //             start: moment().toDate(),
        //             end: moment()
        //                 .add(1, "days")
        //                 .toDate(),
        //             title: "Some title"
        //         }
        //     ]
        // };

        //setFormObject(stater);
    }, []);

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormLogin(event) {

        event.preventDefault();
        API.login(formObject)
            .then(res => {
                console.log(res);
                
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <form>

                 <CalendarComponent
                    events={history.location.state.detail}
                >

                </CalendarComponent> 
            </form>
        </div>
    );
}

export default CalendarAvailability;