import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { useHistory, useParams } from "react-router-dom";
import CalendarComponent from "../components/CalendarComponent";
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';

function CalendarAvailability() {
    const localizer = momentLocalizer(moment);
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

    const dateGetter = () => {
        API.getDates()
            .then(res => {
                console.log(res);

                stater = {
                    events: [
                        {
                            start: res.data[0].dateStart,         //moment().toDate(),
                            end: res.data[0].dateEnd,
                            // end: moment()
                            //     .add(1, "days")
                            //     .toDate(),
                            title: res.data[0].title //"Some title"
                        }
                    ]
                };
            })
            .catch(err => console.log(err));
    }

    let history = useHistory();
    const { id } = useParams(); // not currently being used, but good to keep in mind
    const [formObject, setFormObject] = useState({});
    //console.log(history.location.state.detail);



    useEffect(() => {
        console.log(history.location.state.detail);
    }, []);

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    // if (!history.location.state) {
    //     dateGetter();

    //}


    return (
        <div>
            <form>



                <CalendarComponent
                    events={history.location.state}
                    height="100vh"
                >
                </CalendarComponent>

            </form>
        </div>
    );
}

export default CalendarAvailability;